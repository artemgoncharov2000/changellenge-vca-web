require('ts-node').register({
    transpileOnly: true,
    file: true,
    project: './test/tsconfig.json',
});
module.exports = require('./wdio.conf.ts');