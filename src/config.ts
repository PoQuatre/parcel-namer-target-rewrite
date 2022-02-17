import { DeepPartial } from './utils';

interface RewriteRule {
  from: RegExp;
  to: string;
}

interface TargetConfig {
  chain: string;
  verbose: boolean;
  disableDev: boolean;
  disableDevHash: boolean;
  rules: RewriteRule[];
}

export interface Config {
  targets: {
    default: TargetConfig;
    [key: string]: TargetConfig;
  };
}

export interface InputConfig {
  'parcel-namer-target-rewrite': DeepPartial<Config & TargetConfig>;
}

export const defaultTargetConfigs: TargetConfig = {
  chain: '@parcel/namer-default',
  verbose: false,
  disableDev: false,
  disableDevHash: false,
  rules: [],
};

export const parse = (input: unknown): Config => {
  if (!input || typeof input !== 'object' || Array.isArray(input)) {
    return {
      targets: {
        default: defaultTargetConfigs,
      },
    };
  }
  return {} as Config;
};
