import { Box } from 'utils/Box';
import PropTypes from 'prop-types';
import info from './user.json'
import {UserAvatar, StyledInfo, Username, UserTag, UserItemInfo, UserInfoTag} from './Profile.styled'

export const Profile = ( ) => {
    const { username, tag, location, avatar, stats } = info;
    return (
        <Box width="250px" p={4} display="flex" flexDirection="column" alignItems="center" border="normal" borderRadius="normal">
            <Box display="flex" flexDirection="column" alignItems="center" pb={4}>
            <UserAvatar src={avatar} alt="" />
                <Username>{username}</Username>
            <UserTag>  {tag} </UserTag>
            <p> {location} </p>
                </Box>
            
           
            <StyledInfo>
            <UserItemInfo>
                <span>Followers </span>
                <UserInfoTag>{ stats.followers}</UserInfoTag>
            </UserItemInfo>
            <UserItemInfo>
                <span>Views </span>
                <UserInfoTag>{ stats.views}</UserInfoTag>
            </UserItemInfo>
            <UserItemInfo>
                <span>Likes </span>
                <UserInfoTag>{ stats.likes}</UserInfoTag>
                    </UserItemInfo>
                    </StyledInfo>
        </Box>
           
    )
}

Profile.propTypes = {
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
stats: PropTypes.array
}