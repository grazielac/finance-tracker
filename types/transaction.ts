export interface Transaction {
  id: string;
  user_id: string;
  amount: number;
  type: "income" | "expense";
  category: string;
  descriptiong?: string;
  created_at: string;
}
