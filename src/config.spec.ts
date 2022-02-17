import { defaultTargetConfigs, parse } from './config';

describe('>>> Config Parser', () => {
  it('should return default configs if input is invalid', () => {
    const defaultConfig = {
      targets: { default: defaultTargetConfigs },
    };

    expect(parse(undefined)).toStrictEqual(defaultConfig);
    expect(parse(null)).toStrictEqual(defaultConfig);
    expect(parse(true)).toStrictEqual(defaultConfig);
    expect(parse(8)).toStrictEqual(defaultConfig);
    expect(parse('')).toStrictEqual(defaultConfig);
    expect(parse([])).toStrictEqual(defaultConfig);
  });
});
