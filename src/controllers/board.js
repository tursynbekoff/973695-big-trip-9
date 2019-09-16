import {data} from '../components/data.js';
import MakeTripDestination from '../components/trip-info.js';
import TripControls from '../components/trip-controls.js';
import TripFilters from '../components/trip-filters.js';
import TripEventSort from '../components/trip-event-sort.js';
import TripEventWrapper from '../components/trip-event-wrapper.js';
import NewTripEvent from '../components/new-trip-event.js';

import {render} from '../utils.js';
import {unrender} from '../utils.js';
import {Position} from '../utils.js';

import TripDestination from '../components/trip-events.js';
import EditTripDestination from '../components/trip-event-edit.js';

const object = data();
const tripMain = document.querySelector(`.trip-main__trip-info`);
const siteTripControlElement = document.querySelector(`.trip-main__trip-controls`);

export default class TripController {
  constructor(container, events) {
    this._container = container;
    this._events = events;
    this._tripInfoDisplay = new MakeTripDestination(object);
    this._tripControlsDisplay = new TripControls();
    this._tripFiltersDisplay = new TripFilters();
    this._tripEventSortDisplay = new TripEventSort();
    this._tripEventWrapperDisplay = new TripEventWrapper(object);
    this._newEvent = new NewTripEvent();
  }

  init() {
    render(tripMain, this._tripInfoDisplay.getElement(), Position.AFTERBEGIN);
    render(siteTripControlElement, this._tripControlsDisplay.getElement(), Position.AFTERBEGIN);
    render(siteTripControlElement, this._tripFiltersDisplay.getElement(), Position.BEFOREEND);
    render(this._container, this._tripEventSortDisplay.getElement(), Position.AFTERBEGIN);
    render(this._container, this._tripEventWrapperDisplay.getElement(), Position.BEFOREEND);

    const sortedEventMocks = this._events.sort(function (a, b) {
      const nextValue = (a.intermediateStartTime.replace(`:`, ``));
      const currentValue = (b.intermediateStartTime.replace(`:`, ``));
      return currentValue - nextValue;
    });

    let totalPrice = 0;

    sortedEventMocks.forEach((eachEvent) => {
      totalPrice += eachEvent.intermediatePrice + eachEvent.optionCost[0];
    });

    const tripCost = document.querySelector(`.trip-info__cost-value`);
    tripCost.innerText = totalPrice;

    sortedEventMocks.forEach((eventMock) => this._renderEvent(eventMock));

    const onClickNewTripButton = document.querySelector(`.trip-main__event-add-btn`);

    onClickNewTripButton.addEventListener(`click`, () => {
      onClickNewTripButton.disabled = true;
      const eventContainer = document.querySelector(`.trip-events__list`);
      render(eventContainer, this._newEvent.getElement(), Position.BEFOREEND);

      const resetButton = document.querySelector(`.event__reset-btn`);
      resetButton.addEventListener(`click`, this._onReset);
      document.removeEventListener(`click`, this._onReset);
    });

    // .addEventListener(`click`, (evt) => this._onSortLinkClick(evt));
  }

  _renderEvent(eventMock) {
    const eventDisplay = new TripDestination(eventMock);
    const eventEdit = new EditTripDestination(eventMock);

    const eventContainer = document.querySelector(`.trip-events__list`);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        eventContainer.replaceChild(eventDisplay.getElement(), eventEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };

    const onSubmit = (event) => {
      event.preventDefault();
      eventContainer.replaceChild(eventDisplay.getElement(), eventEdit.getElement());
      document.removeEventListener(`submit`, onSubmit);
    };

    eventDisplay.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      eventContainer.replaceChild(eventEdit.getElement(), eventDisplay.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
      document.addEventListener(`submit`, onSubmit);
    });

    eventEdit.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      eventContainer.replaceChild(eventDisplay.getElement(), eventEdit.getElement());
    });

    render(eventContainer, eventDisplay.getElement(), Position.AFTERBEGIN);
  }

  _onReset(evt) {
    const eventHeader = document.querySelector(`.event__header`);
    evt.preventDefault();
    unrender(eventHeader);
    const onClickNewTripButton = document.querySelector(`.trip-main__event-add-btn`);
    onClickNewTripButton.disabled = false;
  }

  _onSortLinkClick(evt) {
    evt.preventDefault();
  }
}
