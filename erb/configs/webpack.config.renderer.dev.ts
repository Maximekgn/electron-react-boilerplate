{
  test: /\.s[ac]ss$/i,
  use: [
    'style-loader',
    'css-loader',
    {
      loader: 'sass-loader',
      options: {
        // Use the modern API
        implementation: require('sass'),
      },
    },
  ],
}, 