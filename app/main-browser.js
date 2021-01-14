//
// This code will be at the root of the browserify bundle.
// (important note : this code should not be packaged for electron)
// Since it's not a constructor, it will be executed as soon as the bundle is loaded
// It emulate/compensate for what ElectronApp usually does when run in Electron.
//
// This obviously assume the execution environement has no node capabilities.
//
//

const { U, PATH } = require(`@nkm/utils`);
const { ENV } = require(`@nkm/environment`);

ENV.instance.node = false;

// Prepare the app wrapper BEFORE setting environment infos.
require(`./js/app`).instance.Prepare();

var paths = {};

paths.exe = '';
paths[PATH.APP_CONTEXT] = '';
paths[PATH.HOME] = '';
paths[PATH.APP_DATA] = '';
paths[PATH.USER_DATA] = '';
paths[PATH.TEMP] = '';
paths[PATH.DESKTOP] = '';
paths[PATH.DOCUMENTS] = '';
paths[PATH.DOWNLOADS] = '';
paths[PATH.MUSIC] = '';
paths[PATH.PICTURES] = '';
paths[PATH.VIDEOS] = '';
paths[PATH.LOGS] = '';

//
// Start the environment.
// This will trigger app deployement in the webpage.
//

// TODO : argv should be the parsed URL.
// TODO : Just create & start the app inside the environment rather than having to "prepare it" -- streamline the process.
ENV.instance.Start({ paths: paths, argv: [] });