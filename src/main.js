import {data} from './components/data.js';
import MakeTripDestination from './components/trip-info.js';
import TripControls from './components/trip-controls.js';

import TripFilters from './components/trip-filters.js';
import TripEventSort from './components/trip-event-sort.js';
import TripEventWrapper from './components/trip-event-wrapper.js';
import {tripEvents} from './components/trip-events.js';
import {tripEventEdit} from './components/trip-event-edit.js';
import {render} from './utils.js';
import {Position} from './utils.js';
const object = data();

const TripDestination = tripEvents();
const TripEditDestination = tripEventEdit();

const tripMain = document.querySelector(`.trip-main__trip-info`);
const siteTripControlElement = document.querySelector(`.trip-main__trip-controls`);
const tripEvent = document.querySelector(`.trip-events`);

const tripInfoDisplay = new MakeTripDestination(object);

const tripControlsDisplay = new TripControls();

const tripFiltersDisplay = new TripFilters();

const tripEventSortDisplay = new TripEventSort();

const tripEventWrapperDisplay = new TripEventWrapper(object);

render(tripMain, tripInfoDisplay.getElement(), Position.AFTERBEGIN);
render(siteTripControlElement, tripControlsDisplay.getElement(), Position.AFTERBEGIN);
render(siteTripControlElement, tripFiltersDisplay.getElement(), Position.BEFOREEND);
render(tripEvent, tripEventSortDisplay.getElement(), Position.AFTERBEGIN);
render(tripEvent, tripEventWrapperDisplay.getElement(), Position.BEFOREEND);


const eventContainer = document.querySelector(`.trip-events__list`);


const renderEvent = (eventMock) => {
  const eventDisplay = new TripDestination(eventMock);
  const eventEdit = new TripEditDestination(eventMock);

  const onEscKeyDown = (evt) => {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      eventContainer.replaceChild(eventDisplay.getElement(), eventEdit.getElement());
      document.removeEventListener(`keydown`, onEscKeyDown);
    }
  };

  eventDisplay.getElement()
  .querySelector(`.event__rollup-btn`)
  .addEventListener(`click`, () => {

    eventContainer.replaceChild(eventEdit.getElement(), eventDisplay.getElement());
    document.addEventListener(`keydown`, onEscKeyDown);
  });
  render(eventContainer, eventDisplay.getElement(), Position.AFTERBEGIN);
};

const EVENT_COUNT = 5;

const eventMocks = new Array(EVENT_COUNT)
                  .fill(``)
                  .map(data);

const sortedEventMocks = eventMocks.sort(function (a, b) {
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

sortedEventMocks.forEach((eventMock) => renderEvent(eventMock));
