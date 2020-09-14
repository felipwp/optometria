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
export default function UpdateUser({ user }) {
  const [login, setLogin] = React.useState(user.login);
  const [password, setPassword] = React.useState(user.password);
  const [email, setEmail] = React.useState(user.email);
  const [occupation, setOccupation] = React.useState(user.occupation);
  const [dateJoined, setDateJoined] = React.useState(user.dateJoined);
  const [fullName, setFullName] = React.useState(user.fullName);

  const onUpdate = () => {
    const db = firebase.firestore();
    db.collection('users').doc(user.id).set({...user, fullName, login, password, email, occupation, dateJoined})
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
      <button onClick={onUpdate}>Atualizar</button>
    </>
  );
}
