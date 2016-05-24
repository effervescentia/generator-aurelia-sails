# Aurelia SailsJS Boilerplate

### Directory structure
* ```backend``` = Sails.js server, just API nothing else
* ```frontend``` = Aurelia SPA, just frontend side

### Installation
First of all you have to install <code>npm</code> and <code>node.js</code> to your box. Installation instructions can
be found [here](http://sailsjs.org/#/getStarted?q=what-os-do-i-need).

After that you need to install <code>bower</code>, <code>gulp</code> and <code>sails</code> main packages to make all
things to happen. These can be installed with following commands on your *nix box.
<pre>
sudo npm install -g sails gulp jspm
</pre>

After that you need to download codes of this project to your computer, please follow instructions below.

#### Back- and frontend installation
From the base directory:
<pre>
npm install
</pre>

That will install all needed packages for back- and frontend. If this won't work you could try first to initialize
back- and frontend submodules with following command:

### Running of this project
You have to start both <code>backend</code> and <code>frontend</code> servers to run this project. You can do this
by running following command on your project root directory:

<pre>
npm start
</pre>

This will start back- and frontend applications for you. And if you need to start those separately see following docs
about that.

#### Backend
<pre>
cd backend
npm start
</pre>

This will start sails.js server on defined port. By default this is accessible from http://localhost:1337 url. If you
try that with your browser you should only see page that contains <code>Not Found</code> message on it. This means that
everything is ok.

#### Frontend

##### Development #####
<pre>
cd frontend
npm start
</pre>

This will start simple web server that you can use within developing frontend side. By default this is accessible from
http://localhost:9000 url. You should be see login page if you try that url with your browser.
