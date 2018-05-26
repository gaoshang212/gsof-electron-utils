export declare class utils {
    static readonly isElectronRenderer: boolean;
    private static system(name);
    static readonly isWindows: boolean;
    static readonly isOSX: boolean;
    static readonly isLinux: boolean;
    static max(): void;
    static close(): void;
    static min(): void;
    static resize(width: number, height: number): void;
    static resizable(able: boolean): void;
    static flash(): void;
    static setBadgeNumber(num: number): void;
}
