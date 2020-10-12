const initState = {
  isDark: false,
};

const darkModeReducer = (state = initState, action) => {
  switch (action.type) {
    case 'TOGGLE_DARK':
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return state;
  }
};

export { darkModeReducer };
