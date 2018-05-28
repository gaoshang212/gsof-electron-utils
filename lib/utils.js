"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class utils {
    /**
     * 是否Electron Renderer
     */
    static get isElectronRenderer() {
        let w = window;
        return w && w.process && w.process.type === 'renderer';
    }
    /**
     *
     * 是否是Windows
     */
    static get isWindows() {
        return this.system('win32');
    }
    /**
     * 是否是OSX(Mac)
     */
    static get isOSX() {
        return this.system('darwin');
    }
    /**
     * 是否是Linux
     */
    static get isLinux() {
        return this.system('linux');
    }
    /**
     * 最大化/恢复 (mac为 全屏/恢复)
     */
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
            !window.isMaximized() ? window.maximize() : window.unmaximize();
        }
        else if (this.isOSX) {
            window.setFullScreen(!window.isFullScreen);
        }
    }
    /**
     * 关闭
     */
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
    /**
     * 最小化
     */
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
    /**
     * 重新设置宽高
     * @param width 宽度
     * @param height 高度
     */
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
    /**
     * 窗口是否可改变大小
     * @param able true: 窗口可以改变大小, false：窗口不可以改变大小
     */
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
    /**
     * 焦点为在窗口时，  Windows: 窗口闪烁， Mac: dock 上图标弹跳
     */
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
    /**
     * 设置Dock上的消息数量，当数量大于99,现显 ...  windows调用无效
     * @param num 消息数量
     */
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
    static system(name) {
        if (!this.isElectronRenderer) {
            return false;
        }
        return process.platform === name;
    }
}
exports.utils = utils;
//# sourceMappingURL=utils.js.map