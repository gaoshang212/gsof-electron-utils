import { remote, app } from "electron";
export class utils {

    /**
     * 是否Electron Renderer
     */
    public static get isElectronRenderer(): boolean {
        let w = window as any;
        return w && w.process && w.process.type === 'renderer';
    }

    /**
     *
     * 是否是Windows
     */
    public static get isWindows() {
        return this.system('win32');
    }

    /**
     * 是否是OSX(Mac)
     */
    public static get isOSX() {
        return this.system('darwin');
    }

    /**
     * 是否是Linux
     */
    public static get isLinux() {
        return this.system('linux');
    }

    /**
     * 最大化/恢复 (mac为 全屏/恢复)
     */
    public static max() {
        if (!this.isElectronRenderer) {
            return;
        }

        const { remote } = require('electron')
        let window = remote.getCurrentWindow();
        if (!window) {
            return;
        }

        if (this.isWindows) {
            !window.isMaximized() ? window.maximize() : window.unmaximize();
        } else if (this.isOSX) {
            window.setFullScreen(!window.isFullScreen);
        }
    }

    /**
     * 关闭
     */
    public static close() {
        if (!this.isElectronRenderer) {
            return;
        }

        const { remote } = require('electron')
        let window = remote.getCurrentWindow();
        if (!window) {
            return;
        }

        window.close();
    }

    /**
     * 最小化
     */
    public static min() {
        if (!this.isElectronRenderer) {
            return;
        }

        const { remote } = require('electron')
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
    public static resize(width: number, height: number) {
        if (!this.isElectronRenderer) {
            return;
        }

        const { remote } = require('electron')
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
    public static resizable(able: boolean) {
        if (!this.isElectronRenderer) {
            return;
        }

        const { remote } = require('electron')
        let window = remote.getCurrentWindow();
        if (!window) {
            return;
        }

        window.setResizable(able);
    }

    /**
     * 焦点为在窗口时，  Windows: 窗口闪烁， Mac: dock 上图标弹跳
     */
    public static flash() {
        if (!this.isElectronRenderer) {
            return;
        }

        const { remote, app } = require('electron')
        let window = remote.getCurrentWindow();
        if (!window || window.isFocused()) {
            return;
        }

        if (this.isWindows) {
            window.flashFrame(true);
        } else if (this.isOSX) {
            app.dock.bounce("informational");
        }
    }

    /**
     * 设置Dock上的消息数量，当数量大于99,现显 ...  windows调用无效
     * @param num 消息数量
     */
    public static setBadgeNumber(num: number) {
        if (!this.isElectronRenderer) {
            return;
        }

        const { remote, app } = require('electron')
        let window = remote.getCurrentWindow();
        if (!window || window.isFocused()) {
            return;
        }

        if (this.isWindows) {
            //window.flashFrame(true);
        } else if (this.isOSX) {
            app.dock.setBadge(num > 99 ? "..." : (num || 0).toString());
        }
    }


    private static system(name: string) {
        if (!this.isElectronRenderer) {
            return false;
        }

        return process.platform === name;
    }
}