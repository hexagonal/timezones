let tz = "Australia/Sydney";
export function setTimeZone(timeZone) {
    tz = timeZone;
}
export function today() {
    return toDateString(new Date());
}
export function now() {
    return toDateTimeString(new Date());
}
export function dropTime(dateTime) {
    return toDateString(new Date(dateTime));
}
export function toDateString(date) {
    const dtf = new Intl.DateTimeFormat("en-AU", {
        timeZone: tz,
        year: "numeric",
        month: "numeric",
        day: "numeric",
    });
    let text = dtf.format(date);
    let [day, month, year] = text.split("/").map(Number);
    const padZero = (x) => ("0" + x).slice(-2);
    let isoDate = year + "-" + padZero(month) + "-" + padZero(day);
    // If there is a time but no "Z", JavaScript treats it as local
    return isoDate + "T00:00:00";
}
export function toDateTimeString(d) {
    return d.toISOString();
}
export function toNullableDateString(date) {
    if (date === null)
        return null;
    return toDateString(date);
}
export function toNullableDateTimeString(date) {
    if (date === null)
        return null;
    return toDateTimeString(date);
}
