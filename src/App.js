import './App.css';
import { Header } from './Components/Header'
import { Balance } from './Components/Balance'
import { IncomeExxpenses } from './Components/IncomeExxpenses'
import { TransactionList } from './Components/TransactionList'
import { AddTransaction } from './Components/AddTransaction.js'
import{ GlobalProvider } from './contex/GlobalState'





function App() {
  return (
    <GlobalProvider>
      
      <Header />
      
      <div className="container">
        <Balance />
        <IncomeExxpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
