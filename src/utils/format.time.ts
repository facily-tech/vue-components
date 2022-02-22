function timeAddZero(time: number): string {
  let newTime = `${time}`;

  if (time < 10) {
    newTime = '0' + time;
  }

  return newTime;
}

const formatCurrentHours = (): string => {
  const date = new Date();
  const hours = timeAddZero(date.getHours());
  const minutes = timeAddZero(date.getMinutes());

  return hours + ':' + minutes;
};

export { formatCurrentHours };
