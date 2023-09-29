class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }
  addClock(time, callback) {
    if (!time || !callback ) {
      throw new Error("Отсутствуют обязательные аргументы");
    }
    for (let i = 0; i < this.alarmCollection.length; i += 1) {
      if (time === this.alarmCollection[i]) {
        console.warn("Уже присутствует звонок на это же время");
      }
    }
    this.alarmCollection.push({
      callback: callback,
      time: time,
      canCall: true,
    });
  }
  removeClock(time) {
    this.alarmCollection = this.alarmCollection.filter(
      deletingAlarm => deletingAlarm.time !== time
    );
  }
  getCurrentFormattedTime() {
    let hours = new Date().getHours();
    let minute = new Date().getMinutes();
    let time = hours + ":" + minute;
    return time;
  }
  start() {
    if (this.intervalId !== null) {
      return;
    }
    this.intervalId = setInterval(() => {
      this.alarmCollection.forEach(checkTime => {
        if (checkTime.time === this.getCurrentFormattedTime() && checkTime.canCall === true) {
          checkTime.canCall = false;
          checkTime.callback();
        }
      });
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }
  resetAllCalls() {
    this.alarmCollection.forEach(resetAlarm => resetAlarm.canCall = true);
  }
  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}