const fs = require('fs');
const path = require('path');

class FeaturesManager {
    constructor() {
        this.featuresFile = path.join(__dirname, 'features.json');
        this.ensureFileExists();
    }

    ensureFileExists() {
        const dir = path.dirname(this.featuresFile);
        
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }
        
        if (!fs.existsSync(this.featuresFile)) {
            fs.writeFileSync(this.featuresFile, '{}');
            console.log('✅ Created features.json');
        }
    }

    getUserSettings(userId) {
        try {
            this.ensureFileExists();
            const data = fs.readFileSync(this.featuresFile, 'utf8');
            
            if (!data.trim()) {
                return this.getDefaultSettings();
            }
            
            const allSettings = JSON.parse(data);
            
            if (allSettings[userId]) {
                return {
                    ...this.getDefaultSettings(),
                    ...allSettings[userId]
                };
            } else {
                const defaultSettings = this.getDefaultSettings();
                this.updateSettings(userId, defaultSettings);
                return defaultSettings;
            }
            
        } catch (error) {
            console.log('⚠️ Error loading features, using defaults:', error.message);
            return this.getDefaultSettings();
        }
    }

    getDefaultSettings() {
        return {
            // Bot Settings
            mode: 'public',
            autoreact: false,
            antidelete: false,
            statusview: false,
            
            // 🎨 **SIRF YEH DO FIELDS CHANGE HONGE**
            botName: 'υѕαмα ¢яαѕн 💫',
            botImage: 'https://i.postimg.cc/xdcK2sCx/IMG-20250904-WA0007.jpg',
            
            // Metadata
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
        };
    }

    updateSettings(userId, updates) {
        try {
            this.ensureFileExists();
            const data = fs.readFileSync(this.featuresFile, 'utf8');
            const allSettings = data.trim() ? JSON.parse(data) : {};
            
            allSettings[userId] = {
                ...this.getDefaultSettings(),
                ...(allSettings[userId] || {}),
                ...updates,
                updatedAt: new Date().toISOString()
            };
            
            fs.writeFileSync(this.featuresFile, JSON.stringify(allSettings, null, 2));
            return true;
        } catch (error) {
            console.log("❌ Features update error:", error.message);
            return false;
        }
    }

    // 🎨 **SIRF YEH DO FIELDS K LIYE METHODS**
    getUserTheme(userId) {
        const settings = this.getUserSettings(userId);
        return {
            botName: settings.botName,
            botImage: settings.botImage
        };
    }

    updateUserTheme(userId, themeUpdates) {
        // Sirf botName aur botImage allow hain
        const allowed = {};
        if (themeUpdates.botName) allowed.botName = themeUpdates.botName;
        if (themeUpdates.botImage) allowed.botImage = themeUpdates.botImage;
        
        return this.updateSettings(userId, allowed);
    }

    resetUserTheme(userId) {
        const defaults = this.getDefaultSettings();
        return this.updateSettings(userId, {
            botName: defaults.botName,
            botImage: defaults.botImage
        });
    }
}

module.exports = new FeaturesManager();