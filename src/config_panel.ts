declare var GM_registerMenuCommand: any;
import { saveConfig, loadConfig } from './infra';
import { getLabel } from './lang';
import { configPanelStyle } from './styles';
import { InputField, Config, ConfigKey } from './types';

const fields = [
  {
    type: 'checkbox',
    name: 'openShowMore',
    label: getLabel('openShowMore'),
    value: true,
    desc: getLabel('openShowMore'),
    style: `margin-right: 0.5rem;`,
  },
  {
    type: 'checkbox',
    name: 'continueWithFetchError',
    label: getLabel('continueWithFetchError'),
    value: false,
    desc: '',
    style: 'margin-right: 0.5rem;',
  },
  {
    type: 'text',
    name: 'modelPreviewFilenameFormat',
    label: getLabel('modelPreviewFilenameFormat'),
    value: '{modelName}[{modelId}]_{modelVersionId}.zip',
    desc: `${getLabel(
      'availableVariables'
    )} {modelId}, {modelName}, {modelVersionName}, {modelVersionId}`,

    style: '',
  },
  {
    type: 'text',
    name: 'galleryFilenameFormat',
    label: getLabel('galleryFilenameFormat'),
    value: 'modelId_{modelId}-postId_{postId}.zip',
    desc: `${getLabel('availableVariables')}  {modelId}, {postId}`,
    style: '',
  },
];

const addInputs = (parent: HTMLElement, fields: InputField[]) => {
  fields.forEach(({ type, name, label, value, desc, style }) => {
    const div = document.createElement('div');
    const inputEl = document.createElement('input');
    inputEl.type = type;
    inputEl.id = name;
    inputEl.setAttribute('style', style);

    const labelEl = document.createElement('label');
    labelEl.innerText = label;
    labelEl.setAttribute('for', name);

    const descEl = document.createElement('div');
    descEl.innerHTML = desc;
    descEl.setAttribute(
      'style',
      'font-size: small; color: gray; margin-left: 1rem;'
    );

    switch (type) {
      case 'checkbox': {
        div.setAttribute(
          'style',
          'display: flex; justify-content: flex-start;'
        );
        if (value) {
          inputEl.checked = true;
        }

        div.appendChild(inputEl);
        div.appendChild(labelEl);
        div.appendChild(descEl);
        break;
      }
      case 'text': {
        div.setAttribute(
          'style',
          'display: flex; flex-direction: column; justify-content: flex-start;'
        );
        inputEl.value = value as string;
        div.appendChild(labelEl);
        div.appendChild(descEl);
        div.appendChild(inputEl);
        break;
      }
      default: {
      }
    }
    parent.appendChild(div);
  });
};

const getValuesOfInputs = (fields: InputField[]) => {
  return fields.reduce(function(acc, cur) {
    const el = document.querySelector('#' + cur.name);
    if (cur.type === 'checkbox') {
      return { ...acc, [cur.name]: (el as HTMLInputElement).checked };
    }
    return { ...acc, [cur.name]: (el as HTMLInputElement).value };
  }, {});
};

const addButtons = (parent: HTMLDivElement) => {
  var saveButton = document.createElement('button');
  saveButton.textContent = '保存';
  saveButton.setAttribute(
    'style',
    'color: white; background: #228be6; padding: 0.5rem 2rem;'
  );
  saveButton.addEventListener('click', function() {
    const values = getValuesOfInputs(fields) as Config;
    saveConfig(values);
    parent.style.display = 'none';
  });

  var cancelButton = document.createElement('button');
  cancelButton.textContent = 'キャンセル';
  cancelButton.setAttribute('style', 'padding: 0.5rem 0.5rem;');
  cancelButton.addEventListener('click', function() {
    parent.style.display = 'none';
  });

  const buttonGroup = document.createElement('div');
  buttonGroup.setAttribute(
    'style',
    'display: flex; flex-direction: row; justify-content: space-between; margin-top: 1.5rem; font-size: small; '
  );

  buttonGroup.appendChild(saveButton);
  buttonGroup.appendChild(cancelButton);

  parent.appendChild(buttonGroup);
};

const buildSettingsPanel = (localConfigValues: Config) => {
  // 設定パネルを作成
  var panel = document.createElement('div');
  panel.setAttribute('style', configPanelStyle);

  const title = document.createElement('h6');
  title.textContent = getLabel('configPanelTitle');
  title.setAttribute(
    'style',
    'margin-top: 0; margin-bottom: 0.5rem; border-bottom: 1px solid silver;'
  );
  panel.appendChild(title);

  addInputs(
    panel,
    fields.map(function(x) {
      return {
        ...x,
        value:
          localConfigValues[x.name as ConfigKey] !== undefined
            ? localConfigValues[x.name as ConfigKey]
            : x.value,
      };
    })
  );

  addButtons(panel);

  return panel;
};

export function initConfigPanel() {
  const localConfigValues = loadConfig();

  const panel = buildSettingsPanel(localConfigValues);
  document?.querySelector('body')?.appendChild(panel);

  // メニューコマンドを登録
  GM_registerMenuCommand(getLabel('configPanelMenu'), function() {
    panel.style.display = 'flex';
  });
}

export const getConfig = (fieldName: string): string | boolean => {
  const localConfigValues = loadConfig();
  const inputField = fields.find((x) => x.name === fieldName);
  if (localConfigValues.hasOwnProperty(fieldName)) {
    if (!inputField) {
      throw new Error(`${fieldName} is not found in input fields.`);
    }
    return localConfigValues[fieldName as ConfigKey];
  }
  if (inputField?.hasOwnProperty(fieldName)) {
    return inputField?.value;
  }

  throw new Error(`${fieldName} is not found in config`);
};
