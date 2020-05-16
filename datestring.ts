export type datestring = string;
export type datetimestring = string;

let tz: string = "Australia/Sydney";

export function setTimeZone(timeZone: string) {
  tz = timeZone;
}

export function today(): datestring {
  return toDateString(new Date());
}

export function now(): datetimestring {
  return toDateTimeString(new Date());
}

export function dropTime(dateTime: datetimestring): datestring {
  return toDateString(new Date(dateTime));
}

export function toDateString(date: Date): datestring {
  const dtf = new Intl.DateTimeFormat("en-AU", {
    timeZone: tz,
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });

  let text = dtf.format(date);
  let [day, month, year] = text.split("/").map(Number);

  const padZero = (x: number) => ("0" + x).slice(-2);
  let isoDate = year + "-" + padZero(month) + "-" + padZero(day);

  // If there is a time but no "Z", JavaScript treats it as local
  return isoDate + "T00:00:00";
}

export function toDateTimeString(d: Date): datetimestring {
  return d.toISOString();
}

export function toNullableDateString(date: Date | null): datestring | null {
  if (date === null) return null;
  return toDateString(date);
}

export function toNullableDateTimeString(date: Date | null): datetimestring | null {
  if (date === null) return null;
  return toDateTimeString(date);
}
