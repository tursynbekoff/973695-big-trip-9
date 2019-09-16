import AbstractComponent from './abstract-component.js';

const months = [`Jan`,
  `Feb`,
  `Mar`,
  `Apr`,
  `May`,
  `Jun`,
  `Jul`,
  `Aug`,
  `Sep`,
  `Oct`,
  `Nov`,
  `Dec`];

export default class TripEventWrapper extends AbstractComponent {
  constructor({startDate}) {
    super();
    this._startDate = startDate;
  }

  getTemplate() {
    return `<ul class="trip-days">
            <li class="trip-days__item day">
              <div class="day__info">
                <span class="day__counter">1</span>
                <time class="day__date" datetime="${new Date(this._startDate).getYear() + 1900}-${new Date(this._startDate).getMonth() + 1}-${new Date(this._startDate).getDate()}">${months[new Date(this._startDate).getMonth()]} ${new Date(this._startDate).getDate()}</time>
              </div>
              <ul class="trip-events__list">

              </ul>
            </li>
         </ul>`.trim();
  }
}
