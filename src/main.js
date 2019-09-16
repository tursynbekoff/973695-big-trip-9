import {data} from './components/data.js';
import TripController from './controllers/board.js';


const EVENT_COUNT = 3;

const eventMocks = new Array(EVENT_COUNT)
                  .fill(``)
                  .map(data);

const tripEvent = document.querySelector(`.trip-events`);

const tripController = new TripController(tripEvent, eventMocks);

tripController.init();
