module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@modules': './src/modules',
          '@services': './src/services',
          '@utils': './src/utils',
          '@views': './src/views',
        },
      },
    ],
  ],
};
