'use strict';

//
// Creates background app.
// It will create a main window, load the specified app-index html file
// Then load & Boot() the specified app file, which is expected to extends @nkm/app-core/AppBase.
//
// Basically, it's just creating a window in which the app is executed, while enabling
// electron's node capabilities in said app.
//

const App = require(`./js-process/app`);
new App({
    html: `./index-electron.html`,
    renderer: `./js-renderer/app.js`
});