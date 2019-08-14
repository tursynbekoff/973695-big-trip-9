import {tripInfo} from './components/trip-info.js';
import {tripControls} from './components/trip-controls.js';
import {tripFilters} from './components/trip-filters.js';
import {tripEventSort} from './components/trip-event-sort.js';
import {tripEvents} from './components/trip-events.js';

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const tripMain = document.querySelector(`.trip-main__trip-info`);
const siteTripControlElement = document.querySelector(`.trip-main__trip-controls`);
const tripEvent = document.querySelector(`.trip-events`);

render(tripMain, tripInfo(), `afterbegin`);
render(siteTripControlElement, tripControls(), `afterbegin`);
render(siteTripControlElement, tripFilters(), `beforeend`);
render(tripEvent, tripEventSort(), `afterbegin`);
render(tripEvent, tripEvents(), `beforeend`);
