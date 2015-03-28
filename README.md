classifox
=================

A new, more modular and extensible front end for WebJCL. Classified then promptly declassified.

Setup
---------------

### For Users

You can grab the latest version of the client, pre-compiled and ready to run from the dist folder.

### For Developers

Project `classifox` has the following requirements in order to run the build process. Please make sure your system has them installed.

  * [NodeJS](http://nodejs.org/)
  * C Compiler -
    [GCC](https://gcc.gnu.org/),
    [Visual Studio](http://go.microsoft.com/?linkid=9816758),
    [etc](http://c-compiler.deviantart.com/)
  * [Python2](https://www.python.org/download/releases/2.7.6/)

In addition, install the following node binaries as well.

    * [NPM](https://www.npmjs.com/) - probably already exists on your system
    * [Gulp](http://gulpjs.com/) - `npm install gulp -g`

In addition, the `NODE_PATH` environmental variable must contain the location
    of the global `node_modules` installation.

Next clone the repository at
    [GitLab](https://github.com/niumainframe/classifox.git).

This framework makes use of the Front-End-Workflow created by
[Taylor1791](https://github.com/taylor1791). For complete documentation on the workflow visit his
[repository](https://github.com/taylor1791/front-end-workflow). It is included as a `git submodule` within `classifox`.

Usage
---------------

### First Time Use

To initially set up the environment once it has been cloned run the following commands.

    $ git submodule update --init --recursive
    $ npm install gulp
    $ gulp install

### Workflow

When developing use `gulp medusa-gaze` to run the development server. This
starts a static webserver and uses browser-sync to synchronize your actions
across all running instances of the application.
