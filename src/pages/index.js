import React from 'react';
import Layout from '@theme/Layout';
import BrowserOnly from '@docusaurus/BrowserOnly';
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
        <BrowserOnly fallback={<div>Loading...</div>}>
          {() => (
            <Router>
              <Routes>
                <Route path="/" element={<Accordian />} />
              </Routes>
            </Router>
          )}
        </BrowserOnly>
      </main>
    </Layout>
  );
}
