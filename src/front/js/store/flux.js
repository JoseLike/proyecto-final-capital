const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      current_user: {},
      logged: false,
      project_user_data: [],
      favourites: [],
      sended_messages: [],
      received_messages: [],
      singleproject: {},
      project_user: {},
      user_projects: [],
      user_stadistics: {},
    },
    actions: {
      logOut: () => {
        localStorage.removeItem("token");
      },

      deleteFav: async (project) => {
        const store = getStore();
        const response = await fetch(
          "https://proyecto-final-investup.herokuapp.com/api/delete/favs/" +
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
          "https://proyecto-final-investup.herokuapp.com/api/favoritos",
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
            "https://proyecto-final-investup.herokuapp.com/api/login",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(datos),
            }
          );
          const data = await response.json();
          if (data.logged == true) {
            localStorage.setItem("token", data.token);
            setStore({ current_user: data.user });
            setStore({ logged: true });
            //setStore({ user_projects: data.user.projects });
            setStore({ favourites: data.user.favorites });
            setStore({ sended_messages: data.user.sended_messages });
            setStore({ received_messages: data.user.received_messages });
          }
          return true;
        } else {
          return false;
        }
      },
      getSingleProject: async (key) => {
        const response = await fetch(
          "https://proyecto-final-investup.herokuapp.com/api/project/" + key
        );
        const gettedproject = await response.json();
        console.log(gettedproject);
        setStore({ singleproject: gettedproject.response });
        setStore({ project_user: gettedproject.response.user });
      },

      getUserProjects: async () => {
        let store = getStore();
        const response = await fetch(
          "https://proyecto-final-investup.herokuapp.com/api/userprojects/" +
            store.current_user.id,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              //Authorization: "Bearer " + localStorage.getItem("token"),
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
          "https://proyecto-final-investup.herokuapp.com/api/edituser/" +
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
          "https://proyecto-final-investup.herokuapp.com/api/editpassword/" +
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
          "https://proyecto-final-investup.herokuapp.com/api/stadistics/" +
            store.current_user.id
        );
        const data = await response.json();
        console.log(data);
        setStore({
          user_stadistics: { total_projects: data.response.projects.length },
        });
      },
      setLogOut: () => {
        localStorage.removeItem("token");
      },
      deleteFav: async (messageid) => {
        let store = getStore();
        const response = await fetch(
          "https://proyecto-final-investup.herokuapp.com/api/delete/message/" +
            messageid,
          {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
        );
        const data = await response.json();
        if (data.deleted == true) {
          console.log(data);
          if (data.msg.emisor != store.current_user.id) {
            setStore({
              received_messages: store.received_messages.filter(
                (item) => item.messageid != messageid
              ),
            });
          } else {
            setStore({
              sended_messages: store.sended_messages.filter(
                (item) => item.messageid != messageid
              ),
            });
          }
          console.log(data);
        }
      },
      getUserMessages: async () => {
        let store = getStore();
        const response = await fetch(
          "https://proyecto-final-investup.herokuapp.com/api/stadistics/" +
            store.current_user.id
        );
        const data = await response.json();

        setStore({ sended_messages: data.response.sended_messages });
        setStore({ received_messages: data.response.received_messages });

        console.log(data);
      },
    },
  };
};

export default getState;
