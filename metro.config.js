// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

module.exports = {
  ...getDefaultConfig(__dirname),
  // Example: You can add custom watch folder exclusions here
  watchFolders: [
    // You can specify directories you want Metro to watch (or not)
  ],
  blacklistRE: /node_modules\/.*/,
};
