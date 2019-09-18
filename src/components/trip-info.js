import AbstractComponent from './abstract-component.js';
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

export default class MakeTripDestination extends AbstractComponent {
  constructor({originalDestination, finallDestination, startDate, endDate}) {
    super();
    this._originalDestination = originalDestination;
    this._finallDestination = finallDestination;
    this._startDate = startDate;
    this._endDate = endDate;
    this._element = null;
  }

  getTemplate() {
    return `<div class="trip-info__main">
        <h1 class="trip-info__title">${this._originalDestination} &mdash; ... &mdash; ${this._finallDestination}</h1>
        <p class="trip-info__dates">${months[new Date(this._startDate).getMonth()]} ${new Date(this._startDate).getDate()}&nbsp;&mdash;&nbsp;
          ${months[new Date(this._endDate).getMonth()]} ${new Date(this._endDate).getDate()}</p>
      </div>`.trim();
  }
}
