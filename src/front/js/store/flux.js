const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      current_user: [
        {
          id: 99,
          name: "aaa",
          last_name: "asasdas",
          email: "a@a.com",
          country: "Venezuela",
          user_type: 2,
          is_premium: false,
        },
      ],
      logged: false,
      project_user_data: [],
      singleproject: [
        {
          id: 99,
          title: "aaaaaaa",
          concept: "aaaaa",
          desired_capital: 250000,
          raised_capital: 150000,
          invested_capital: 5000,
          category_id: "Sanidad",
          deadline: "25 / 12 / 2023",
          loans: 0,
          business_plan: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          patent: false,
          terms: true,
          project_files: "",
          project_picture: "",
          investment_capacity: 250000,
          views: 0,
        },
      ],
      user_projects: [
        {
          id: 99,
          title: "aaaaaaa",
          concept: "aaaaa",
          desired_capital: 250000,
          raised_capital: 150000,
          invested_capital: 5000,
          category_id: "Medicina",
          deadline: "25 / 12 / 2023",
          loans: 0,
          business_plan: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
          patent: false,
          terms: true,
          project_files: "",
          project_picture: "",
          investment_capacity: 250000,
          views: 0,
        },
      ],
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
            "https://3001-joselike-proyectofinalc-mbz533oyfac.ws-eu46.gitpod.io/api/login",
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
      getSingleProject: async (key) => {
        const response = await fetch(
          "https://3001-joselike-proyectofinalc-m77gee2opis.ws-eu46.gitpod.io/api/project/" +
            key
        );
        const gettedproject = await response.json();
        //setStore({ singleproject: gettedproject.result.properties });
      },
      getUserProjects: async () => {
        const response = await fetch(
          "https://3001-joselike-proyectofinalc-m77gee2opis.ws-eu46.gitpod.io/api/projects"
        );
        const gettedprojects = await response.json();
        //setStore({ user_projects: gettedprojects.result.properties });
      },
      getUserProjects: async (user_id) => {
        const response = await fetch(
          "https://3001-joselike-proyectofinalc-m77gee2opis.ws-eu46.gitpod.io/api/projects"
        );
        const gettedprojects = await response.json();
        //setStore({ user_projects: gettedprojects.result.properties });
      },
    },
  };
};

export default getState;
