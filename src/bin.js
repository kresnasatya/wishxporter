const mri = require('mri');
const exporter = require('./services/exporter.js');
const args = mri(process.argv.slice(2));

// Expected command
// wishxporter --file=filename.txt

// This command below will read env from secrets ke in GitHub
// wishxporter --sendto=gdrive

if (args.help) {
    console.log('Will generate help doc soon.');
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