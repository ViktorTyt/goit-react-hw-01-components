import PropTypes from "prop-types";
import css from './Statistics.module.css'

const getRandomHexColor = () => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return { backgroundColor: color }
}

export const Statistics = ({ title, stats }) => {
    
    const titleMarkup = title ? <h2 className={css.title}>{title}</h2> : null;

    const itemMarkup = stats.map(({ id, label, percentage}) =>
        <li key={id} className={css.statItem} style={(getRandomHexColor())}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>);

    return <section className={css.statistics}>
            {titleMarkup}
        <ul className={css.statList}>{itemMarkup}</ul>
    </section>;
        
}

Statistics.propeTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
}