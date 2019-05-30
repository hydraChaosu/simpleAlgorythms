const clock = (hour = 0, minutes = 0) => {
  let localH;
  let localM;

  localH = addHours(hour, localH);

  let results = addMinutes(minutes, localM, localH);
  localM = results.localM;
  localH = results.localH;
  localH = localH >= 10 ? localH : `0${localH}`;
  localM = localM >= 10 ? localM : `0${localM}`;

  return `${localH}:${localM}`;
};

function addHours(hour, localH) {
  localH = hour % 24;
  if (hour < 0) {
    return (localH = (24 + localH) % 24);
  }
  return hour;
}

function addMinutes(minutes, localM, localH) {
  if (minutes >= 0) {
    localM = minutes % 60;
    localH = localH + Math.floor(minutes / 60);
    localH = localH % 24;
  } else {
    localM = minutes % 60;
    localM = 60 + localM;
    localH = (localH + Math.floor(minutes / 60)) % 24;
    if (localH < 0) {
      localH = 24 + localH;
    }
  }
  return { localM, localH };
}
console.log(clock(1, -160));
