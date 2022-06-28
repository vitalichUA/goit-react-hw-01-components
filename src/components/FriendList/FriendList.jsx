import PropTypes from 'prop-types';
import { Box } from 'utils/Box';
import {StyledFriendList, FriendListItem, StatusBar} from './FriendList.styled'

export const FriendList = ({ items }) => {
    return (
        <Box display="flex" p={4}>
            <StyledFriendList>
                {items.map(item => (
                    <FriendListItem key={item.id}>
                        <StatusBar status={item.isOnline}></StatusBar>
  <img src={item.avatar} alt="User avatar" width="48" />
                        <p>{item.name}</p>
                        </FriendListItem>
                ))}
            </StyledFriendList>
        </Box>
    )
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
    id: PropTypes.number

}