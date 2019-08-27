export const tripInfo = (object) => {
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

  const makeTripDestination = (data) => `<div class="trip-info__main">
    <h1 class="trip-info__title">${data.originalDestination} &mdash; ... &mdash; ${data.finallDestination}</h1>

    <p class="trip-info__dates">${months[new Date(data.startDate).getMonth()]} ${new Date(data.startDate).getDate()}&nbsp;&mdash;&nbsp;
    ${months[new Date(data.endDate).getMonth()]} ${new Date(data.endDate).getDate()}</p>
  </div>`.trim();

  return makeTripDestination(object);
};
