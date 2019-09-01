import {data} from './data.js';
import {tripEvents} from './trip-events.js';
import {tripEventEdit} from './trip-event-edit.js';
export const tripEventWrapper = (object) => {
  const TripDestination = tripEvents();
  const TripEditDestination = tripEventEdit();

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
  const renderEvent = (eventMock) => {
    const eventDisplay = new TripDestination(eventMock);
    const eventEdit = new TripEditDestination(eventMock);

    const onEscKeyDown = (evt) => {
      if (evt.key === `Escape` || evt.key === `Esc`) {
        eventContainer.replaceChild(eventDisplay.getElement(), eventEdit.getElement());
        document.removeEventListener(`keydown`, onEscKeyDown);
      }
    };
    const eventInDom = document.querySelector(`.event__rollup-btn`);
    console.log(eventInDom);

    eventDisplay.getElement()
    .querySelector(`.event__rollup-btn`)
    .addEventListener(`click`, () => {
      console.log(`kekistan!`);
      eventContainer.replaceChild(eventEdit.getElement(), eventEdit.getElement());
      document.addEventListener(`keydown`, onEscKeyDown);
    });
    return eventDisplay.getTemplate();
  };

  const eventContainer = document.querySelector(`.trip-events__list`);
  console.log(eventContainer);
  const EVENT_COUNT = 3;

  const eventMocks = new Array(EVENT_COUNT)
                    .fill(``)
                    .map(data);

  const sortedEventMocks = eventMocks.sort(function (a, b) {
    const nextValue = (a.intermediateStartTime.replace(`:`, ``));
    const currentValue = (b.intermediateStartTime.replace(`:`, ``));
    return nextValue - currentValue;
  });

  let totalPrice = 0;

  sortedEventMocks.forEach((eachEvent) => {
    totalPrice += eachEvent.intermediatePrice + eachEvent.optionCost[0];
  });

  const tripCost = document.querySelector(`.trip-info__cost-value`);
  tripCost.innerText = totalPrice;

  const concatinatedEvents = sortedEventMocks.map((eventMock) => {
    return renderEvent(eventMock);
  });

  const makeTripDestination = (input) =>`<ul class="trip-days">
      <li class="trip-days__item day">
        <div class="day__info">
          <span class="day__counter">1</span>
          <time class="day__date" datetime="${new Date(input.startDate).getYear() + 1900}-${new Date(input.startDate).getMonth() + 1}-${new Date(input.startDate).getDate()}">${months[new Date(input.startDate).getMonth()]} ${new Date(input.startDate).getDate()}</time>
        </div>
        <ul class="trip-events__list">
          ${concatinatedEvents.join(``)}

        </ul>
      </li>
   </ul>`.trim();
  return makeTripDestination(object);
};
