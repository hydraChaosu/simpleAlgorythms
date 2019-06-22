function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  for (let item of arr) {
    item.orbitalPeriod = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(item.avgAlt + earthRadius, 3) / GM)
    );
    delete item.avgAlt;
  }
  console.log(JSON.stringify(arr, undefined, 2));
  return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 }
]);
