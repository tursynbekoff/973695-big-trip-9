export const tripEvents = (object) => {

  const makeTripDestination = (data) => {
    let sum = ``;
    for (let i = 0; i < 3; i++) {
      let template = `<li class="trip-events__item">
          <div class="event">
            <div class="event__type">
              <img class="event__type-icon" width="42" height="42" src="img/icons/${data.transportTypes[i].toLowerCase()}.png" alt="Event type icon">
            </div>
            <h3 class="event__title">${data.transportTypes[i]} to ${data.intermediateCities[data.originalDestination][i]}</h3>

            <div class="event__schedule">
              <p class="event__time">
                <time class="event__start-time" datetime="${new Date(data.startDate).getYear() + 1900}-${new Date(data.startDate).getMonth() + 1}-${new Date(data.startDate).getDate()}T${data.intermediateStartTime[data.originalDestination][i]}">${data.intermediateStartTime[data.originalDestination][i]}</time>
                &mdash;
                <time class="event__end-time" datetime="${new Date(data.startDate).getYear() + 1900}-${new Date(data.startDate).getMonth() + 1}-${new Date(data.startDate).getDate()}T${data.intermediateEndTime[data.originalDestination][i]}">${data.intermediateEndTime[data.originalDestination][i]}</time>
              </p>
              <p class="event__duration">${data.transportationDuration[data.originalDestination][i]}</p>
            </div>

            <p class="event__price">
              &euro;&nbsp;<span class="event__price-value">${data.intermediatePrice[data.originalDestination][i] + data.optionCost[1]}</span>
            </p>

            <h4 class="visually-hidden">Offers:</h4>
            <ul class="event__selected-offers">
              <li class="event__offer">
                <span class="event__offer-title">${data.additionalOptions[1]}</span>
                &plus;
                &euro;&nbsp;<span class="event__offer-price">${data.optionCost[1]}</span>
                </li>
            </ul>

            <button class="event__rollup-btn" type="button">
              <span class="visually-hidden">Open event</span>
            </button>
          </div>
        </li>`.trim();
      sum += template;
    }
    return sum;
  };
  return makeTripDestination(object);
};
