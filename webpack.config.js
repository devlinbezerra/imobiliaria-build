const path = require('path');

module.exports = {
    entry: './assets/scripts/index.js',
    output: {
        path: path.resolve(__dirname,'assets/scripts'),
        filename: 'bundle.js'
    }
};