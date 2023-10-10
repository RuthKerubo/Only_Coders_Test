"use client";
import React, { useEffect } from "react";
import Layout from "@components/layout/Layout";
import Dashboard from "@components/dashboard/Dashboard";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Home = () => {
  return (
    <Layout title="Home Layout">
      <Dashboard />
    </Layout>
  );
};

export default Home;
