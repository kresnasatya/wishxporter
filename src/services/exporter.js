const getData = require('./scraper.js');
const getAuthKey = require('./authkey.js');
const ExcelJS = require('exceljs');

function pad(num) {
    return `${num}`.padStart(2, "0");
}
  
function getTimeString() {
    const d = new Date();
    const YYYY = d.getFullYear();
    const MM = pad(d.getMonth() + 1);
    const DD = pad(d.getDate());
    const HH = pad(d.getHours());
    const mm = pad(d.getMinutes());
    const ss = pad(d.getSeconds());
    return `${YYYY}-${MM}-${DD}__${HH}_${mm}_${ss}`;
}

module.exports = async(options = {}) => {
    try {
        const authkey = getAuthKey(options);
        if (authkey === undefined || authkey === null) {
            throw new Error(`Please provide output_log.txt or AUTHKEY_URL in your environment file.`);
        }
        const data = await getData(authkey);
        const workbook = new ExcelJS.Workbook();
        for (let x = 0; x < data.length; x++) {
            const element = data[x];
            let sheetname = 'Character Event Wish';
            if (x === 1) {
                sheetname = 'Weapon Event Wish';
            } else if (x === 2) {
                sheetname = 'Permanent Wish';
            }

            const worksheet = workbook.addWorksheet(sheetname, {views: [{state: 'frozen', ySplit: 1}]});
            worksheet.columns = [
                { header: 'Type', key: 'type'},
                { header: 'Rarity (Star)', key: 'rank' },
                { header: 'Name', key: 'name'},
                { header: 'Time', key: 'time'},
                { header: 'Wish Count', key: 'total'},
                { header: 'Pity Count', key: 'pity'},
            ];
            // force the columns to be at least as long as their header row.
            // Have to take this approach because ExcelJS doesn't have an autofit property.
            worksheet.columns.forEach(column => {
                column.width = column.header.length < 12 ? 12 : column.header.length
            });

            // Make the header bold.
            // Note: in Excel the rows are 1 based, meaning the first row is 1 instead of 0.
            worksheet.getRow(1).font = {bold: true}

            let total = 0;
            let pity = 0;
            for (let index = 0; index < element.length; index++) {
                const item = element[index];

                total += 1;
                pity += 1;

                item.total = total;
                item.pity = pity;

                if (item.rank == "5") {
                    pity = 0;
                }
            }

            worksheet.addRows(element);
            // xlsx header style
            (["A", "B", "C", "D", "E", "F"]).forEach((v) => {
                worksheet.getCell(`${v}1`).border = {
                    top: {style:'thin', color: {argb:'ffc4c2bf'}},
                    left: {style:'thin', color: {argb:'ffc4c2bf'}},
                    bottom: {style:'thin', color: {argb:'ffc4c2bf'}},
                    right: {style:'thin', color: {argb:'ffc4c2bf'}}
                }
                worksheet.getCell(`${v}1`).fill = {
                    type: 'pattern',
                    pattern:'solid',
                    fgColor:{argb:'ffdbd7d3'},
                }
                worksheet.getCell(`${v}1`).font = {
                    color: { argb: "ff757575" },
                    bold : true
                }
            });

            // set xlsx cell style
            element.forEach((v, i) => {
                (["A", "B", "C", "D", "E", "F"]).forEach((c) => {
                    worksheet.getCell(`${c}${i + 2}`).border = {
                        top: {style:'thin', color: {argb:'ffc4c2bf'}},
                        left: {style:'thin', color: {argb:'ffc4c2bf'}},
                        bottom: {style:'thin', color: {argb:'ffc4c2bf'}},
                        right: {style:'thin', color: {argb:'ffc4c2bf'}}
                    }
                    worksheet.getCell(`${c}${i + 2}`).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: {argb: 'ffebebeb'},
                    }
                    // rare rank background color
                    const rankColor = {
                        '3': "ff8e8e8e",
                        '4': "ffa256e1",
                        '5': "ffbd6932",
                    }
                    worksheet.getCell(`${c}${i + 2}`).font = {
                        color: { argb: rankColor[v.rank] },
                        bold : v.rank != "3"
                    }
                })
            })
        }

        await workbook.xlsx.writeFile(`${getTimeString()}_Genshin_Wish_History.xlsx`);
    } catch (error) {
        console.log(error);
    }
};