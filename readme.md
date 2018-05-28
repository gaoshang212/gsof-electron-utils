# 文档

## utils 方法

``` javascript
    /**
     * 是否Electron Renderer
     */
    static readonly isElectronRenderer: boolean;
    /**
     *
     * 是否是Windows
     */
    static readonly isWindows: boolean;
    /**
     * 是否是OSX(Mac)
     */
    static readonly isOSX: boolean;
    /**
     * 是否是Linux
     */
    static readonly isLinux: boolean;
    /**
     * 最大化/恢复 (mac为 全屏/恢复)
     */
    static max(): void;
    /**
     * 关闭
     */
    static close(): void;
    /**
     * 最小化
     */
    static min(): void;
    /**
     * 重新设置宽高
     * @param width 宽度
     * @param height 高度
     */
    static resize(width: number, height: number): void;
    /**
     * 窗口是否可拖动改变大小
     * @param able true: 窗口可以拖动改变大小, false：窗口不可以拖动改变大小
     */
    static resizable(able: boolean): void;
    /**
     * 焦点为在窗口时，  Windows: 窗口闪烁， Mac: dock 上图标弹跳
     */
    static flash(): void;
    /**
     * 设置Dock上的消息数量，当数量大于99,现显 ...  windows调用无效
     * @param num 消息数量
     */
    static setBadgeNumber(num: number): void;

```

## Demo
``` javascript

let { utils } = require('gsof-electron-utils');

if(utils.isWindows) {
    //todo
}

if(utils.isOSX) {
    //todo
}

//最大化或全屏
utils.mac();

...
// 窗口设置大小
utils.resize(1024, 768);

//窗口大小不可改变
utils.resizable(false);


```