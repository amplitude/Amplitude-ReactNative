import { version } from '../package.json';

const packageSourceName = 'amplitude-react-native';

export const Constants: {
  packageSourceName: string;
  packageVersion: string;
} = {
  packageSourceName,
  packageVersion: version,
};
