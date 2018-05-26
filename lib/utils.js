"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class utils {
    static get isElectronRenderer() {
        let w = window;
        return w && w.process && w.process.type;
    }
    static system(name) {
        if (!this.isElectronRenderer) {
            return false;
        }
        return process.platform === name;
    }
    static get isWindows() {
        return this.system('win32');
    }
    static get isOSX() {
        return this.system('darwin');
    }
    static get isLinux() {
        return this.system('linux');
    }
    static max() {
        if (!this.isElectronRenderer) {
            return;
        }
        const { remote } = require('electron');
        let window = remote.getCurrentWindow();
        if (!window) {
            return;
        }
        if (this.isWindows) {
            window.isMaximized ? window.maximize() : window.unmaximize();
        }
        else if (this.isOSX) {
            window.setFullScreen(!window.isFullScreen);
        }
    }
    static close() {
        if (!this.isElectronRenderer) {
            return;
        }
        const { remote } = require('electron');
        let window = remote.getCurrentWindow();
        if (!window) {
            return;
        }
        window.close();
    }
    static min() {
        if (!this.isElectronRenderer) {
            return;
        }
        const { remote } = require('electron');
        let window = remote.getCurrentWindow();
        if (!window) {
            return;
        }
        window.minimize();
    }
    static resize(width, height) {
        if (!this.isElectronRenderer) {
            return;
        }
        const { remote } = require('electron');
        let window = remote.getCurrentWindow();
        if (!window) {
            return;
        }
        window.setSize(width, height);
    }
    static resizable(able) {
        if (!this.isElectronRenderer) {
            return;
        }
        const { remote } = require('electron');
        let window = remote.getCurrentWindow();
        if (!window) {
            return;
        }
        window.setResizable(able);
    }
    static flash() {
        if (!this.isElectronRenderer) {
            return;
        }
        const { remote, app } = require('electron');
        let window = remote.getCurrentWindow();
        if (!window || window.isFocused()) {
            return;
        }
        if (this.isWindows) {
            window.flashFrame(true);
        }
        else if (this.isOSX) {
            app.dock.bounce("informational");
        }
    }
    static setBadgeNumber(num) {
        if (!this.isElectronRenderer) {
            return;
        }
        const { remote, app } = require('electron');
        let window = remote.getCurrentWindow();
        if (!window || window.isFocused()) {
            return;
        }
        if (this.isWindows) {
            //window.flashFrame(true);
        }
        else if (this.isOSX) {
            app.dock.setBadge(num > 99 ? "..." : (num || 0).toString());
        }
    }
}
exports.utils = utils;
//# sourceMappingURL=utils.js.map