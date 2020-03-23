import React, { Component } from 'react';
import Header from './components/Header';
import store from './dux/store';
import { sendDeposit, takeWithdraw } from './dux/reducer';

class App extends Component {
  constructor(params) {
    super(params);

    this.state = {
      balance: store.getState().balance
    };
  }

  componentDidMount() {
    store.subscribe(() => {
      console.log('SOMETHING CHANGED!');
      this.setState({
        balance: store.getState().balance
      });
    });
  }

  deposit(num) {
    store.dispatch(sendDeposit(num));
  }
  withdraw(num) {
    store.dispatch(takeWithdraw(num));
  }

  render() {
    console.log(store.getState());
    return (
      <div className='App'>
        <Header />
        <h1 id='balance'>${this.state.balance}</h1>
        <div className='atm'>
          <button id='deposit5' onClick={() => this.deposit(5)}>
            Deposit $5
          </button>
          <button id='deposit25' onClick={() => this.deposit(25)}>
            Deposit $25
          </button>
          <button id='withdraw5' onClick={() => this.withdraw(5)}>
            Withdraw $5
          </button>
          <button id='withdraw25' onClick={() => this.withdraw(25)}>
            Withdraw $25
          </button>
        </div>
      </div>
    );
  }
}

export default App;
