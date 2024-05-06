"use strict";(self.webpackChunkkc_docs=self.webpackChunkkc_docs||[]).push([[243],{5709:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var t=a(4848),i=a(8453);const d={title:"What is the DID Manifest?",sidebar_label:"DID Manifest",slug:"manifests"},s=void 0,r={id:"CLI-user-manual/manifests",title:"What is the DID Manifest?",description:"The DID Manifest is a public data container that is returned with the DID document data. Users can chose to publish or reveal any attestation they receive. All information in the manifest is publicly viewable.",source:"@site/kc/doc/CLI-user-manual/06-manifests.md",sourceDirName:"CLI-user-manual",slug:"/CLI-user-manual/manifests",permalink:"/docs/CLI-user-manual/manifests",draft:!1,unlisted:!1,editUrl:"https://github.com/keychainmdip/kc-docs/tree/main/packages/create-docusaurus/templates/shared/kc/doc/CLI-user-manual/06-manifests.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"What is the DID Manifest?",sidebar_label:"DID Manifest",slug:"manifests"},sidebar:"tutorialSidebar",previous:{title:"Credentials",permalink:"/docs/CLI-user-manual/credentials"},next:{title:"Challenges and Responses",permalink:"/docs/CLI-user-manual/challenge-responses"}},c={},l=[{value:"Publishing a Verifiable Credential",id:"publishing-a-verifiable-credential",level:3},{value:"Revealing a Verifiable Credential",id:"revealing-a-verifiable-credential",level:3},{value:"Unpublishing a Verifiable Credential",id:"unpublishing-a-verifiable-credential",level:3}];function o(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:""}),"\n",(0,t.jsx)(n.p,{children:"The DID Manifest is a public data container that is returned with the DID document data. Users can chose to publish or reveal any attestation they receive. All information in the manifest is publicly viewable."}),"\n",(0,t.jsxs)(n.p,{children:["Example of ",(0,t.jsx)(n.code,{children:"didDocumentData"})," with a manifest :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "manifest": {\n        "did:mdip:test:z3v8Auaf3eZEUqJEu8xu1uUwxK3ZTLLXsfg9U7p6awPzyuD1AAT": {\n            "@context": [\n                "https://www.w3.org/ns/credentials/v2",\n                "https://www.w3.org/ns/credentials/examples/v2"\n            ],\n            "type": [\n                "VerifiableCredential",\n                "did:mdip:test:z3v8AuaeAPf9JMuyYZ1D79D626uUzDQmRPwq4d8oB1Th6ztzAS7"\n            ],\n            "issuer": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY",\n            "validFrom": "2024-03-22T15:06:24.773Z",\n            "validUntil": null,\n            "credentialSubject": {\n                "id": "did:mdip:test:z3v8AuairhLoGZqf6UDKw7zXyBknTvanvSzFHnLpwy8nwa7WLzk"\n            },\n            "credential": null,\n            "signature": {\n                "signer": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY",\n                "signed": "2024-03-22T18:00:19.405Z",\n                "hash": "62f7cb1a31d338d29287f9ce91b4da103391dca88b853ea1b05920c6049ae8ff",\n                "value": "37941a42492a431ceaff91c86de55eb0cd3ed98107a3ce19a76d88511b7fe2bc6fcf298c69e431b048ab0786e9624b647e4d03a4c26031c4c6e2b6882223defe"\n            }\n        }\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"publishing-a-verifiable-credential",children:"Publishing a Verifiable Credential"}),"\n",(0,t.jsx)(n.p,{children:"Publishing a VC to a DID Manifest will make it known that the DID holder has received a particular Verifiable Credential without revealing the credential's values. In this example, we know that Bob has a social-media attestation, but we do not know the details:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ kc add-name bob-twitter did:mdip:test:z3v8Auaf3eZEUqJEu8xu1uUwxK3ZTLLXsfg9U7p6awPzyuD1AAT\nOK Saved\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'$ kc publish-credential bob-twitter\n{\n    "@context": [\n        "https://www.w3.org/ns/credentials/v2",\n        "https://www.w3.org/ns/credentials/examples/v2"\n    ],\n    "type": [\n        "VerifiableCredential",\n        "did:mdip:test:z3v8AuaeAPf9JMuyYZ1D79D626uUzDQmRPwq4d8oB1Th6ztzAS7"\n    ],\n    "issuer": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY",\n    "validFrom": "2024-03-22T15:06:24.773Z",\n    "validUntil": null,\n    "credentialSubject": {\n        "id": "did:mdip:test:z3v8AuairhLoGZqf6UDKw7zXyBknTvanvSzFHnLpwy8nwa7WLzk"\n    },\n    "credential": null,\n    "signature": {\n        "signer": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY",\n        "signed": "2024-03-22T18:00:19.405Z",\n        "hash": "62f7cb1a31d338d29287f9ce91b4da103391dca88b853ea1b05920c6049ae8ff",\n        "value": "37941a42492a431ceaff91c86de55eb0cd3ed98107a3ce19a76d88511b7fe2bc6fcf298c69e431b048ab0786e9624b647e4d03a4c26031c4c6e2b6882223defe"\n    }\n}\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'$ kc resolve-id\n{\n    "@context": "https://w3id.org/did-resolution/v1",\n    "didDocument": {\n        "@context": [\n            "https://www.w3.org/ns/did/v1"\n        ],\n        "id": "did:mdip:test:z3v8AuairhLoGZqf6UDKw7zXyBknTvanvSzFHnLpwy8nwa7WLzk",\n        "verificationMethod": [\n            {\n                "id": "#key-1",\n                "controller": "did:mdip:test:z3v8AuairhLoGZqf6UDKw7zXyBknTvanvSzFHnLpwy8nwa7WLzk",\n                "type": "EcdsaSecp256k1VerificationKey2019",\n                "publicKeyJwk": {\n                    "crv": "secp256k1",\n                    "kty": "EC",\n                    "x": "IGP1mIaBZPh5QYfvrxxR9JzQWa-hsB4J_bwWwFZjOa4",\n                    "y": "wQrOGoP_S5bckp-U8zb2UYxFYM4xLWdIuVZ8c0NRUv4"\n                }\n            }\n        ],\n        "authentication": [\n            "#key-1"\n        ]\n    },\n    "didDocumentMetadata": {\n        "created": "2024-03-22T14:55:27.374Z",\n        "updated": "2024-03-22T18:01:00.220Z"\n    },\n    "didDocumentData": {\n        "manifest": {\n            "did:mdip:test:z3v8Auaf3eZEUqJEu8xu1uUwxK3ZTLLXsfg9U7p6awPzyuD1AAT": {\n                "@context": [\n                    "https://www.w3.org/ns/credentials/v2",\n                    "https://www.w3.org/ns/credentials/examples/v2"\n                ],\n                "type": [\n                    "VerifiableCredential",\n                    "did:mdip:test:z3v8AuaeAPf9JMuyYZ1D79D626uUzDQmRPwq4d8oB1Th6ztzAS7"\n                ],\n                "issuer": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY",\n                "validFrom": "2024-03-22T15:06:24.773Z",\n                "validUntil": null,\n                "credentialSubject": {\n                    "id": "did:mdip:test:z3v8AuairhLoGZqf6UDKw7zXyBknTvanvSzFHnLpwy8nwa7WLzk"\n                },\n                "credential": null,\n                "signature": {\n                    "signer": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY",\n                    "signed": "2024-03-22T18:00:19.405Z",\n                    "hash": "62f7cb1a31d338d29287f9ce91b4da103391dca88b853ea1b05920c6049ae8ff",\n                    "value": "37941a42492a431ceaff91c86de55eb0cd3ed98107a3ce19a76d88511b7fe2bc6fcf298c69e431b048ab0786e9624b647e4d03a4c26031c4c6e2b6882223defe"\n                }\n            }\n        }\n    },\n    "mdip": {\n        "registry": "hyperswarm",\n        "type": "agent",\n        "version": 1\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"revealing-a-verifiable-credential",children:"Revealing a Verifiable Credential"}),"\n",(0,t.jsx)(n.p,{children:"Revealing a VC to a DID Manifest will decrypt and expose the entire VC content to the public:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'$ kc reveal-credential bob-twitter\n{\n    "@context": [\n        "https://www.w3.org/ns/credentials/v2",\n        "https://www.w3.org/ns/credentials/examples/v2"\n    ],\n    "type": [\n        "VerifiableCredential",\n        "did:mdip:test:z3v8AuaeAPf9JMuyYZ1D79D626uUzDQmRPwq4d8oB1Th6ztzAS7"\n    ],\n    "issuer": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY",\n    "validFrom": "2024-03-22T15:06:24.773Z",\n    "validUntil": null,\n    "credentialSubject": {\n        "id": "did:mdip:test:z3v8AuairhLoGZqf6UDKw7zXyBknTvanvSzFHnLpwy8nwa7WLzk"\n    },\n    "credential": {\n        "account": "https://twitter.com/bob",\n        "service": "twitter.com"\n    },\n    "signature": {\n        "signer": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY",\n        "signed": "2024-03-22T18:00:19.405Z",\n        "hash": "62f7cb1a31d338d29287f9ce91b4da103391dca88b853ea1b05920c6049ae8ff",\n        "value": "37941a42492a431ceaff91c86de55eb0cd3ed98107a3ce19a76d88511b7fe2bc6fcf298c69e431b048ab0786e9624b647e4d03a4c26031c4c6e2b6882223defe"\n    }\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"unpublishing-a-verifiable-credential",children:"Unpublishing a Verifiable Credential"}),"\n",(0,t.jsx)(n.p,{children:"At any time, a VC holder can decide to remove VCs published on their DID Manifest."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ kc unpublish-credential bob-twitter\nOK\n"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},8453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>r});var t=a(6540);const i={},d=t.createContext(i);function s(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);