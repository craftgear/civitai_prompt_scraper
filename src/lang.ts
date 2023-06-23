const i18n: {
  [id: string]: { [locale: string]: string };
} = {
  buttonLabel: {
    en: 'Download images with JSON',
    ja: '画像＆JSONダウンロード',
    'zh-CN': '下载图像和JSON',
    'zh-TW': '下載圖像和JSON',
  },
  buttonProgressLabel: {
    en: 'downloading',
    ja: 'ダウンロード中',
    'zh-CN': '下载中',
    'zh-TW': '下載中',
  },
  buttonCompleteLabel: {
    en: 'done',
    ja: '完了',
    'zh-CN': '完成',
    'zh-TW': '完成',
  },
  openShowMore: {
    en: 'Automatically open "Show More"',
    ja: 'Show Moreを自動で開く',
    'zh-CN': '显示"Show More"自动打开',
    'zh-TW': '顯示"Show More"自動打開',
  },
  continueWithFetchError: {
    en: 'Ignore image fetching errors and save a zip',
    ja: '画像取得エラーを無視してzipを保存する',
    'zh-CN': '忽略圖像採集錯誤，保存壓縮文件',
    'zh-TW': '忽略图像采集错误，保存压缩文件',
  },
  modelPreviewFilenameFormat: {
    en: 'Zip file name format: model',
    ja: 'zipファイル名書式: モデル',
    'zh-CN': 'Zip文件名格式：模型',
    'zh-TW': 'Zip文件名格式：模型',
  },
  galleryFilenameFormat: {
    en: 'Zip file name format: gallery',
    ja: 'zipファイル名書式: ギャラリー',
    'zh-CN': 'Zip文件名格式：画廊',
    'zh-TW': 'Zip文件名格式：畫廊',
  },
  configPanelTitle: {
    en: 'civitai_prompt_scraper settings',
    ja: 'civitai_prompt_scraper 設定',
    'zh-CN': 'civitai_prompt_scraper 設置',
    'zh-TW': 'civitai_prompt_scraper 设置',
  },
  configPanelMenu: {
    en: 'Edit Settings',
    ja: '設定を編集',
    'zh-CN': '编辑设置',
    'zh-TW': '編輯設置',
  },
  availableVariables: {
    en: 'Available identifiers:',
    ja: '利用可能な識別子:',
    'zh-CN': '可用的标识符:',
    'zh-TW': '可用的標識符:',
  },
  saveConfig: {
    en: 'Save',
    ja: '保存',
    'zh-CN': '保存',
    'zh-TW': '保存',
  },
  cancelConfig: {
    en: 'Cancel',
    ja: 'キャンセル',
    'zh-CN': '取消',
    'zh-TW': '取消',
  },
  parsingNextDataError: {
    en: 'Parsing __NEXT_DATA__ failed. Reloading the page might solve it.',
    ja: '__NEXT_DATA__の読み込みに失敗しました。ページをリロードすると解消する場合があります。',
    'zh-CN': '解析__NEXT_DATA__失败。重新加载页面可能会解决这个问题。',
    'zh-TW': '解析__NEXT_DATA__失败。重新加载页面可能会解决这个问题。',
  },
  modelIdNotFoundError: {
    en: 'modelId is not found.',
    ja: 'modelIdが見つかりません',
    'zh-CN': '没有找到modelId',
    'zh-TW': '沒有找到modelId',
  },
  modelVersionIdNotFoundError: {
    en: 'modelVersionId is not found.',
    ja: 'modelVersionIdが見つかりません',
    'zh-CN': '没有找到modelVersionId',
    'zh-TW': '沒有找到modelVersionId',
  },
  configValueNotFoundError: {
    en: 'config value is not found.',
    ja: '設定値が見つかりません',
    'zh-CN': '未找到设定值',
    'zh-TW': '未找到設定值',
  },
  galleryAutoDownload: {
    en: 'automatically start downloading gallery images',
    ja: 'ギャラリーを自動でダウンロードする',
    'zh-CN': '自动下载画廊',
    'zh-TW': '自動下載畫廊',
  },
};

const getLocale = () => {
  return window.navigator.language;
};

export const getI18nLabel = (labelName: string) => {
  const locale = getLocale();
  return i18n[labelName][locale] ?? i18n[labelName]['en'];
};

export const getButtonLabel = () => getI18nLabel('buttonLabel');

export const getButtonProgressLabel = () => getI18nLabel('buttonProgressLabel');

export const getButtonCompleteLabel = () => getI18nLabel('buttonCompleteLabel');
