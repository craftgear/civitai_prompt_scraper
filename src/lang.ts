const i18n: {
  [id: string]: { [locale: string]: string };
} = {
  buttonLabel: {
    en: 'Download images with JSON',
    ja: '画像＆JSONダウンロード',
    'zh-TW': '下載圖像和JSON',
    'zh-CN': '下载图像和JSON',
  },
  buttonProgressLabel: {
    en: 'downloading',
    ja: 'ダウンロード中',
    'zh-TW': '下載中',
    'zh-CN': '下载中',
  },
  buttonCompleteLabel: {
    en: 'done',
    ja: '完了',
    'zh-TW': '完成',
    'zh-CN': '完成',
  },
  openShowMore: {
    en: 'Automatically open "Show More"',
    ja: 'Show Moreを自動で開く',
    'zh-TW': '顯示"Show More"自動打開',
    'zh-CN': '显示"Show More"自动打开',
  },
  continueWithFetchError: {
    en: '',
    ja: '',
    'zh-TW': '',
    'zh-CN': '',
  },
  configPanelTitle: {
    en: '',
    ja: '',
    'zh-TW': '',
    'zh-CN': '',
  },
  configPanelMenu: {
    en: '',
    ja: '',
    'zh-TW': '',
    'zh-CN': '',
  },
  modelPreviewFilenameFormat: {
    en: '',
    ja: '',
    'zh-TW': '',
    'zh-CN': '',
  },
  galleryFilenameFormat: {
    en: '',
    ja: '',
    'zh-TW': '',
    'zh-CN': '',
  },
  availableVariables: {
    en: '',
    ja: '',
    'zh-TW': '',
    'zh-CN': '',
  },
  saveConfig: {
    en: '',
    ja: '',
    'zh-TW': '',
    'zh-CN': '',
  },
  cancelConfig: {
    en: '',
    ja: '',
    'zh-TW': '',
    'zh-CN': '',
  },
};

const getLocale = () => {
  return window.navigator.language;
};

export const getLabel = (labelName: string) => {
  const locale = getLocale();
  return i18n[labelName][locale] ?? i18n[labelName]['en'];
};

export const getButtonLabel = () => getLabel('buttonLabel');

export const getButtonProgressLabel = () => getLabel('buttonProgressLabel');

export const getButtonCompleteLabel = () => getLabel('buttonCompleteLabel');
