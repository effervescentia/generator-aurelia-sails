'use strict';
var path = require('path');
var helpers = require('yeoman-test');
var assert = require('yeoman-assert');

describe('general', function() {
  before(function(done) {
    helpers.run(path.join(__dirname, '../app'))
      .withPrompts({ features: [] })
      .withGenerators([
        [helpers.createDummyGenerator(), 'mocha:app']
      ])
      .on('end', done);
  });

  it('the generator can be required without throwing', function() {
    // not testing the actual run of generators yet
    require('../app');
  });

  it('creates expected files', function() {
    assert.file([
      'package.json',
      'gulpfile.js',
      'README.md',
      'tasks/',
      'tasks/bump.js',
      'backend/package.json',
      'backend/.editorconfig',
      'backend/.gitignore',
      'backend/.sailsrc',
      'backend/.travis.yml',
      'backend/src/',
      'frontend/',
      'frontend/package.json',
      'frontend/.editorconfig',
      'frontend/.gitignore',
      'frontend/src/'
    ]);
  });
});
