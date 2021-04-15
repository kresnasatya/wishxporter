const path = require('path');
const fs = require('fs');
const mri = require('mri');
const chalk = require('chalk');
const exporter = require('./services/exporter.js');
const args = mri(process.argv.slice(2));

// Expected command
// wishxporter --file=filename.txt

// This command below will read env from secrets ke in GitHub
// wishxporter --sendto=gdrive

if (args.help) {
    const help = fs
    .readFileSync(path.join(__dirname, '..', 'help.md'), 'utf-8')
    .replace(/^(\s*)#+ (.+)/gm, (m, s, _) => s + chalk.bold(_))
    .replace(/_([^_]+)_/g, (m, _) => chalk.underline(_))
    .replace(/`([^`]+)`/g, (m, _) => chalk.cyan(_));

    process.stdout.write(`\n${help}\n`);
    return true;
} if (args.file) {
    const options = { file: args.file };
    (async () => {
        await exporter(options);
    })();
} else if (args.sendto) {
    const options = { sendto: 'gdrive' };
    (async () => {
        await exporter(options);
    })();
} else {
    (async () => {
        await exporter();
    })();
}