const INITIAL_STATE = { balance: 0 };

const DEPOSIT = 'DEPOSIT';
const WITHDRAW = 'WITHDRAW';

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DEPOSIT:
      return { balance: state.balance + action.amount };
    case WITHDRAW:
      return { balance: state.balance - action.amount };
    default:
      return state;
  }
};

export function sendDeposit(amount) {
  return {
    type: DEPOSIT,
    amount: amount
  };
}
export function takeWithdraw(amount) {
  return {
    type: WITHDRAW,
    amount: amount
  };
}

export default reducer;
