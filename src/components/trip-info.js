export const tripInfo = (initialDesination, lastDestination, beginningDate, lastDate) => {
  const months = [`January`,
    `February`,
    `March`,
    `April`,
    `May`,
    `June`,
    `July`,
    `August`,
    `September`,
    `October`,
    `November`,
    `December`];

  const makeTripDestination = (originalDesination, finallDestination, startDate, endDate) => `<div class="trip-info__main">
    <h1 class="trip-info__title">${originalDesination} &mdash; ... &mdash; ${finallDestination}</h1>

    <p class="trip-info__dates">${months[new Date(startDate).getMonth()]} ${new Date(startDate).getDate()}&nbsp;&mdash;&nbsp;
    ${months[new Date(endDate).getMonth()]} ${new Date(endDate).getDate()}</p>
  </div>`.trim();

  return makeTripDestination(initialDesination, lastDestination, beginningDate, lastDate);
};
