'use strict';

const AppBase = require(`@nkm/app-core`);

class MyAppClassName extends AppBase {
    constructor() { super(); }

    _Init() {
        super._Init();

        this._defaultUserPreferences = {
            aProperty: `aValue`,
            anObject: {
                aSubProperty: `aSubValue`
            },
            anArray: []
        };
    }

}

module.exports = MyAppClassName;