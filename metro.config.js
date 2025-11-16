// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
const config = getDefaultConfig(__dirname);
module.exports = withNativeWind(config, { input: './app/globals.css' });

module.exports = withNativeWind((() => {
    const config = getDefaultConfig(__dirname);
    const { assetExts, sourceExts } = config.resolver;
    config.resolver.assetExts = assetExts.filter(ext => ext !== 'svg');
    config.resolver.sourceExts = [...sourceExts, 'svg'];
    config.transformer.babelTransformerPath = require.resolve('react-native-svg-transformer');
    return config;
})(), { input: './app/globals.css' },
);