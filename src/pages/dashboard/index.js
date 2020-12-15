import React from "react";
import "./styles.css";
import Layout from "../../components/layout";
import Sidebar from "../../components/sidebar";

export default function Dashboard() {
  return (
    <>
      <Sidebar></Sidebar>
      <Layout></Layout>
    </>
  );
}
