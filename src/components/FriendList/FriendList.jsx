import PropTypes from 'prop-types';

export const FriendList = ({ items }) => {
    return (
        <div>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <span>{item.isOnline ? "online" : "offline" }</span>
  <img src={item.avatar} alt="User avatar" width="48" />
                        <p>{item.name }</p>
                        </li>
                ))}
            </ul>
        </div>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number

}