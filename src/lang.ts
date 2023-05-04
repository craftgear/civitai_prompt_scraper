const getLocale = () => {
  return window.navigator.language;
};

export const getButtonLabel = () => {
  const locale = getLocale();
  switch (locale) {
    case 'ja':
      return '画像＆JSONダウンロード';
    case 'zh-TW':
      return '下載圖像和JSON';
    case 'zh-CN':
      return '下载图像和JSON';
    default:
      return 'Download images with JSON';
  }
};

export const getButtonProgressLabel = () => {
  const locale = getLocale();
  switch (locale) {
    case 'ja':
      return 'ダウンロード中';
    case 'zh-TW':
      return '下載中';
    case 'zh-CN':
      return '下载中';
    default:
      return 'downloading';
  }
};

export const getButtonCompleteLabel = () => {
  const locale = getLocale();
  switch (locale) {
    case 'ja':
      return '完了';
    case 'zh-TW':
    case 'zh-CN':
      return '完成';
    default:
      return 'done';
  }
};
