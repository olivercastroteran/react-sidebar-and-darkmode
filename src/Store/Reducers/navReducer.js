const initState = {
  isOpen: false,
};

const navReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_NAV':
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export { navReducer };
