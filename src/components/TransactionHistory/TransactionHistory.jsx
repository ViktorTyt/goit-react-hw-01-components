import PropTypes from "prop-types";
import css from './TransactionHistory.module.css'

export const TransactionHistory = ({ items }) => {
    
    const transactionItemMarkup = items.map(({ id, type, amount, currency }) =>
        <tr className={css.tableRow} key={id}>
            <td className={css.tableData}>{type}</td>
            <td className={css.tableData}>{amount}</td>
            <td className={css.tableData}>{currency}</td>
        </tr>
    );

    return (
        <table className={css.transactionHistory}>
            <thead className={css.tabkeHead}>
                <tr>
                    <th className={css.columnType}>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            <tbody className={css.tableBody}>
                {transactionItemMarkup}
            </tbody>
        </table>
    );
        
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    )
};
