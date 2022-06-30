import css from './Statistics.module.css'

const getRandomHexColor = () => {
    const color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    return { backgroundColor: color }
}

export const Statistics = ({ title, stats }) => {
    
    const titleMarkup = title ? <h2 className={css.title}>{title}</h2> : null;
    const itemMrkup = stats.map(({ id, label, percentage}) =>
        <li key={id} className={css.statItem} style={(getRandomHexColor())}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
        </li>);

    return <section className={css.statistics}>
            {titleMarkup}
        <ul className={css.statList}>{itemMrkup}</ul>
    </section>;
        
}