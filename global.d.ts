interface Document {
  fullscreenElement: Element;
  exitFullscreen: () => void;
  mozCancelFullScreen: () => void;
  webkitExitFullscreen: () => void;
  msExitFullscreen: () => void;
  requestFullscreen: (options?: FullscreenOptions) => Promise<void>;
  mozRequestFullScreen: (options?: FullscreenOptions) => Promise<void>;
  webkitRequestFullscreen: (options?: FullscreenOptions) => Promise<void>;
  msRequestFullscreen: (options?: FullscreenOptions) => Promise<void>;
}


interface HTMLElement {
  // 进入全屏
  webkitRequestFullScreen(options?: FullscreenOptions): Promise<void>;
  msRequestFullscreen(options?: FullscreenOptions): Promise<void>;
  mozRequestFullScreen(options?: FullscreenOptions): Promise<void>
}

declare var document: Document;
