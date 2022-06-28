import styled from "styled-components";



export const StatList = styled.ul`
display: flex;
margin-top: ${p => p.theme.space[4]}px
`

export const StatItem = styled.li`
width: 50px;
display: flex;
flex-direction: column;
align-items: center;
padding: ${p => p.theme.space[3]}px;
`