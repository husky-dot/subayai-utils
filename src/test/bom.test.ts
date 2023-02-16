import { describe, expect, it, vi, beforeAll, afterAll } from 'vitest';
import { toggleFullScreen, getQueryParam } from '../index';

describe('getQueryParam', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'location', {
      value: {
        search: '?foo=bar&baz=qux',
      },
    });
  });

  it('returns the value of an existing parameter', () => {
    expect(getQueryParam('foo')).toBe('bar');
    expect(getQueryParam('baz')).toBe('qux');
  });

  it('returns null for a non-existing parameter', () => {
    expect(getQueryParam('xyz')).toBeNull();
  });

  afterAll(() => {
    delete (window as any).location;
  });
});
describe('requestFullscreen', () => {
  // beforeEach(() => {
  //   // 清除全屏状态
  //   document.exitFullscreen();
  // });

  // afterEach(() => {
  //   // 清除全屏状态
  //   document.exitFullscreen();
  // });
  it('test not support requestFullscreen', () => {
    expect(toggleFullScreen()).toBe(null);
  });
  it('should toggle fullscreen', () => {
    document.documentElement.requestFullscreen = vi.fn();
    const spy = vi.spyOn(document.documentElement, 'requestFullscreen').mockImplementation(() => Promise.resolve());
    toggleFullScreen();
    expect(spy).toHaveBeenCalled();
  });
  it('test webkitRequestFullscreen function', () => {
    document.documentElement.requestFullscreen = null as any;
    document.documentElement.webkitRequestFullScreen = vi.fn();

    const spy = vi
      .spyOn(document.documentElement, 'webkitRequestFullScreen')
      .mockImplementation(() => Promise.resolve());
    toggleFullScreen();
    expect(spy).toHaveBeenCalled();
  });
  it('test mozRequestFullScreen function', () => {
    document.documentElement.requestFullscreen = null as any;
    document.documentElement.webkitRequestFullScreen = null as any;
    document.documentElement.mozRequestFullScreen = vi.fn();
    const spy = vi.spyOn(document.documentElement, 'mozRequestFullScreen').mockImplementation(() => Promise.resolve());
    toggleFullScreen();
    expect(spy).toHaveBeenCalled();
  });
  it('test msRequestFullscreen function', () => {
    document.documentElement.requestFullscreen = null as any;
    document.documentElement.webkitRequestFullScreen = null as any;
    document.documentElement.mozRequestFullScreen = null as any;
    document.documentElement.msRequestFullscreen = vi.fn();
    const spy = vi.spyOn(document.documentElement, 'msRequestFullscreen').mockImplementation(() => Promise.resolve());
    toggleFullScreen();
    expect(spy).toHaveBeenCalled();
  });
});

describe('exitFullscreen', () => {
  it('test not exitFullscreen function', () => {
    document.fullscreenElement = document.createElement('div');
    document.exitFullscreen = null as any;
    expect(toggleFullScreen()).toBe(null);
  });
  it('test exitFullscreen function', () => {
    document.exitFullscreen = vi.fn();
    const spy = vi.spyOn(document, 'exitFullscreen').mockImplementation(() => Promise.resolve());
    toggleFullScreen();
    expect(spy).toHaveBeenCalled();
  });
  it('test webkitExitFullscreen function', () => {
    document.exitFullscreen = null as any;
    document.webkitExitFullscreen = vi.fn();
    const spy = vi.spyOn(document, 'webkitExitFullscreen').mockImplementation(() => Promise.resolve());
    toggleFullScreen();
    expect(spy).toHaveBeenCalled();
  });
  it('test mozCancelFullScreen function', () => {
    document.exitFullscreen = null as any;
    document.webkitExitFullscreen = null as any;
    document.mozCancelFullScreen = vi.fn();
    const spy = vi.spyOn(document, 'mozCancelFullScreen').mockImplementation(() => Promise.resolve());
    toggleFullScreen();
    expect(spy).toHaveBeenCalled();
  });
  it('test msExitFullscreen function', () => {
    document.exitFullscreen = null as any;
    document.webkitExitFullscreen = null as any;
    document.mozCancelFullScreen = null as any;
    document.msExitFullscreen = vi.fn();
    const spy = vi.spyOn(document, 'msExitFullscreen').mockImplementation(() => Promise.resolve());
    toggleFullScreen();
    expect(spy).toHaveBeenCalled();
  });
});
