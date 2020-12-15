import React from "react";
import "./styles.css";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";
import cookie from '../../assets/js/cookies';

export default function Dashboard() {
  return (
    <>
      <Sidebar authLevel={cookie.getCookie("authLevel")}></Sidebar>
      <Layout></Layout>
    </>
  );
}
