import { Namer } from '@parcel/plugin';
import { Config, parse } from './config';

export default new Namer({
  name() {
    return null;
  },

  async loadConfig({ config }): Promise<Config> {
    return parse(await config.getPackage());
  },
});
