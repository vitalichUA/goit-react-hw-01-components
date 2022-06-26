import PropTypes from 'prop-types';
import info from './user.json'


export const Profile = ( ) => {
    const { username, tag, location, avatar, stats } = info;
    return (
        <div>
            <div>
            <img src={avatar} alt="" />
                <p>{username }</p>
            <p>  {tag} </p>
            <p> {location} </p>
                </div>
            <ul>
            <li>
                <span>Followers</span>
                <span>{ stats.followers}</span>
            </li>
            <li>
                <span>Views</span>
                <span>{ stats.views}</span>
            </li>
            <li>
                <span>Likes</span>
                <span>{ stats.likes}</span>
            </li>
        </ul>
            </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
stats: PropTypes.array
}