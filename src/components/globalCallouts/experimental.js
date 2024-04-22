import React from "react";
import Admonition from '@theme/Admonition';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function ExperimentalCallout() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Admonition type="warning">
      <p>
        This feature is currently in the experimental stage of development.
        Do not use it in production environments or presume it is secure.
        Expect breaking changes.
      </p>
    </Admonition>
  );
}


