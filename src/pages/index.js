import React from 'react';
import Layout from '@theme/Layout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Accordian from "../components/Accordian/Accordian";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Router>
          <Routes>
            <Route path="/" component={Accordian} />
          </Routes>
        </Router>
      </main>
    </Layout>
  );
}
