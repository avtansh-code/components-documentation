'use strict';

exports.tslint = {
  test: /\.ts$/,
  loader: 'tslint',
  exclude: /node_modules/,
};

exports.istanbulInstrumenter = {
  test: /^(.(?!\.test))*\.ts$/,
  loader: 'istanbul-instrumenter-loader',
};

exports.ts = {
  test: /\.ts$/,
  loader: 'awesome-typescript-loader',
  exclude: /node_modules/,
};

exports.html = {
  test: /\.html$/,
  loader: 'raw',
  exclude: /node_modules/,
};

exports.css = {
  test: /\.css$/,
  loader: 'style!css?-minimize!postcss',
  exclude: [/node_modules/, /bower_components/, /\.raw\.css$/],
};

exports.vendoredCss = {
  test: /\.css$/,
  loader: 'style!raw', // TODO: check and update later
  include: [/node_modules/, /bower_components/],
};

exports.rawCss = {
  test: /\.raw\.css$/,
  loader: 'style!raw', // TODO: check and update later
  exclude: [/node_modules/, /bower_components/],
};

exports.svg = makeUrlLoader(/\.svg$/);
exports.eot = makeUrlLoader(/\.eot$/);
exports.woff = makeUrlLoader(/\.woff$/);
exports.woff2 = makeUrlLoader(/\.woff2$/);
exports.ttf = makeUrlLoader(/\.ttf$/);
exports.otf = makeUrlLoader(/\.otf$/);

function makeUrlLoader(pattern) {
  return {
    test: pattern,
    loader: 'url?limit=100000',
    exclude: /node_modules/,
  };
}