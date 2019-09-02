import {data} from './components/data.js';
import {tripInfo} from './components/trip-info.js';
import {tripControls} from './components/trip-controls.js';
import {tripFilters} from './components/trip-filters.js';
import {tripEventSort} from './components/trip-event-sort.js';
import {tripEventWrapper} from './components/trip-event-wrapper.js';
import {tripEvents} from './components/trip-events.js';
import {tripEventEdit} from './components/trip-event-edit.js';
const object = data();

const Position = {
  AFTERBEGIN: `afterbegin`,
  BEFOREEND: `beforeend`
};

const renderComponents = (container, element, place) => {
  switch (place) {
    case Position.AFTERBEGIN:
      container.prepend(element);
      break;
    case Position.BEFOREEND:
      container.append(element);
      break;
  }
};

const render = (container, element, place) => {
  container.insertAdjacentHTML(place, element);
};

// const createElement = (template) => {
//   const newElement = document.createElement(`div`);
//   newElement.innerHTML = template;
//   return newElement.firstChild;
// };

const TripDestination = tripEvents();
const TripEditDestination = tripEventEdit();

const tripMain = document.querySelector(`.trip-main__trip-info`);
const siteTripControlElement = document.querySelector(`.trip-main__trip-controls`);
const tripEvent = document.querySelector(`.trip-events`);

render(tripMain, tripInfo(object), `afterbegin`);
render(siteTripControlElement, tripControls(), `afterbegin`);
render(siteTripControlElement, tripFilters(), `beforeend`);
render(tripEvent, tripEventSort(), `afterbegin`);
render(tripEvent, tripEventWrapper(object), `beforeend`);

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
  renderComponents(eventContainer, eventDisplay.getElement(), Position.AFTERBEGIN);
};

const EVENT_COUNT = 3;

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

// const concatinatedEvents = sortedEventMocks.map((eventMock) => {
//   renderEvent(eventMock);
// });
sortedEventMocks.forEach((eventMock) => renderEvent(eventMock));
