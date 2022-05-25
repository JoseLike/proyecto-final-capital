const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      current_user: [],
      logged: false,
      singleproject: [],
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
            "https://3001-joselike-proyectofinalc-d2ufbibxbek.ws-eu45.gitpod.io/api/login"
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
      getSingleProject: async (key) => {
        const response = await fetch(
          "https://www.swapi.tech/api/projects/" + key
        );
        const gettedproject = await response.json();
        setStore({ singleproject: gettedproject.result.properties });
      },
    },
  };
};

export default getState;
