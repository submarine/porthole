import { DateTime } from 'luxon';

export const DATE_MED_WITH_WEEKDAY = 'DATE_MED_WITH_WEEKDAY';
export const TIME_SIMPLE = 'TIME_SIMPLE';

export const DEFAULT_TIMEZONE = 'Australia/Melbourne'

export const formatDateTime = (dateTime, format) => {
  if (!dateTime) return '';

  let zonedDateTime = DateTime.fromISO(dateTime).setZone(getUserTimezone());
  return zonedDateTime.toLocaleString(DateTime[format]);
}

const getUserTimezone = () => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || DEFAULT_TIMEZONE
  } catch {
    return DEFAULT_TIMEZONE
  }
}
