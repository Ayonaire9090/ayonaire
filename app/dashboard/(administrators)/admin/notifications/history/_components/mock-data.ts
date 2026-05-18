export type HistoryLog = {
  id: string;
  dateSent: string;
  recipients: number;
  success: number;
  failed: number;
  status: 'Success' | 'Partial' | 'Failed' | 'Queued';
};

export const historyLogsData: HistoryLog[] = [
  { id: '1', dateSent: '2026-03-01 10:30 AM', recipients: 120, success: 118, failed: 2, status: 'Success' },
  { id: '2', dateSent: '2026-02-28 02:15 PM', recipients: 45, success: 44, failed: 1, status: 'Partial' },
  { id: '3', dateSent: '2026-02-25 09:00 AM', recipients: 300, success: 290, failed: 10, status: 'Failed' },
  { id: '4', dateSent: '2026-02-20 11:45 AM', recipients: 150, success: 150, failed: 0, status: 'Success' },
  { id: '5', dateSent: '2026-02-18 04:20 PM', recipients: 80, success: 0, failed: 0, status: 'Queued' },
];
