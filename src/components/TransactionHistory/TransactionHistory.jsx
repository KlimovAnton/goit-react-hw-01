import TransactionHistoryTr from "../TransactionHistoryTR/TransactionHistoryTr"
import clsx from "clsx";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
    return (
      <table className={css.table}>
        <thead>
          <tr className={css.tableTitle}>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map((transaction) => (
            <tr className={css.rowValue} key={transaction.id}>
              <TransactionHistoryTr transaction={transaction} />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }