import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionhistory}>
    <thead className={styles.title}>
      <tr>
        <th className={styles.titleType}>Type</th>
        <th className={styles.titleAmount}>Amount</th>
        <th className={styles.titleCurrency}>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.tableBody}>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id} className={styles.row}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default TransactionHistory;
