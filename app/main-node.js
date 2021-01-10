const{app, autoUpdater, BrowserWindow, Menu, MenuItem, globalShortcut } = require(`electron`);
const path = require(`path`);
const url = require(`url`);
const ElectronMain = require(`./js/main/electron-main.js`);

//
// Creates background app.
// It will create a main window, load the specified app-index html file
// Then load & Boot() the specified app file, which is expected to extends @nkm/app-core/AppBase.
//
// Basically, it's just creating a window in which the app is executed, while enabling
// electron's node capabilities in said app.
//

var eApp = new ElectronMain({
    dirname:__dirname,
    appindex:`index-electron.html`,
    boot:`./js/app.js`,
    //autoUpdateFeed:feed
});