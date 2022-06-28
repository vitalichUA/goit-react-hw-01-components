import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import { Container } from "utils/Container.styled";
import data from '../components/Statistics/data.json';
import friends from './FriendList/friends.json'
import transactions from './TransactionHistory/transactions.json'
import { Box } from "../utils/Box";



export const App = () => {
  return (
 <Container>
        <Profile/>
      <Box display ="flex">
        <Statistics title="Upload stats" items={data} />
        </Box>
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
      </Container>
  );
};
