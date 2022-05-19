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
        if (
          datos.email != null &&
          datos.password.trim() !=
            "https://3001-joselike-proyectofinalc-9x2yno4h1l3.ws-eu45.gitpod.io/api/login"
        ) {
          const response = await fetch("", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(datos),
          });
          const data = await response.json();
          localStorage.setItem("token", data.token);
          if (data.logged == true) {
            actions.logTrue();
            setStore({ current_user: data.user });
          }
          console.log(data);
          //navigate.push("/home");
        } else {
          return alert("Falta informacion");
        }
      },
    },
  };
};

export default getState;
