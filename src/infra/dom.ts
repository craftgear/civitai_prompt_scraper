import {
  CreateButton,
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
export const createButton: CreateButton = () =>
  document.createElement('button');
export const createLink: CreateLink = () => document.createElement('a');

export const setTitle: SetTitle = (x) => {
  document.title = x;
};
export const getTitle: GetTitle = () => document.title;
