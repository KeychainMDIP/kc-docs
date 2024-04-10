import React from 'react';
import Giscus from "@giscus/react";
import { useColorMode } from '@docusaurus/theme-common';

export default function GiscusComponent() {
  const { colorMode } = useColorMode();

  return (
    <Giscus  
      repo="KeychainMDIP/kc"
      repoId="R_kgDOLWnyKg"
      category="Site Comments"
      categoryId="DIC_kwDOLWnyKs4Cemi8"
      mapping="title"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={colorMode}
      lang="en"
      loading="lazy"
      crossorigin="origin"
      async
    />
  );
}
    