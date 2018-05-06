import fs from 'fs';
import _ from 'lodash';

export default (app) => {

  let excluded = [
    'index.js'
  ];

  fs.readdirSync(__dirname).forEach(function (file) {
    // Remove extension from file name
    var basename = file.split('.')[0];

    // Only load files that aren't directories and aren't blacklisted
    if (!fs.lstatSync(__dirname + '/' + file).isDirectory() && !_.includes(excluded, file)) {
      app.use('/public/api/v1/' + basename, require('./' + file).default);
    }
  });
}
