import fs from 'fs';
import _ from 'lodash';

export default (app) => {

  let excluded  = [
    'index.js',
    'authentication.routes.js'
  ];

  fs.readdirSync(__dirname).forEach(function(file) {
    // Remove extension from file name
    var basename = file.split('.')[0];

    // Only load files that aren't directories and aren't blacklisted
    if (!fs.lstatSync(__dirname + '/' + file).isDirectory() && !_.includes(excluded, file)) {
      app.use('/api/' + basename, require('./' + file).default);
    }
  });

  app.use('/api/', require('./authentication.routes').default);
}
