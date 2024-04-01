import clsx from "clsx";
import css from "./TransactionHistoryTr.module.css";

export default function TransactionHistoryTr({
  transaction: { type, amount, currency },
}) {
  return (
    <>
      <td className={css.td}>{type}</td>
      <td className={css.td}>{amount}</td>
      <td className={css.td}>{currency}</td>
    </>
  );
}