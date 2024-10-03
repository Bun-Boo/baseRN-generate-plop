import moment from 'moment';

export function getListEventByRangeTime(data: any): any {
  if (!data) {
    return [];
  }
  let currentDate = new Date(moment.utc().format('YYYY-MM-DD'));
  return data?.filter(item => {
    const startDate = new Date(moment.utc(item?.start_date as any));
    const endDate = new Date(moment.utc(item?.end_date as any));
    return currentDate >= startDate && currentDate <= endDate;
  });
}
