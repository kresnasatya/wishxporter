#! /usr/bin/env node
const yargs = require('yargs')(process.argv.slice(2));
const exporter = require('./services/exporter');

const builder = command => 
    command
        .positional("textfile", {
            describe: "Text file from ~/AppData/LocalLow/miHoYo/Genshin Impact (for Windows OS). Text file name is output_log.txt",
            default: 'output_log.txt',
            demandOption: false
        });

const handler = () => {
    (async() => {
        await exporter();
    })()
};

yargs.command("*", 'Export player gacha Genshin Impact to Excel', builder, handler).parse();