import React from "react";
import "./styles.css";
import Layout from "../../../../components/layout";
import Sidebar from "../../../../components/sidebar";
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

export default function UserList(props) {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection("users").get();
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    fetchData();
  }, []);

  return (
    <>
      <Sidebar></Sidebar>
      <Layout>
        <main className="main-container">
          <div className="dashboard-div">
            <div className="dashboard-small-card"></div>
            <div className="dashboard-small-card"></div>
            <div className="dashboard-small-card"></div>
          </div>
          <div className="dashboard-large-card">
            <table>
              <thead>
                <td>Nome Completo</td>
                <td>Cargo</td>
                <td>Login</td>
                <td>E-mail</td>
                <td>Data de Admissão</td>
              </thead>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.fullName}</td>
                  <td>{user.occupation}</td>
                  <td>{user.login}</td>
                  <td>{user.email}</td>
                  <td>{user.dateJoined}</td>
                  <td></td>
                </tr>
              ))}
            </table>
          </div>
        </main>
      </Layout>
    </>
  );
}
