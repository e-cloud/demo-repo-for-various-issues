/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

// from https://medium.com/@mindginative/typescript-its-magic-number-ts2403-ef76202185c9
interface WebpackRequire {
  <T>(path: string): T;

  (paths: string[], callback: (...modules: any[]) => void): void;

  ensure(paths: string[], callback: (require: <T>(path: string) => T) => void): void;
}

interface NodeRequire extends WebpackRequire {} // tslint:disable-line

declare interface Window {
  destroyPreLoader: Function
  _hmt: ArrayLike<any>
}

declare var require: NodeRequire
