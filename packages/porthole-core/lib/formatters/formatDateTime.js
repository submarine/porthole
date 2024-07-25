import { DateTime } from 'luxon';

export const DATE_MED_WITH_WEEKDAY = 'DATE_MED_WITH_WEEKDAY';

export const formatDateTime = (dateTime, format) => {
  if (!dateTime) return '';

  let zonedDateTime = DateTime.fromISO(dateTime).setZone('Australia/Melbourne');
  return zonedDateTime.toLocaleString(DateTime[format]);
}
