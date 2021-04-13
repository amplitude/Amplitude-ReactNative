const fs = require('fs');
const path = require('path');

const packageJson = fs.readFileSync(
  path.resolve(__dirname, '../package.json'),
  'utf-8',
);

fs.writeFileSync('lib/package.json', packageJson);
