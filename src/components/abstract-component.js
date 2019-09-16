import {createElement} from '../utils.js';
export default class AbstractComponent {
  constructor() {
    this._element = null;
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }
    return this._element;
  }

  getTemplate() {
    throw Error(`Abstarct method not implemented`);
  }

  removeElement() {
    this._element = null;
    return this._element;
  }
}
