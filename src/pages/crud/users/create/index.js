import React from "react";
import firebase from "../../../../firebase";

/* 
users

login
password
fullName
email
occupation 
dateJoined

*/
export default function CreateUser({ user }) {
  const [fullName, setFullName] = React.useState();
  const [login, setLogin] = React.useState();
  const [password, setPassword] = React.useState();
  const [email, setEmail] = React.useState();
  const [occupation, setOccupation] = React.useState();
  const [dateJoined, setDateJoined] = React.useState();

  const onCreate = () => {
    const db = firebase.firestore();
    db.collection("users").add({fullName: fullName, login: login, password: password, email: email, occupation: occupation, dateJoined: dateJoined})
  }

  return (
    <>
      <input
        value={fullName}
        onChange={(e) => {
          setFullName(e.target.value);
        }}
      />
      <input
        value={login}
        onChange={(e) => {
          setLogin(e.target.value);
        }}
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        value={occupation}
        onChange={(e) => {
          setOccupation(e.target.value);
        }}
      />
      <input
        value={dateJoined}
        onChange={(e) => {
          setDateJoined(e.target.value);
        }}
      />
      <button onClick={onCreate}>Adicionar</button>
    </>
  );
}
