/**
 * 获取url指定指定参数信息
 */
export function getQueryParam(param: string): string | null {
  const query = window.location.search.substring(1);
  const queryParams = query.split('&');

  for (let i = 0; i < queryParams.length; i++) {
    const [name, value] = queryParams[i].split('=');
    if (name === param) {
      return decodeURIComponent(value);
    }
  }

  return null;
}
/**
 * 浏览器全屏与退出全屏切换
 */
export function toggleFullScreen() {
  let element = document.documentElement;
  if (document.fullscreenElement) {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else {
      return null;
    }
  } else {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    } else {
      return null;
    }
  }
}
