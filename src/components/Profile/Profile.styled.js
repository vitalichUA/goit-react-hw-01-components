import styled from 'styled-components';

export const UserAvatar = styled.img`
width: 150px;
margin-bottom: ${p => p.theme.space[4]}px
`

export const Username = styled.p`
margin-bottom: ${p => p.theme.space[3]}px;
font-size: ${p => p.theme.fontSizes.l}
`

export const UserTag = styled.p`
margin-bottom: ${p => p.theme.space[3]}px;
`



export const StyledInfo = styled.ul`
    display: flex;
    align-items: center;
`

export const UserItemInfo = styled.li`
 width: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;

`

export const UserInfoTag = styled.span`
padding: ${p => p.theme.space[2]}px;
font-weight: ${p => p.theme.fontWeights.bold}
`