export const tripEvents = (object) => {

  const makeTripDestination = (data) => `<li class="trip-events__item">
      <div class="event">
        <div class="event__type">
          <img class="event__type-icon" width="42" height="42" src="img/icons/${data.transportTypes[0].toLowerCase()}.png" alt="Event type icon">
        </div>
        <h3 class="event__title">${data.transportTypes[0]} to ${data.intermediateCities[data.originalDestination][0]}</h3>

        <div class="event__schedule">
          <p class="event__time">
            <time class="event__start-time" datetime="${new Date(data.startDate).getYear() + 1900}-${new Date(data.startDate).getMonth() + 1}-${new Date(data.startDate).getDate()}T${data.intermediateStartTime[data.originalDestination][0]}">${data.intermediateStartTime[data.originalDestination][0]}</time>
            &mdash;
            <time class="event__end-time" datetime="{new Date(data.startDate).getYear() + 1900}-${new Date(data.startDate).getMonth() + 1}-${new Date(data.startDate).getDate()}T${data.intermediateEndTime[data.originalDestination][0]}">${data.intermediateEndTime[data.originalDestination][0]}</time>
          </p>
          <p class="event__duration">${data.transportationDuration[data.originalDestination][0]}</p>
        </div>

        <p class="event__price">
          &euro;&nbsp;<span class="event__price-value">${data.intermediatePrice[data.originalDestination][0] + data.optionCost[0]}</span>
        </p>

        <h4 class="visually-hidden">Offers:</h4>
        <ul class="event__selected-offers">
          <li class="event__offer">
            <span class="event__offer-title">${data.additionalOptions[0]}</span>
            &plus;
            &euro;&nbsp;<span class="event__offer-price">${data.optionCost[0]}</span>
            </li>
        </ul>

        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </div>
    </li>`.trim();
  return makeTripDestination(object);
};
