"use strict";(self.webpackChunkkc_docs=self.webpackChunkkc_docs||[]).push([[635],{6884:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var i=t(4848),a=t(8453);const d={title:"Working with Credentials",sidebar_label:"Credentials",slug:"credentials"},s=void 0,r={id:"CLI-user-manual/credentials",title:"Working with Credentials",description:"The credential operations below meet the specifications defined in W3C VC Data Model.",source:"@site/kc/doc/CLI-user-manual/05-credentials.md",sourceDirName:"CLI-user-manual",slug:"/CLI-user-manual/credentials",permalink:"/docs/CLI-user-manual/credentials",draft:!1,unlisted:!1,editUrl:"https://github.com/keychainmdip/kc-docs/tree/main/packages/create-docusaurus/templates/shared/kc/doc/CLI-user-manual/05-credentials.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Working with Credentials",sidebar_label:"Credentials",slug:"credentials"},sidebar:"tutorialSidebar",previous:{title:"DIDs",permalink:"/docs/CLI-user-manual/dids"},next:{title:"DID Manifest",permalink:"/docs/CLI-user-manual/manifests"}},c={},l=[{value:"What is a Credential?",id:"what-is-a-credential",level:2},{value:"What is a Verifiable Credential?",id:"what-is-a-verifiable-credential",level:2},{value:"MDIP Verifiable Credential Basic Workflow",id:"mdip-verifiable-credential-basic-workflow",level:2},{value:"Steps to Create a VC",id:"steps-to-create-a-vc",level:3},{value:"Preparing or Selecting a Credential Schema File",id:"preparing-or-selecting-a-credential-schema-file",level:2},{value:"Creating a Credential DID",id:"creating-a-credential-did",level:2},{value:"Binding the Credential",id:"binding-the-credential",level:2},{value:"Editing the Credential",id:"editing-the-credential",level:2},{value:"Attesting a credential",id:"attesting-a-credential",level:2},{value:"Verifying a credential",id:"verifying-a-credential",level:2},{value:"Accepting a credential",id:"accepting-a-credential",level:2},{value:"Revoking a credential",id:"revoking-a-credential",level:2}];function o(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The credential operations below meet the specifications defined in ",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/vc-data-model/",children:"W3C VC Data Model"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"what-is-a-credential",children:"What is a Credential?"}),"\n",(0,i.jsx)(n.p,{children:"From W3C:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Credentials are a part of our daily lives; driver's licenses are used to assert that we are capable of operating a motor vehicle, university degrees can be used to assert our level of education, and government-issued passports enable us to travel between countries. These credentials provide benefits to us when used in the physical world, but their use on the Web continues to be elusive."}),"\n",(0,i.jsxs)(n.p,{children:["- ",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/vc-data-model/#abstract",children:"Source"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"what-is-a-verifiable-credential",children:"What is a Verifiable Credential?"}),"\n",(0,i.jsx)(n.p,{children:"From W3C:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"A verifiable credential (VC) can represent all of the same information that a physical credential represents. The addition of technologies, such as digital signatures, makes verifiable credentials more tamper-evident and more trustworthy than their physical counterparts."}),"\n",(0,i.jsxs)(n.p,{children:["- ",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/vc-data-model/#what-is-a-verifiable-credential",children:"Source"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"mdip-verifiable-credential-basic-workflow",children:"MDIP Verifiable Credential Basic Workflow"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:t(3739).A+"",width:"1057",height:"600"})}),"\n",(0,i.jsx)(n.p,{children:"The basic workflow involves three actors: Alice (the Issuer), Bob (the Holder), and Carol (the Verifier). In this scenario, Bob wishes to gain access to some resource controlled by Carol. Carol will grant Bob access only if Bob can prove that he owns a particular credential issued by Alice."}),"\n",(0,i.jsx)(n.h3,{id:"steps-to-create-a-vc",children:"Steps to Create a VC"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The Issuer (Alice) creates a Credential. The Credential is like a type or a class; it describes the Credential, and specifies a schema. Each Verified Credential is an instance of a Credential."}),"\n",(0,i.jsx)(n.li,{children:"The Issuer binds a Credential to a Holder"}),"\n",(0,i.jsx)(n.li,{children:"The Issuer attest a Credential, creating a Verifiable Credential (VC),  by signing and encrypting a Bound Credential."}),"\n",(0,i.jsx)(n.li,{children:"The Holder (Bob) accepts the VC (adding it to their wallet for future use)."}),"\n",(0,i.jsx)(n.li,{children:"The Verifier (Carol) creates a Challenge. A Challenge is a list of Credentials and trusted Issuers."}),"\n",(0,i.jsx)(n.li,{children:"The Holder creates a Response to the Challenge. A Response contains a list of Verified Presentations that correspond to the Credentials and trusted Issuers listed in the Challenge. If the User's wallet contains the right Verified Credentials, then it will be possible to create a valid Response to the Challenge. The Response is encrypted for the Verifier."}),"\n",(0,i.jsx)(n.li,{children:"The Verifier validates the Response. The Response is verified by checking that it contains a Verified Presentation for every Credential in the Challenge,  that the VP is issued by a trusted Issuer, and that the VC corresponding the VP has not been revoked. If everything checks out the Response is accepted and the Holder is granted authorization."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"preparing-or-selecting-a-credential-schema-file",children:"Preparing or Selecting a Credential Schema File"}),"\n",(0,i.jsx)(n.p,{children:"JSON Schemas are ubiquitous. The schema defines the content of a future credential. Standardized schemas (ex: schema.org) for common credentials (ex: address, membership, etc) should be used to facilitate data interoperability."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'$ cat data/schema/social-media.json\n{\n    "$schema": "http://json-schema.org/draft-07/schema#",\n    "type": "object",\n    "properties": {\n        "service": {\n            "type": "string"\n        },\n        "account": {\n            "type": "string",\n            "format": "uri"\n        }\n    },\n    "required": [\n        "service",\n        "account"\n    ]\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"creating-a-credential-did",children:"Creating a Credential DID"}),"\n",(0,i.jsx)(n.p,{children:"MDIP-compatible credentials are created using a JSON schema file as a template. The schema file will be registered with a Gatekeeper to create the Credential and receive its associated DID."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ kc create-credential data/schema/social-media.json social-media\ndid:mdip:test:z3v8AuaeAPf9JMuyYZ1D79D626uUzDQmRPwq4d8oB1Th6ztzAS7\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'$ kc list-names\n{\n    "social-media": "did:mdip:test:z3v8AuaeAPf9JMuyYZ1D79D626uUzDQmRPwq4d8oB1Th6ztzAS7"\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'$ kc resolve-did social-media\n{\n    "@context": "https://w3id.org/did-resolution/v1",\n    "didDocument": {\n        "@context": [\n            "https://www.w3.org/ns/did/v1"\n        ],\n        "id": "did:mdip:test:z3v8AuaeAPf9JMuyYZ1D79D626uUzDQmRPwq4d8oB1Th6ztzAS7",\n        "controller": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY"\n    },\n    "didDocumentMetadata": {\n        "created": "2024-03-22T15:00:31.047Z"\n    },\n    "didDocumentData": {\n        "$schema": "http://json-schema.org/draft-07/schema#",\n        "properties": {\n            "account": {\n                "format": "uri",\n                "type": "string"\n            },\n            "service": {\n                "type": "string"\n            }\n        },\n        "required": [\n            "service",\n            "account"\n        ],\n        "type": "object"\n    },\n    "mdip": {\n        "registry": "hyperswarm",\n        "type": "asset",\n        "version": 1\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"The command above created a DID document with the schema file provided. For convenience, the user's wallet now contains a named alias (social-media) to the new credential's DID."}),"\n",(0,i.jsx)(n.h2,{id:"binding-the-credential",children:"Binding the Credential"}),"\n",(0,i.jsx)(n.p,{children:"The Credential DID must now be bound to the Agent DID who is to become the Subject of the new credential. The binding process will generate a credential in JSON form that will be pre-populated with the DIDs of subject, issuer and credential type."}),"\n",(0,i.jsxs)(n.p,{children:["In the command below, both ",(0,i.jsx)(n.code,{children:"social-media"})," and ",(0,i.jsx)(n.code,{children:"Bob"}),"  are resolved to their respective DIDs using the named alias and identity names from the user's private wallet:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'$ kc bind-credential social-media Bob\n{\n    "@context": [\n        "https://www.w3.org/ns/credentials/v2",\n        "https://www.w3.org/ns/credentials/examples/v2"\n    ],\n    "type": [\n        "VerifiableCredential",\n        "did:mdip:test:z3v8AuaeAPf9JMuyYZ1D79D626uUzDQmRPwq4d8oB1Th6ztzAS7"\n    ],\n    "issuer": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY",\n    "validFrom": "2024-03-22T15:04:33.684Z",\n    "validUntil": null,\n    "credentialSubject": {\n        "id": "did:mdip:test:z3v8AuairhLoGZqf6UDKw7zXyBknTvanvSzFHnLpwy8nwa7WLzk"\n    },\n    "credential": {\n        "account": "http://yNtjneCOyzLGUNtiAK.wnarGe6zodO-cGG47CGWl66-kvLbKVHCrFQPFy-ihIYfNlEuc",\n        "service": "in sit aliquip"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This JSON Bound Credential does not yet contain user-specific information other than the DID. The binding process pre-filled the required fields (account and service)with dummy data to be replaced in next step."}),"\n",(0,i.jsx)(n.h2,{id:"editing-the-credential",children:"Editing the Credential"}),"\n",(0,i.jsx)(n.p,{children:"The bound credential must be populated with holder-specific information. This step will typically be automated in most deployments. In the case of our social media schema, we must populate a service field with the name of an online social media provider, and we must populate the account field with a URL to the holder's specific social media account."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ kc bind-credential social-media Bob > bob-twitter.json\n(output sent to the bob-twitter.json file)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Edit the ",(0,i.jsx)(n.code,{children:"bob-twitter.json"})," file to populate the ",(0,i.jsx)(n.code,{children:"credential.account"})," and ",(0,i.jsx)(n.code,{children:"credential.service"})," fields with information that is pertinent with the subject of the credential:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:'$ cat bob-twitter.json\n{\n    "@context": [\n        "`https://`www.`w3.org`/ns/credentials/v2",\n        "https://www.w3.org/ns/credentials/examples/v2"\n    ],\n    "type": [\n        "VerifiableCredential",\n        "did:mdip:test:z3v8AuaeAPf9JMuyYZ1D79D626uUzDQmRPwq4d8oB1Th6ztzAS7"\n    ],\n    "issuer": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY",\n    "validFrom": "2024-03-22T15:06:24.773Z",\n    "validUntil": null,\n    "credentialSubject": {\n        "id": "did:mdip:test:z3v8AuairhLoGZqf6UDKw7zXyBknTvanvSzFHnLpwy8nwa7WLzk"\n    },\n    "credential": {\n        "account": "https://twitter.com/bob",\n        "service": "twitter.com"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"attesting-a-credential",children:"Attesting a credential"}),"\n",(0,i.jsx)(n.p,{children:"The credential, bound and populated with the subject's information, must now be signed by the issuer and encrypted to the subject's keys:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ kc attest-credential bob-twitter.json\ndid:mdip:test:z3v8AuaZAWJuERtD5CwDu2mNpLHjJ6imdNGTwdZpfKY6FK5ASk2\n"})}),"\n",(0,i.jsx)(n.p,{children:"The issuer (Alice) should now send the VC's DID to the subject (Bob)."}),"\n",(0,i.jsx)(n.h2,{id:"verifying-a-credential",children:"Verifying a credential"}),"\n",(0,i.jsx)(n.p,{children:"Only the issuer and holder of a VC can verify it since it is encrypted. When Bob receives the credential from Alice, he can view its contents before accepting it:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'$ kc decrypt-json did:mdip:test:z3v8AuaZAWJuERtD5CwDu2mNpLHjJ6imdNGTwdZpfKY6FK5ASk2\n{\n    "@context": [\n        "https://www.w3.org/ns/credentials/v2",\n        "https://www.w3.org/ns/credentials/examples/v2"\n    ],\n    "type": [\n        "VerifiableCredential",\n        "did:mdip:test:z3v8AuaeAPf9JMuyYZ1D79D626uUzDQmRPwq4d8oB1Th6ztzAS7"\n    ],\n    "issuer": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY",\n    "validFrom": "2024-03-22T15:06:24.773Z",\n    "validUntil": null,\n    "credentialSubject": {\n        "id": "did:mdip:test:z3v8AuairhLoGZqf6UDKw7zXyBknTvanvSzFHnLpwy8nwa7WLzk"\n    },\n    "credential": {\n        "account": "https://twitter.com/bob",\n        "service": "twitter.com"\n    },\n    "signature": {\n        "signer": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY",\n        "signed": "2024-03-22T15:09:02.994Z",\n        "hash": "62f7cb1a31d338d29287f9ce91b4da103391dca88b853ea1b05920c6049ae8ff",\n        "value": "37941a42492a431ceaff91c86de55eb0cd3ed98107a3ce19a76d88511b7fe2bc6fcf298c69e431b048ab0786e9624b647e4d03a4c26031c4c6e2b6882223defe"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"accepting-a-credential",children:"Accepting a credential"}),"\n",(0,i.jsx)(n.p,{children:"Accepting a credential adds the DID to the user's local wallet:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ kc accept-credential did:mdip:test:z3v8AuaZAWJuERtD5CwDu2mNpLHjJ6imdNGTwdZpfKY6FK5ASk2\nOK saved\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'$ kc show-wallet\n{\n    "seed": {\n        "mnemonic": "MLPxAgU1ym_v_YR2Q6-nY47L8xxMqbJqG_NzRNBh3_MHcZ4QQA2x3DI4fSAG2g-XHC3M_EGtmqY6NhVpsC9yKysFYQmcqjm7cAknpJajZYCVlVs7hJPRLdOqkpy4eotTVblgZdYsYtcgbU9kmYc",\n        "hdkey": {\n            "xpriv": "xprv9s21ZrQH143K2x2kGfQ7tgaVHZYQkQVQKbuHgQ4wG7qjfsBoMQD35Ly6rupdEDED1ZBWKtRGWnjwcf9Wxbyvwn4idCPe1kayCrBoLAp8Hvb",\n            "xpub": "xpub661MyMwAqRbcFS7DNgw8FpXDqbNu9sDFgpptUnUYpTNiYfWwtwXHd9HaiD1pEfLtMGVBKpCR9D6Vtriqkv7co4W72stnzpLdxPRmuLWJUHS"\n        }\n    },\n    "counter": 3,\n    "ids": {\n        "Alice": {\n            "did": "did:mdip:test:z3v8AuabRm9DaiakqbwFPgsLd6vSYBQtdj7poQFGYBgsZCfqTvY",\n            "account": 0,\n            "index": 1,\n            "owned": [\n                "did:mdip:test:z3v8AuaeAPf9JMuyYZ1D79D626uUzDQmRPwq4d8oB1Th6ztzAS7",\n                "did:mdip:test:z3v8AuaZAWJuERtD5CwDu2mNpLHjJ6imdNGTwdZpfKY6FK5ASk2"\n            ]\n        },\n        "Bob": {\n            "did": "did:mdip:test:z3v8AuairhLoGZqf6UDKw7zXyBknTvanvSzFHnLpwy8nwa7WLzk",\n            "account": 2,\n            "index": 0,\n            "held": [\n                "did:mdip:test:z3v8AuaZAWJuERtD5CwDu2mNpLHjJ6imdNGTwdZpfKY6FK5ASk2"\n            ]\n        }\n    },\n    "current": "Bob",\n    "names": {\n        "social-media": "did:mdip:test:z3v8AuaeAPf9JMuyYZ1D79D626uUzDQmRPwq4d8oB1Th6ztzAS7"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"revoking-a-credential",children:"Revoking a credential"}),"\n",(0,i.jsxs)(n.p,{children:["The issuer of a credential can revoke their attestation at any time. This will blank out the VC's credential content data and set the ",(0,i.jsx)(n.code,{children:"didDocumentMetadata.deactivated"})," property to true."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ kc revoke-credential did:mdip:test:z3v8AuaZAWJuERtD5CwDu2mNpLHjJ6imdNGTwdZpfKY6FK5ASk2\nOK revoked\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'$ kc resolve-did did:mdip:test:z3v8AuaZAWJuERtD5CwDu2mNpLHjJ6imdNGTwdZpfKY6FK5ASk2\n{\n    "@context": "https://w3id.org/did-resolution/v1",\n    "didDocument": {},\n    "didDocumentMetadata": {\n        "created": "2024-03-22T15:09:03.056Z",\n        "deactivated": true,\n        "updated": "2024-03-22T15:17:53.368Z"\n    },\n    "didDocumentData": {},\n    "mdip": {\n        "registry": "hyperswarm",\n        "type": "asset",\n        "version": 1\n    }\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},3739:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/workflow-4dc3dd48c4bd679aa0d7a577cc8f9eb1.png"},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const a={},d=i.createContext(a);function s(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);