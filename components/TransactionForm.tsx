"use client";
import { useState } from "react";

type FormType = {
  type: "income" | "expense";
  amount: number | "";
  category: string;
  description: string;
  date: string;
};

function TransactionForm() {
  const [form, setForm] = useState<FormType>({
    type: "income",
    amount: "",
    category: "",
    description: "",
    date: "",
  });

  const inputStyle =
    "px-4 py-2 rounded-full mt-2 bg-gray-100 focus:outline-none";
  const toggleButton = (active: boolean) =>
    `px-4 py-2 rounded-full transition border ${
      active
        ? "bg-red-200 border border-red-300 shadow-md"
        : "border border-gray-200 hover:bg-red-100"
    }`;

  const handleChange = (field: keyof FormType, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(form);
  }


  return (
    <div className="flex gap-2">
      <h1>TRANSACTION</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label>Type</label>
          <div className="flex gap-2 mt-2">
            <button
              type="button"
              onClick={() => handleChange("type", "income")}
              className={toggleButton(form.type === "income")}
            >
              Income
            </button>
            <button
              type="button"
              onClick={() => handleChange("type", "expense")}
              className={toggleButton(form.type === "expense")}
            >
              Expense
            </button>
          </div>

          <div className="flex flex-col mt-4">
            <label>Amount</label>
            <input
              type="number"
              value={form.amount}
              onChange={(e) =>
                handleChange(
                  "amount",
                  e.target.value === "" ? "" : Number(e.target.value),
                )
              }
              placeholder="Enter amount"
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-4">
            <label>Category</label>
            <input
              type="text"
              value={form.category}
              onChange={(e) => handleChange("category", e.target.value)}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-4">
            <label>Description</label>
            <input
              type="text"
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              className={inputStyle}
            />
          </div>

          <div className="flex flex-col mt-4">
            <label>Date</label>
            <input
              type="date"
              value={form.date}
              onChange={(e) => handleChange("date", e.target.value)}
              className={inputStyle}
            />
          </div>

          <div className="flex mt-4">
            <button
              type="button"
              className="px-4 py-2 rounded-full text-black hover:bg-red-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-full bg-red-200"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TransactionForm;
