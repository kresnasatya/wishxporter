const path = require('path');
const fs = require('fs');
const fsPromises = fs.promises;
const axios = require('axios').default;
const GACHA_LOG_URL = "https://hk4e-api.mihoyo.com/event/gacha_info/api/";
const wishes = [
    {
        key: '301', name: 'Character Event Wish'
    },
    {
        key: '302', name: 'Weapon Event Wish'
    },
    {
        key: '200', name: 'Permanent Wish'
    }
];

getAuthKey = async(txtfile) => {
    const text = await fsPromises.readFile(txtfile, 'utf-8');
    const authRegex = /https:\/\/.+authkey=([^&]+).*#\/(?:log)?/g;
    const matchText = text.match(authRegex);
    let authkeyUrl = decodeURIComponent(matchText[0]);
    return authkeyUrl.match(/authkey=([^&]+)/)[1];
}

const getGachaLog = async ({ wish, page, endId }, txtfile) => {
    try {
        const params = {
            "authkey_ver": 1,
            "lang": "en",
            "authkey": await getAuthKey(txtfile),
            "gacha_type": wish.key,
            "page": page,
            "size": 20
        }
        if (endId) {
            params.end_id = endId;
        }
        const response = await axios.get(`${GACHA_LOG_URL}getGachaLog`, {
            headers: {
                // recommended header
                "user-agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36"
            },
            params: params
        });
        return response.data.data.list;
    } catch (error) {
        console.log(error);
    }
}

const getGachaLogs = async (wish, txtfile) => {
    try {
        let page = 1;
        let list = [];
        let result = [];
        let endId = 0;
        do {
            console.log(`Process ${wish.name} with page number ${page}`);
            if (page % 10 === 0) {
                console.log(`Take a break after processing ${wish.name} with page number ${page}`);
                await new Promise(r => setTimeout(r, 500));
                console.log("Let's do it again!");
            }
            list = await getGachaLog({ wish, page, endId }, txtfile);
            result.push(...list);
            page += 1;
            if (result.length > 0) {
                endId = BigInt(result[result.length - 1].id);
            }
        } while (list.length > 0);
        return result;
    } catch (error) {
        console.log(error);
    }
}

module.exports = async (txtfile) => {
    try {
        const collectResult = [];
        for (let x = 0; x < wishes.length; x++) {
            const gachaLogs = await getGachaLogs(wishes[x], txtfile);
            // Sorted in ASC mode
            const sortedGachaLogs = gachaLogs.sort((a, b) => (BigInt(a.id) < BigInt(b.id)) ? -1 : ((BigInt(a.id) > BigInt(b.id)) ? 1 : 0));
            const newResult = [];
            for (let index = 0; index < sortedGachaLogs.length; index++) {
                const element = sortedGachaLogs[index];
                const newElement = {
                    'time': element.time,
                    'name': element.name,
                    'type': element.item_type,
                    'rank': element.rank_type
                }
                newResult.push(newElement);
            }
            collectResult.push(newResult);
        }
        return collectResult;
    } catch (error) {
        console.log(error);
    }
};