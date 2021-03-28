#! /usr/bin/env node
const yargs = require('yargs');
const fs = require('fs');
const exporter = require('./services/exporter');

const coarseText = text => {
    const args = process.argv.slice(2);
    if (fs.existsSync(args[0])) {
        return text;
    }
    throw new Error(`${text} doesn't exist`);
}

const builder = command => 
    command
        .positional("textfile", {
            describe: "Text file from ~/AppData/LocalLow/miHoYo/Genshin Impact (for Windows OS). Text file name is output_log.txt",
            coerce: coarseText
        });

const handler = ({ textfile }) => {
    (async() => {
        await exporter(textfile);
    })()
};

yargs.command("* <textfile>", false, builder, handler).parse();