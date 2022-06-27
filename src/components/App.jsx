import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import data from '../components/Statistics/data.json';
import friends from './FriendList/friends.json'
import transactions from './TransactionHistory/transactions.json'
import { Box } from "./Box";



export const App = () => {
  return (
    <div>
      <Profile
      />
      <Box display ="flex">
        <Statistics title="Upload stats" items={data} />
        </Box>
      <FriendList items={friends} />
      <TransactionHistory items={transactions}/>
    </div>
  );
};
