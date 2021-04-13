const fs = require('fs');
const path = require('path');

const version = require('../package.json').version;

const packageSourceName = 'amplitude-react-native';

const constantsCode = `export const Constants: {
  packageSourceName: string;
  packageVersion: string;
} = {
  packageSourceName: '${packageSourceName}',
  packageVersion: '${version}',
};
`;

fs.writeFileSync(
  path.resolve(__dirname, '..', 'src', 'constants.ts'),
  constantsCode,
);

process.exit(0);
