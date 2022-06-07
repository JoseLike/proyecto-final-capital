import React from "react";

export const SidebarData = [
  {
    id: 1,
    title: "Mi Perfil",
    icon: <i className="fas fa-home-alt"></i>,
    link: "/account",
    subtitle: [],
  },
  {
    id: 2,
    title: "Proyectos",
    icon: <i className="fas fa-suitcase"></i>,
    link: "/mis-proyectos",
    subtitle: [
      { id: 1, name: "Mis Proyectos", path: "/mis-proyectos" },
      { id: 2, name: "Crear Proyecto", path: "/crearproyecto" },
    ],
  },
  {
    id: 3,
    title: "Mensajes",
    icon: <i className="fas fa-envelope-open-text"></i>,
    link: "/msj-recibidos",
    subtitle: [
      { id: 1, name: "Recibidos", path: "/msj-recibidos" },
      { id: 2, name: "Enviados", path: "/msj-enviados" },
    ],
  },
  {
    id: 4,
    title: "Estadisticas",
    icon: <i className="fas fa-map-signs"></i>,
    link: "/stadistics",
    subtitle: [],
  },
];
