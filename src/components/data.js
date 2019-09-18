export const data = () => {
  const getTripDestination = {
    transportTypes: [`Flight`, `Train`, `Bus`, `Bus`, `Ship`, `Transport`, `Taxi`, `Train`, `Drive`
    ][Math.floor(Math.random() * 9)],
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

    intermediateCities: [`Einhoven`, `Antwerp`, `Duisburg`, `Cologne`, `Koblenz`, `Frankfurt am Main`, `Breda`, `Bruges`, `Bonn`
    ][Math.floor(Math.random() * 9)],

    intermediatePrice: [20, 16, 35, 10, 25, 75, 5, 55, 25
    ][Math.floor(Math.random() * 9)],

    intermediateStartTime: [`10:00`, `16:20`, `19:15`, `8:25`, `11:35`, `14:30`, `6:40`, `8:55`, `13:25`
    ][Math.floor(Math.random() * 9)],

    intermediateEndTime: [`11:10`, `18:10`, `21:45`, `8:55`, `13:05`, `17:50`, `7:05`, `10:30`, `18:15`
    ][Math.floor(Math.random() * 9)],

    transportationDuration: [`1H 10M`, `1H 50M`, `2H 30M`, `30M`, `1H 30M`, `3H 20M`, `25M`, `1H 35M`, `4H 50M`
    ][Math.floor(Math.random() * 9)],

  };
  return getTripDestination;
};
