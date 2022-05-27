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
      sendUserInfo: async (datos) => {
        let actions = getActions();
        if (datos.email != null && datos.password.trim() != "") {
          const response = await fetch(
            "https://3001-joselike-proyectofinalc-m77gee2opis.ws-eu46.gitpod.io/api/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(datos),
            }
          );
          const data = await response.json();
          //localStorage.setItem("token", data.token);
          if (data.logged == true) {
            actions.setLogged();
            setStore({ current_user: data.user });
          }
          console.log(data);
        } else {
          return alert("Falta informacion");
        }
      },
    },
  };
};

export default getState;
