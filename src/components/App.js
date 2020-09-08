import React from 'react';
import user from '../components/Profile/user.json';
import statisticalData from '../components/Statistics/statisticalData.json';
import friends from '../components/FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';
import Profile from './Profile/Profile';
import Statistics from '../components/Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />

    <Statistics title="Upload stats" stats={statisticalData} />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />
  </div>
);

export default App;
