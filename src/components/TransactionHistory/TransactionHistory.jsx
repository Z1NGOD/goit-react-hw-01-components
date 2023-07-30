import PropTypes from "prop-types";
import {
  TransactionHistoryTable,
  TableHead,
  TableHeadRow,
  TableHeaderCell,
  TableBody,
  TableBodyRow,
  TableDataCell,
} from "./TransactionHistory.styled";

const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionHistoryTable className="transaction-history">
      <TableHead>
        <TableHeadRow>
          <TableHeaderCell>Type</TableHeaderCell>
          <TableHeaderCell>Amount</TableHeaderCell>
          <TableHeaderCell>Currency</TableHeaderCell>
        </TableHeadRow>
      </TableHead>
      <TableBody>
        {transactions.map((transaction) => (
          <TableBodyRow key={transaction.id} id={transaction.id}>
            <TableDataCell>{transaction.type}</TableDataCell>
            <TableDataCell>{transaction.amount}</TableDataCell>
            <TableDataCell>{transaction.currency}</TableDataCell>
          </TableBodyRow>
        ))}
      </TableBody>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

export default TransactionHistory;
