import {
  CustomWebpackBrowserSchema,
  TargetOptions,
} from '@angular-builders/custom-webpack';
import * as webpack from 'webpack';

export default (
  config: webpack.Configuration,
  options: CustomWebpackBrowserSchema,
  targetOptions: TargetOptions
) => {
  if (typeof config !== undefined) {
    config.snapshot = {
      managedPaths: [],
      immutablePaths: [],
    };
    config.resolve!.alias = {
      'jquery-ui/datepicker': 'components-jqueryui/ui/widgets/datepicker',
    };
    config.module!.rules = config.module!.rules!.concat([
      {
        test: /\.html$/,
        exclude: [
          /node_modules\/(?!(ib-style-modules|ib-web-commons|ib-web-payments|ib-menus|ib-web-ancillaries)\/).*/,
          /\.component\.html$/,
        ],
        use: [
          {
            loader: 'html-loader',
            options: {
              sources: false,
              minimize: false,
              esModule: false,
            },
          },
        ],
      },
    ]);
    config
      .optimization!.minimizer!.filter(
        ({ constructor: { name } }) => name === 'JavaScriptOptimizerPlugin'
      )
      .forEach((plugin: any) => {
        plugin.options.keepIdentifierNames = true;
        plugin.options.keepNames = true;
        plugin.options.removeLicenses = false;
      });
    config.plugins!.push(new webpack.ProvidePlugin(providePluginConfig));
  }

  return config;
};

const providePluginConfig = {
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
  $: 'jquery',
  moment: 'moment',
};
