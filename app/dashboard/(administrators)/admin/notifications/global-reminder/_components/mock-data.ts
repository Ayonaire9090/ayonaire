export type GlobalReminder = {
  id: string;
  templateName: string;
  type: string;
  channel: string;
  status: "Active" | "Inactive";
  lastEdited: string;
};

export const globalRemindersData: GlobalReminder[] = [
  {
    id: "1",
    templateName: "Assignment Due Reminder",
    type: "Reminder",
    channel: "In-App",
    status: "Active",
    lastEdited: "Mar 04, 2026",
  },
  {
    id: "2",
    templateName: "Welcome Email",
    type: "Email",
    channel: "Email",
    status: "Active",
    lastEdited: "Feb 10, 2026",
  },
  {
    id: "3",
    templateName: "Inactivity Alert",
    type: "Reminder",
    channel: "Both",
    status: "Inactive",
    lastEdited: "Jan 22, 2026",
  },
];
