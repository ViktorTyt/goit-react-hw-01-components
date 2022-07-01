import PropTypes from "prop-types";
import css from './FriendListItem.module.css'

export const FriendListItem = ({ name, avatar, isOnline }) => {
    
    const statusColor = isOnline ? css.statusGreen : css.statusRed;

    return (
        <li className={css.item}>
            <span className={statusColor}></span>
            <img className={css.avatar} src={avatar} alt={name} width="48" />
            <p className={css.name}>{name}</p>
        </li>
    );
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};