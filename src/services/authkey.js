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
    const decodeText = decodeURIComponent(text);
    const authRegex = /authkey=([^&]+)/g;
    const matchText = decodeText.match(authRegex);
    const authkey = matchText[0].replace('authkey=', '');
    return authkey;
}