import moment from 'moment';

export const format_DD_MM_YYYY = 'DD-MM-YYYY';
export const format_DDMMYYYY = 'DD/MM/YYYY';

export const format_DD_MM_YYYY_HH_mm = 'DD-MM-YYYY HH:mm';

export function formatDateTime(dateTime?: string, formatType?: string): string {
  return moment(dateTime).format(formatType ?? format_DD_MM_YYYY);
}

export function formatTime(time: number) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((time / (1000 * 60)) % 60);
  const secs = Math.floor((time / 1000) % 60);
  return {days, hours, mins, secs};
}

export function compareTwoTime(time1?: string, time2?: string): number {
  let date1 = new Date(time1!);
  let date2 = new Date(time2!);
  if (date1 < date2) {
    return -1;
  } else if (date1 > date2) {
    return 1;
  } else {
    return 0;
  }
}
