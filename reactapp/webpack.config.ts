import webpack from 'webpack';

export const config: webpack.Configuration = {
    entry: './src/index.js',  // Entry point of your application
    output: {
      filename: 'bundle.js',  // Output bundle filename
    },
    module: {
      rules: [
        // Add loaders and rules for handling different file types
        // For example, transpiling JavaScript using Babel or handling CSS files
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],  // File extensions to resolve
      fallback: {
        fs: false,
      },
    },
    plugins: [
      // Add any required plugins
    ],
  };