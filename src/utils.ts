import { remote, app } from "electron";
export class utils {

    public static get isElectronRenderer(): boolean {
        let w = window as any;
        return w && w.process && w.process.type === 'renderer';
    }

    private static system(name: string) {
        if (!this.isElectronRenderer) {
            return false;
        }

        return process.platform === name;
    }

    public static get isWindows() {
        return this.system('win32');
    }

    public static get isOSX() {
        return this.system('darwin');
    }

    public static get isLinux() {
        return this.system('linux');
    }

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
}