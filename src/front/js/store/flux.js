const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      current_user: [],
      logged: false,
    },
    actions: {
      setLogged: () => {
        const store = getStore();
        setStore({ logged: true });
      },
      setLogOut: () => {
        const store = getStore();
        setStore({ logged: false });
      },
    },
  };
};

export default getState;
