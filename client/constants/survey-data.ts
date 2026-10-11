// Survey Questions Data organized by categories
export interface SurveyQuestion {
  id: number;
  question: string;
  category: string;
}

export const likertOptions = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];
