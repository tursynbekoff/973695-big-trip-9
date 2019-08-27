import {tripEvents} from './trip-events.js';
export const tripEventWrapper = (object) => {

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

  const makeTripDestination = (data) =>`<ul class="trip-days">
      <li class="trip-days__item  day">
        <div class="day__info">
          <span class="day__counter">1</span>
          <time class="day__date" datetime="${new Date(data.startDate).getYear() + 1900}-${new Date(data.startDate).getMonth() + 1}-${new Date(data.startDate).getDate()}">${months[new Date(data.startDate).getMonth()]} ${new Date(data.startDate).getDate()}</time>
        </div>
        <ul class="trip-events__list">
          ${tripEvents(data)}
        </ul>
      </li>
   </ul>`.trim();
  return makeTripDestination(object);
};
