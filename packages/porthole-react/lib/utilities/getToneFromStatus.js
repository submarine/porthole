const STATUS_TONES = {
  'ACTIVE': 'success',
  'CANCELLED': 'critical',
  'EXPIRED': 'warning',
  'FAILED': 'critical',
  'PAUSED': 'warning',
  'STALE': 'info'
}

export const getToneFromStatus = (status) => {
  return STATUS_TONES[status] || 'info';
}
