import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import "/workspace/proyecto-final-capital/src/front/styles/messages.css";
import { MessagesCard } from "/workspace/proyecto-final-capital/src/front/js/component/messagescard.jsx";

export const MessagesView = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams();

  return (
    <div className="container mt-5  rounded shadow p-3">
      <div className="row">
        <div className="text-center mx-auto pb-4">Mis Mensajes</div>
        <div>Recibidos</div>
        {store.current_user.received_messages.map((messages) => {
          return (
            <MessagesCard
              key={messages.id}
              emisor={messages.emisor}
              texto={messages.text}
            />
          );
        })}
        <div>Enviados</div>
        {store.current_user.sended_messages.map((messages) => {
          return (
            <MessagesCard
              key={messages.id}
              emisor={messages.emisor}
              texto={messages.text}
            />
          );
        })}
      </div>
    </div>
  );
};
