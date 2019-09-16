import {createElement} from '../utils.js';

export default class TripDestination {
  constructor({originalDestination, transportTypes, intermediateCities, startDate, endDate, intermediateStartTime, intermediateEndTime, transportationDuration, intermediatePrice, optionCost, additionalOptions}) {
    this._originalDestination = originalDestination;
    this._transportType = transportTypes;
    this._intermediateCity = intermediateCities;
    this._startDate = startDate;
    this._endDate = endDate;
    this._intermediateStartTime = intermediateStartTime;
    this._intermediateEndTime = intermediateEndTime;
    this._transportationDuration = transportationDuration;
    this._intermadiatePrice = intermediatePrice;
    this._optionCost = optionCost;
    this._optionName = additionalOptions;
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
    const price = this._optionCost[0] + this._intermadiatePrice;

    return `<li class="trip-events__item">
          <div class="event">
            <div class="event__type">
              <img class="event__type-icon" width="42" height="42" src="img/icons/${this._transportType.toLowerCase()}.png" alt="Event type icon">
            </div>
            <h3 class="event__title">${this._transportType} to ${this._intermediateCity}</h3>

            <div class="event__schedule">
              <p class="event__time">
                <time class="event__start-time" datetime="${new Date(this._startDate).getYear() + 1900}-${new Date(this._startDate).getMonth() + 1}-${new Date(this._startDate).getDate()}T${this._intermediateStartTime}">${this._intermediateStartTime}</time>
                &mdash;
                <time class="event__end-time" datetime="${new Date(this._startDate).getYear() + 1900}-${new Date(this._startDate).getMonth() + 1}-${new Date(this._startDate).getDate()}T${this._intermediateEndTime}">${this._intermediateEndTime}</time>
              </p>
              <p class="event__duration">${this._transportationDuration}</p>
            </div>

            <p class="event__price">
              &euro;&nbsp;<span class="event__price-value">${price}</span>
            </p>

            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
              <li class="event__offer">
                <span class="event__offer-title">${this._optionName[0]}</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">${this._optionCost[0]}</span>
                </li>
            </ul>

            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
            </button>
          </div>
        </li>`;
  }
}
