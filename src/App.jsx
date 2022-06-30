import { Profile } from "./components/Profile/Profile";
import { Statistics } from "./components/Statistics/Statistics";
import { FriendList } from "./components/FriendList/FriendList";
import { TransactionHistory } from "./components/TransactionHistory/TransactionHistory";
import { Container } from "components/ui/Container.styled";
import data from './mock/data.json';
import friends from './mock/friends.json'
import transactions from './mock/transactions.json'
import { Box } from "./components/ui/Box";



export const App = () => {
  return (
    <Container>
      <Profile/>
      <Box display ="flex">
        <Statistics
          title="Upload stats"
          items={data} />
        </Box>
      <FriendList items={friends} />
      <TransactionHistory items={transactions} />
      </Container>
  );
};
