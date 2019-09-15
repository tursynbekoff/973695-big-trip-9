import {createElement} from '../utils.js';
const months = [`January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`];

export default class MakeTripDestination {
  constructor({originalDestination, finallDestination, startDate, endDate}) {
    this._originalDestination = originalDestination;
    this._finallDestination = finallDestination;
    this._startDate = startDate;
    this._endDate = endDate;
    this._element = null;
  }
  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
    return this._element;
  }

  getTemplate() {
    return `<div class="trip-info__main">
        <h1 class="trip-info__title">${this._originalDestination} &mdash; ... &mdash; ${this._finallDestination}</h1>
        <p class="trip-info__dates">${months[new Date(this._startDate).getMonth()]} ${new Date(this._startDate).getDate()}&nbsp;&mdash;&nbsp;
          ${months[new Date(this._endDate).getMonth()]} ${new Date(this._endDate).getDate()}</p>
      </div>`.trim();
  }
}
