export const toggleNav = (isOpen) => {
  return {
    type: 'TOGGLE_NAV',
    payload: isOpen,
  };
};
