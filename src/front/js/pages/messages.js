import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "/workspace/proyecto-final-capital/src/front/styles/messages.css";
import { MessagesCard } from "/workspace/proyecto-final-capital/src/front/js/component/messagescard.jsx";

export const MessagesView = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  return (
    <div className="container-fluid ct-principal-mensajes m-5  rounded shadow p-3">
      <div className="row">
        <div className="messages-tittle text-center mx-auto pb-4">
          Mis Mensajes
        </div>
        <div className="messages-tittle-recibidos">Recibidos</div>
        <MessagesCard
          key={1}
          emisor={2}
          texto={"pruebas"}
          subject="pruebas"
          project_id={2}
        />
        {store.received_messages.map((messages) => {
          return (
            <MessagesCard
              key={messages.id}
              project_id={messages.project_id}
              subject={messages.subject}
              emisor={messages.emisor}
              texto={messages.text}
            />
          );
        })}
        <div className="messages-tittle-enviados">Enviados</div>
        {store.sended_messages.map((messages) => {
          return (
            <MessagesCard
              project_id={messages.project_id}
              key={messages.id}
              subject={messages.subject}
              emisor={messages.emisor}
              texto={messages.text}
            />
          );
        })}
      </div>
    </div>
  );
};
