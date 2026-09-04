const fs = require('fs');
const path = require('path');

const SETTINGS_FILE = path.join(__dirname, 'userSettings.json');

// Settings لوڈ کرنے کا function
function loadSettings() {
    try {
        if (fs.existsSync(SETTINGS_FILE)) {
            return JSON.parse(fs.readFileSync(SETTINGS_FILE, 'utf8'));
        }
        return {};
    } catch (error) {
        console.error('Settings load error:', error);
        return {};
    }
}

// Settings سیو کرنے کا function
function saveSettings(settings) {
    try {
        fs.writeFileSync(SETTINGS_FILE, JSON.stringify(settings, null, 2), 'utf8');
    } catch (error) {
        console.error('Settings save error:', error);
    }
}

// یوزر کی settings get کرنا
// ./lib2/settingsManager.js کو update کریں
function getUserSettings(userId) {
    const settings = loadSettings();
    return settings[userId] || {
        autoReact: false,
        antiDelete: false,
        publicMode: true, // نیا feature
        autoStatusView: false // نیا feature
    };
}

// یوزر کی settings update کرنا
function updateUserSettings(userId, newSettings) {
    const settings = loadSettings();
    settings[userId] = {
        ...(settings[userId] || { autoReact: false, antiDelete: false }),
        ...newSettings
    };
    saveSettings(settings);
    return settings[userId];
}

module.exports = {
    loadSettings,
    saveSettings,
    getUserSettings,
    updateUserSettings
};