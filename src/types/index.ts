export type TransactionType = 'income' | 'expense';

export type Category =
  | 'salary'
  | 'freelance'
  | 'investment'
  | 'food'
  | 'transport'
  | 'housing'
  | 'health'
  | 'entertainment'
  | 'education'
  | 'shopping'
  | 'other';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  type: TransactionType;
  category: Category;
  date: string; // ISO string
  note?: string;
}

export interface Budget {
  category: Category;
  limit: number;
  spent: number;
}

export interface MonthSummary {
  month: string; // e.g. "Jan", "Fev"
  income: number;
  expense: number;
}

export interface CategorySummary {
  category: Category;
  amount: number;
  color: string;
}
