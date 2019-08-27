import {tripInfo} from './components/trip-info.js';
import {tripControls} from './components/trip-controls.js';
import {tripFilters} from './components/trip-filters.js';
import {tripEventSort} from './components/trip-event-sort.js';
import {tripEventWrapper} from './components/trip-event-wrapper.js';

const getTripDestination = {
  transportTypes: [[`Flight`, `Train`, `Bus`],
    [`Bus`, `Ship`, `Transport`],
    [`Taxi`, `Train`, `Drive`]
  ][Math.floor(Math.random() * 3)],
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`,
  originalDestination: [`Amsterdam`,
    `Dusseldorf`,
    `Rotterdam`
  ][Math.floor(Math.random() * 3)],
  finallDestination: [`Munich`,
    `Berlin`,
    `Nur-Sultan`
  ][Math.floor(Math.random() * 3)],
  startDate: Date.now() + 1 + Math.floor(Math.random() * ((9 - 7) + 7)) * 24 * 60 * 60 * 1000,
  endDate: Date.now() + 2 + Math.floor(Math.random() * ((14 - 10) + 10)) * 24 * 60 * 60 * 1000,
  additionalOptions: [`Add meal`, `Chose seats`],
  optionCost: [2, 9],

  intermediateCities: {
    Amsterdam: [`Einhoven`, `Antwerp`, `Duisburg`],
    Dusseldorf: [`Cologne`, `Koblenz`, `Frankfurt am Main`],
    Rotterdam: [`Breda`, `Bruges`, `Bonn`]
  },

  intermediatePrice: {
    Amsterdam: [20, 16, 35],
    Dusseldorf: [10, 25, 75],
    Rotterdam: [5, 55, 25]
  },

  intermediateStartTime: {
    Amsterdam: [`10:00`, `16:20`, `19:15`],
    Dusseldorf: [`8:25`, `11:35`, `14:30`],
    Rotterdam: [`6:40`, `8:55`, `13:25`]
  },

  intermediateEndTime: {
    Amsterdam: [`11:10`, `18:10`, `21:45`],
    Dusseldorf: [`8:55`, `13:05`, `17:50`],
    Rotterdam: [`7:05`, `10:30`, `18:15`]
  },

  transportationDuration: {
    Amsterdam: [`1H 10M`, `1H 50M`, `2H 30M`],
    Dusseldorf: [`30M`, `1H 30M`, `3H 20M`],
    Rotterdam: [`25M`, `1H 35M`, `4H 50M`]
  },

};


const render = (container, template, place, count) => {
  if (count !== undefined) {
    container.insertAdjacentHTML(place, new Array(count)
    .fill(``)
    .map(getTripDestination)
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

render(tripMain, tripInfo(getTripDestination), `afterbegin`);
render(siteTripControlElement, tripControls(), `afterbegin`);
render(siteTripControlElement, tripFilters(), `beforeend`);
render(tripEvent, tripEventSort(), `afterbegin`);
render(tripEvent, tripEventWrapper(getTripDestination), `beforeend`);
