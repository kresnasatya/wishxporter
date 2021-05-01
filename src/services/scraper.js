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

const getGachaLog = async ({ wish, page, endId }, authkey) => {
    try {
        const params = {
            "authkey_ver": 1,
            "lang": "en",
            "authkey": authkey,
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
        const result = response.data;
        if (result.data === null) {
            throw new Error(`Cannot get your gacha data because: ${result.message}! Please try again later.`);
        } else {
            return result.data.list;
        }
    } catch (error) {
        console.log(error.message);
    }
}

const getGachaLogs = async (wish, authkey, lite) => {
    try {
        let page = 1;
        let fiveStarGacha = null;
        let list = [];
        let result = [];
        let endId = 0;
        let defaultCondition = function () {
            if (lite) {
                return fiveStarGacha === null;
            } else {
                return list.length > 0;
            }
        }
        // list.length > 0;
        // if (lite) {
        //     defaultCondition = fiveStarGacha === null;
        // }
        do {
            console.log(`Process ${wish.name} with page number ${page}`);
            list = await getGachaLog({ wish, page, endId }, authkey);
            if (lite) {
                list.forEach(item => {
                    if (item.rank_type === '5') {
                        fiveStarGacha = item;
                    }
                });   
            }
            result.push(...list);
            page += 1;
            if (result.length > 0) {
                endId = BigInt(result[result.length - 1].id);
            }
        } while (defaultCondition());
        return result;
    } catch (error) {
        console.log(error);
    }
}

module.exports = async (authkey, lite = false) => {
    try {
        const collectResult = [];
        for (let x = 0; x < wishes.length; x++) {
            const gachaLogs = await getGachaLogs(wishes[x], authkey, lite);
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