import {data} from './components/data.js';
import {tripInfo} from './components/trip-info.js';
import {tripControls} from './components/trip-controls.js';
import {tripFilters} from './components/trip-filters.js';
import {tripEventSort} from './components/trip-event-sort.js';
import {tripEventWrapper} from './components/trip-event-wrapper.js';

const object = data();

const render = (container, template, place, count) => {
  if (count !== undefined) {
    container.insertAdjacentHTML(place, new Array(count)
    .fill(``)
    .map(data)
    .map(template)
    .join(``));
  } else {
    container.insertAdjacentHTML(place, template);
  }
};

const TRAVEL_CARDS = 3;

const tripMain = document.querySelector(`.trip-main__trip-info`);
const siteTripControlElement = document.querySelector(`.trip-main__trip-controls`);
const tripEvent = document.querySelector(`.trip-events`);

render(tripMain, tripInfo(object), `afterbegin`);
render(siteTripControlElement, tripControls(), `afterbegin`);
render(siteTripControlElement, tripFilters(), `beforeend`);
render(tripEvent, tripEventSort(), `afterbegin`);
render(tripEvent, tripEventWrapper(object), `beforeend`);
