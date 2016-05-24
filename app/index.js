'use strict';
var generators = require('yeoman-generator');
var yosay = require('yosay');
var chalk = require('chalk');
var mkdirp = require('mkdirp');

module.exports = generators.Base.extend({
  constructor: function() {
    generators.Base.apply(this, arguments);
  },

  initializing: function() {
    this.pkg = require('../package.json');
  },

  prompting: function() {
    if (!this.options['skip-welcome-message']) {
      this.log(yosay('\'Allo \'allo! Out of the box I include HTML5 Boilerplate, jQuery, and a gulpfile to build your app.'));
    }
  },

  writing: {
    gulpfile: function() {
      this.fs.copy(
        this.templatePath('gulpfile.js'),
        this.destinationPath('gulpfile.js')
      );
    },

    packageJSON: function() {
      this.fs.copy(
        this.templatePath('package.json'),
        this.destinationPath('package.json')
      );
    },

    readme: function() {
      this.fs.copy(
        this.templatePath('README.md'),
        this.destinationPath('README.md')
      );
    },

    backend: function() {
      this.fs.copy(
        this.templatePath('backend/'),
        this.destinationPath('backend')
      );
    },

    frontend: function() {
      this.fs.copy(
        this.templatePath('frontend/'),
        this.destinationPath('frontend')
      );
    },

    tasks: function() {
      this.fs.copy(
        this.templatePath('tasks/'),
        this.destinationPath('tasks')
      );
    },

    dotFiles: function() {
      this.fs.copy(
        this.templatePath('backend/.editorconfig'),
        this.destinationPath('backend/.editorconfig')
      );
      this.fs.copy(
        this.templatePath('backend/.gitignore'),
        this.destinationPath('backend/.gitignore')
      );
      this.fs.copy(
        this.templatePath('backend/.sailsrc'),
        this.destinationPath('backend/.sailsrc')
      );
      this.fs.copy(
        this.templatePath('backend/.travis.yml'),
        this.destinationPath('backend/.travis.yml')
      );
      this.fs.copy(
        this.templatePath('frontend/.editorconfig'),
        this.destinationPath('frontend/.editorconfig')
      );
      this.fs.copy(
        this.templatePath('frontend/.gitignore'),
        this.destinationPath('frontend/.gitignore')
      );
    }
  },

  install: function() {
    this.installDependencies({
      skipMessage: this.options['skip-install-message'],
      skipInstall: this.options['skip-install']
    });
  },

  end: function() {
    var bowerJson = this.fs.readJSON(this.destinationPath('bower.json'));
    var howToInstall = '\nRun ' + chalk.yellow.bold('npm install') + ' at the root level.';

    if (this.options['skip-install']) {
      this.log(howToInstall);
      return;
    }
  }
});
