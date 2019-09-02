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

  const makeTripDestination = (input) =>`<ul class="trip-days">
      <li class="trip-days__item day">
        <div class="day__info">
          <span class="day__counter">1</span>
          <time class="day__date" datetime="${new Date(input.startDate).getYear() + 1900}-${new Date(input.startDate).getMonth() + 1}-${new Date(input.startDate).getDate()}">${months[new Date(input.startDate).getMonth()]} ${new Date(input.startDate).getDate()}</time>
        </div>
        <ul class="trip-events__list">

        </ul>
      </li>
   </ul>`.trim();
  return makeTripDestination(object);
};
