const fs = require('fs');
require('dotenv').config();

module.exports = (options) => {
    let path = './output_log.txt';
    if (options.file) {
        path = options.file;
    }

    if (fs.existsSync(path)) {
        const text = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
        return getAuthKey(text);
    } else if (process.env.AUTHKEY_URL !== undefined) {
        return getAuthKey(process.env.AUTHKEY_URL);
    } else {
        return undefined;
    }
}

function getAuthKey(text) {
    const authRegex = /https:\/\/.+authkey=([^&]+).*#\/(?:log)?/g;
    const matchText = text.match(authRegex);
    let authkeyUrl = decodeURIComponent(matchText[0]);
    let result = authkeyUrl.match(/authkey=([^&]+)/)[1];
    return result;
}