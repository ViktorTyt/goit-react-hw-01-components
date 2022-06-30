import PropTypes from "prop-types";
import css from './FriendList.module.css'
import { FriendListItem } from 'components/FriendListItem/FriendListItem'


export const FriendList = ({ friends }) => {
    
    return <ul className={css.list}>
        {friends.map(({id, name, avatar, isOnline}) =>
            <FriendListItem
                key={id}
                name={name}
                avatar={avatar}
                isOnline={isOnline}
            />
        )}
</ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.exact({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        })
    )
}