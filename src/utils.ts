export class utils {

    public static get isElectronRenderer(): boolean {
        let w = window as any;
        return w && w.process && w.process.type;
    }

    public static get is
}