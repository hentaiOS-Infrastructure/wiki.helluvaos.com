import React from 'react';
import Layout from '@theme/Layout';
import { Route, Switch } from "react-router-dom";
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Accordian from "../components/Accordian/Accordian";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <main>
        <Switch>
          <Route path="/" component={Accordian} />
        </Switch>
      </main>
    </Layout>
  );
}
