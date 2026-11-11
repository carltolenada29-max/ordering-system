const fs = require('fs'), path = require('path');
const root = path.join(__dirname, '..');
const www = path.join(root, 'www');
fs.rmSync(www, { recursive: true, force: true });
fs.mkdirSync(path.join(www, 'ionic'), { recursive: true });
fs.cpSync(path.join(root, 'node_modules/@ionic/core/dist/ionic'), path.join(www, 'ionic'), { recursive: true });
fs.cpSync(path.join(root, 'node_modules/@ionic/core/css/ionic.bundle.css'), path.join(www, 'ionic.bundle.css'));
fs.copyFileSync(path.join(root, 'index.html'), path.join(www, 'index.html'));
console.log('www ready');
