const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      current_user: {},

      logged: false,
      project_user_data: [],
      favourites: [],
      singleproject: {
        id: 99,
        title: "Proyecto de Prueba en objeto",
        concept: "aaaaa",
        desired_capital: 250000,
        raised_capital: 150000,
        invested_capital: 5000,
        category: "Sanidad",
        deadline: true,
        loans: 0,
        business_plan: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
        patent: false,
        terms: true,
        project_files: "",
        project_picture: "",
        investment_capacity: 250000,
        views: 0,
      },

      user_projects: [],
      user_stadistics: {},
    },
    actions: {
      setLogged: () => {
        const store = getStore();
        setStore({ logged: true });
      },

      logOut: () => {
        setStore({ logged: false });
        localStorage.removeItem("token");
      },
      deleteFav: async (project) => {
        const store = getStore();
        const response = await fetch(
          "https://3001-joselike-proyectofinalc-uc0zbijd8yh.ws-eu47.gitpod.io/api/delete/favs/" +
            project.id,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        if (data.deleted == true) {
          setStore({
            favourites: store.favourites.filter(
              (item) => item.project_id != project.project_id
            ),
          });
          console.log(data);
        }
      },

      sendFav: async (name) => {
        const store = getStore();
        const response = await fetch(
          "https://3001-joselike-proyectofinalc-uc0zbijd8yh.ws-eu47.gitpod.io/api/favoritos",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(name),
          }
        );
        const data = await response.json();
        setStore({ favourites: [...store.favourites, data.favorite] });
        console.log(data);
      },
      addToFavs: (name) => {
        const store = getStore();
        const actions = getActions();
        if (store.favourites.length != 0) {
          store.favourites.map((projects) => {
            if (projects.project_id != name.project_id) {
              console.log(projects);
              actions.sendFav(name);
            } else {
              console.log(projects);
              actions.deleteFav(projects);
            }
          });
        } else {
          actions.sendFav(name);
        }
      },

      sendUserInfo: async (datos) => {
        let actions = getActions();
        if (datos.email != null && datos.password.trim() != "") {
          const response = await fetch(
            "https://3001-joselike-proyectofinalc-uc0zbijd8yh.ws-eu47.gitpod.io/api/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(datos),
            }
          );
          const data = await response.json();
          localStorage.setItem("token", data.token);
          if (data.logged == true) {
            actions.setLogged();
            setStore({ current_user: data.user });
            setStore({ user_projects: data.user.projects });
            setStore({ favourites: data.user.favorites });
          }
          console.log(data);
        } else {
          return alert("Falta informacion");
        }
      },
      getSingleProject: async (key) => {
        const response = await fetch(
          "https://3001-joselike-proyectofinalc-uc0zbijd8yh.ws-eu47.gitpod.io/api/project/" +
            key
        );
        const gettedproject = await response.json();
        console.log(gettedproject);
        //setStore({ singleproject: gettedproject.result.properties });
      },

      getUserProjects: async () => {
        let store = getStore();
        const response = await fetch(
          "https://3001-joselike-proyectofinalc-uc0zbijd8yh.ws-eu47.gitpod.io/api/userprojects",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          }
        );
        const gettedprojects = await response.json();
        console.log(gettedprojects);
        setStore({ user_projects: gettedprojects.response });
      },

      changeUserInfo: async (changedata) => {
        let store = getStore();
        const response = await fetch(
          "https://3001-joselike-proyectofinalc-uc0zbijd8yh.ws-eu47.gitpod.io/api/edituser/" +
            store.current_user.id,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(changedata),
          }
        );
        const data = await response.json();
        console.log(data);
        if (data.modified == true) {
          setStore({ current_user: data.user });
        }
      },

      changeUserPassword: async (changedata) => {
        let store = getStore();
        const response = await fetch(
          "https://3001-joselike-proyectofinalc-uc0zbijd8yh.ws-eu47.gitpod.io/api/editpassword/" +
            store.current_user.id,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(changedata),
          }
        );
        const data = await response.json();
        console.log(data);
        if (data.modified == true) {
          setStore({ current_user: data.user });
        }
      },
      getUserStadistics: async () => {
        let store = getStore();
        const response = await fetch(
          "https://3001-joselike-proyectofinalc-uc0zbijd8yh.ws-eu47.gitpod.io/api/stadistics/" +
            store.current_user.id
        );
        const data = await response.json();
        console.log(data);
        setStore({
          user_stadistics: { total_projects: data.response.projects.length },
        });
      },
    },
  };
};

export default getState;
