import {
  AlertError,
  CreateDiv,
  CreateLink,
  GetTitle,
  Selector,
  SelectorAll,
  SetTitle,
} from '../domain/types';

export const selector: Selector = (selector) =>
  document.querySelector(selector);
export const selectorAll: SelectorAll = (selector) =>
  document.querySelectorAll(selector);

export const createDiv: CreateDiv = () => document.createElement('div');
export const createLink: CreateLink = (id, style, label, clickHandler) => {
  const link = document.createElement('a');
  link.id = id;
  link.setAttribute('style', style);
  link.innerText = label;
  if (clickHandler) {
    link.addEventListener('click', (e: MouseEvent) => {
      e.preventDefault();
      clickHandler(e);
    });
  }
  return link;
};

export const setTitle: SetTitle = (x) => {
  document.title = x;
};
export const getTitle: GetTitle = () => document.title;

export const alertError: AlertError = (message: string) => {
  alert(`⚠️  ${message}`);
};
