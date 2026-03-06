export function setupCountdown() {
  const daysContainer = document.getElementById("cd-days") as HTMLDivElement;
  const hoursContainer = document.getElementById("cd-hours") as HTMLDivElement;
  const minutesContainer = document.getElementById(
    "cd-minutes",
  ) as HTMLDivElement;
  const secondsContainer = document.getElementById(
    "cd-seconds",
  ) as HTMLDivElement;

  // @ts-ignore
  const _ = new Countdown(
    new Date(2026, 3, 11),
    (days: number, hours: number, minutes: number, seconds: number) => {
      daysContainer.textContent = String(days);
      minutesContainer.textContent = String(minutes);
      hoursContainer.textContent = String(hours);
      secondsContainer.textContent = String(seconds);
    },
  );
}

type Ontickcallback = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
) => void;

class Countdown {
  private intervalID: number | null = window.setInterval(
    () => this.tick(),
    1000,
  );
  private targetDate: Date;
  private onTick: Ontickcallback;
  constructor(targetDate: Date, ontick: Ontickcallback) {
    this.targetDate = targetDate;
    this.onTick = ontick;
  }

  private tick() {
    const now = new Date();
    const difMs = this.targetDate.getTime() - now.getTime();

    if (difMs <= 0) {
      this.stop();
    }

    const days = Math.floor(difMs / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difMs / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difMs / (1000 * 60)) % 60);
    const seconds = Math.floor((difMs / 1000) % 60);
    this.onTick(days, hours, minutes, seconds);
  }
  stop() {
    if (this.intervalID !== null) {
      clearInterval(this.intervalID);
      this.intervalID = null;
    }
  }
}
