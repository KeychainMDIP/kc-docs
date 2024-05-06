"use strict";(self.webpackChunkkc_docs=self.webpackChunkkc_docs||[]).push([[442],{6368:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>d,metadata:()=>o,toc:()=>c});var i=n(4848),s=n(8453);const d={},r="MDIP DID Scheme",o={id:"DID-scheme/README",title:"MDIP DID Scheme",description:"Abstract",source:"@site/kc/doc/DID-scheme/README.md",sourceDirName:"DID-scheme",slug:"/DID-scheme/",permalink:"/pr-preview/pr-$pr/docs/DID-scheme/",draft:!1,unlisted:!1,editUrl:"https://github.com/keychainmdip/kc-docs/tree/main/packages/create-docusaurus/templates/shared/kc/doc/DID-scheme/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Voting",permalink:"/pr-preview/pr-$pr/docs/CLI-user-manual/voting"}},a={},c=[{value:"Abstract",id:"abstract",level:2},{value:"Introduction",id:"introduction",level:2},{value:"MDIP DID Format",id:"mdip-did-format",level:2},{value:"Example: MDIP DID",id:"example-mdip-did",level:3},{value:"DID Lifecycle",id:"did-lifecycle",level:2},{value:"DID Creation",id:"did-creation",level:2},{value:"Agents",id:"agents",level:3},{value:"Assets",id:"assets",level:3},{value:"DID Revocation",id:"did-revocation",level:2},{value:"DID Resolution",id:"did-resolution",level:2},{value:"DID Recovery",id:"did-recovery",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"mdip-did-scheme",children:"MDIP DID Scheme"}),"\n",(0,i.jsx)(t.h2,{id:"abstract",children:"Abstract"}),"\n",(0,i.jsxs)(t.p,{children:["The MDIP (MultiDimensional Identity Protocol) DID method specification conforms to the requirements specified in the ",(0,i.jsx)(t.a,{href:"https://www.w3.org/TR/did-core/",children:"DID specification"})," currently published by the W3C Credentials Community Group. For more information about DIDs and DID method specifications, please see the ",(0,i.jsx)(t.a,{href:"https://w3c-ccg.github.io/did-primer/",children:"DID Primer"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(t.p,{children:["The MDIP DID method (",(0,i.jsx)(t.code,{children:"did:mdip"}),") is designed to support a P2P identity layer with secure decentralized ",(0,i.jsx)(t.a,{href:"https://www.w3.org/TR/vc-data-model-2.0/",children:"verifiable credentials"}),". MDIP DIDs are used for agents (e.g., users, issuers, verifiers, and MDIP nodes) and assets (e.g., verifiable credentials, verifiable presentations, schemas, challenges, and responses)."]}),"\n",(0,i.jsx)(t.h2,{id:"mdip-did-format",children:"MDIP DID Format"}),"\n",(0,i.jsx)(t.p,{children:"MDIP DIDs have the following format:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'mdip-did        = "did:mdip:" mdip-identifier\n                 [ ";" did-service ] [ "/" did-path ]\n                 [ "?" did-query ] [ "#" did-fragment ]\nmdip-identifier = CID encoded with base58btc\n'})}),"\n",(0,i.jsx)(t.h3,{id:"example-mdip-did",children:"Example: MDIP DID"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"did:mdip:z3v8AuaYnnFwgRFgkQWnYca2wbvcWN8sa94BfnoJtqbphdTREc6"})}),"\n",(0,i.jsx)(t.h2,{id:"did-lifecycle",children:"DID Lifecycle"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(8336).A+"",width:"561",height:"721"})}),"\n",(0,i.jsx)(t.p,{children:"All MDIP DIDs begin life anchored to a CAS (Content-Addressable Storage) such as IPFS. Once created they can be used immediately by any application or service connected to an MDIP node. Subsequent updates to the DID (meaning that a document associated with the DID changes) are registered on a registry such as a blockchain (BTC, ETH, etc) or a decentralized database (e.g. hyperswarm). The registry is specified at DID creation so that nodes can determine which single source of truth to check for updates."}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.em,{children:"key concept of this design"})," is that MDIP DID creation is decentralized through through the CAS, and DID updates are decentralized through the registry specified in the DID creation. The MDIP DID is decentralized for its whole lifecycle, which is a hard requirement of DIDs."]}),"\n",(0,i.jsx)(t.h2,{id:"did-creation",children:"DID Creation"}),"\n",(0,i.jsx)(t.p,{children:"DIDs are anchored to a CAS (e.g. IPFS), prior to any declaration on a registry. This allows DIDs to be created very quickly (less than 10 seconds) and at (virtually) no cost."}),"\n",(0,i.jsxs)(t.p,{children:["MDIP DIDs support two main types of DID Subject: ",(0,i.jsx)(t.strong,{children:"agents"})," and ",(0,i.jsx)(t.strong,{children:"assets"}),". Agents have keys and control assets. Assets do not have keys, and are controlled by a single agent (the owner of the asset). The two types have slightly different creation methods."]}),"\n",(0,i.jsx)(t.h3,{id:"agents",children:"Agents"}),"\n",(0,i.jsx)(t.p,{children:'To create an agent DID, the MDIP client must sign and submit a "create" operation to the MDIP node. This operation will be used to anchor the DID in the CAS.'}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Generate a new private key","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"We recommend deriving a new private key from an Hierarchical Deterministic (HD) wallet (BIP-32)."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Generate a public key from the private key"}),"\n",(0,i.jsx)(t.li,{children:"Convert to JWK (JSON Web Key) format"}),"\n",(0,i.jsxs)(t.li,{children:["Create a operation object with these fields in any order:","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"type"}),'  must be "create"']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"mdip"})," metadata includes:","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"version"}),"  number, e.g. 1"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"type"}),'  must be "agent"']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"registry"}),'  (from a list of valid registries, e.g. "BTC", "hyperswarm", etc.)']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"publicJwk"})," is the public key in JWK format"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"created"})," time in ISO format"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Sign the JSON with the private key corresponding the the public key (this enables the MDIP node to verify that the operation is coming from the owner of the public key)"}),"\n",(0,i.jsxs)(t.li,{children:["Submit the operation to the MDIP node. For example, with a REST API, post the operation to the MDIP node's endpoint to create new DIDs (e.g. ",(0,i.jsx)(t.code,{children:"/api/v1/did/"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "type": "create",\n    "created": "2024-03-21T14:17:00.693Z",\n    "mdip": {\n        "registry": "hyperswarm",\n        "type": "agent",\n        "version": 1\n    },\n    "publicJwk": {\n        "crv": "secp256k1",\n        "kty": "EC",\n        "x": "Mhw_QuIwAqtSC7iGs4a5hTn6o9l3n4e41SVxtwSZHsg",\n        "y": "PHqyl-KJ74BGYL19Ou-iQ7M-Adn9zKy9xX4wzVPWkcs"\n    },\n    "signature": {\n        "hash": "5a2b4280bed5adac087afb0a143b3bcf21c9f140937ed1964eb1106b2f5c4bdf",\n        "signed": "2024-03-21T14:17:00.703Z",\n        "value": "0b087eb5f05cfd3563d56fd1edc2b893b2d27ef096514272f989aabd081d37781a14453e8f36536d391c6539d10f6744b4a06ffbf9c559d9383435e278b71554"\n    }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Upon receiving the operation the MDIP node must:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Verify the signature"}),"\n",(0,i.jsx)(t.li,{children:"Apply JSON canonicalization scheme to the operation."}),"\n",(0,i.jsx)(t.li,{children:"Pin the seed object to the CAS (e.g. IPFS)."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:['The resulting content address (CID for IPFS) in base58btc encoding is used as the MDIP DID suffix. For example the operation above corresponds to CID "z3v8AuaWjjt2tN9HHtQf8Au9ARZ25zzjkmWmkfVvYDaoM3xcnUP" (in base58btc encoding) yielding the MDIP DID ',(0,i.jsx)(t.code,{children:"did:mdip:z3v8AuaWjjt2tN9HHtQf8Au9ARZ25zzjkmWmkfVvYDaoM3xcnUP"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"assets",children:"Assets"}),"\n",(0,i.jsxs)(t.p,{children:["To create an asset DID, the MDIP client must sign and submit a ",(0,i.jsx)(t.code,{children:"create"})," operation to the MDIP node. This operation will be used to anchor the DID in the CAS."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a operation object with these fields in any order:","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"type"}),'  must be "create"']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"mdip"})," metadata includes:","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"version"}),"  number, e.g. 1"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"type"}),'  must be "agent"']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"registry"}),'  (from a list of valid registries, e.g. "BTC", "hyperswarm", etc.)']}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"controller"})," specifies the DID of the owner/controller of the new DID"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"data"})," can contain any data in JSON format, as long as it is not empty"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"created"})," time in ISO format"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Sign the JSON with the private key of the controller"}),"\n",(0,i.jsxs)(t.li,{children:["Submit the operation to the MDIP node. For example, with a REST API, post the operation to the MDIP node's endpoint to create new DIDs (e.g. ",(0,i.jsx)(t.code,{children:"/api/v1/did/"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "type": "create",\n    "created": "2024-03-21T18:47:00.655Z",\n    "mdip": {\n        "version": 1,\n        "type": "asset",\n        "registry": "hyperswarm"\n    },\n    "controller": "did:mdip:test:z3v8AuaaBKfwrt2Y7AAbDaGqLNgyn1BDhP7wUFpEMEngmwYwi17",\n    "data": {\n        "credentials": []\n    },\n    "signature": {\n        "signer": "did:mdip:test:z3v8AuaaBKfwrt2Y7AAbDaGqLNgyn1BDhP7wUFpEMEngmwYwi17",\n        "signed": "2024-03-21T18:47:00.729Z",\n        "hash": "3810490d72e7c912d3213d5d96b4f9c184b347038b385aadc568a6624810b0ef",\n        "value": "e80a12d81b9be8a63440203dccb90e954d21b91e862b3fe72d0f306877292b9a5f8e00881256132225ab39f2cbe9d47012fb4ac32882ac4bfe3bbb49f80efec4"\n    }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Upon receiving the operation the MDIP node must:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Verify the signature is valid for the specified controller."}),"\n",(0,i.jsx)(t.li,{children:"Apply JSON canonicalization scheme to the operation object."}),"\n",(0,i.jsx)(t.li,{children:"Pin the seed object to the CAS (e.g. IPFS)."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:['For example, the operation above that specifies an empty Credential asset corresponds to CID "z3v8AuahaEdEZrY9BGfu4vntYjQECBvDHqCG3mPAfEbn6No7AHh" yielding a DID of ',(0,i.jsx)(t.code,{children:"did:mdip:z3v8AuahaEdEZrY9BGfu4vntYjQECBvDHqCG3mPAfEbn6No7AHh"}),"."]}),"\n",(0,i.jsx)(t.h1,{id:"did-update",children:"DID Update"}),"\n",(0,i.jsx)(t.p,{children:"A DID Update is a change to any of the documents associated with the DID. To initiate an update the MDIP client must sign a operation that includes the following fields:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a operation object with these fields in any order:","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"type"}),' must be set to "update"']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"did"})," specifies the DID"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"doc"})," is set to the new version of the document set, which must include:","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"didDocument"})," the main document"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"didDocumentMetadata"})," the document's metadata"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"didDocumentData"})," the document's data"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"mdip"})," the MDIP protocol spec"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"prev"})," the sha256 hash of the canonicalized JSON of the previous version's doc"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Sign the JSON with the private key of the controller of the DID"}),"\n",(0,i.jsxs)(t.li,{children:["Submit the operation to the MDIP node. For example, with a REST API, post the operation to the MDIP node's endpoint to update DIDs (e.g. ",(0,i.jsx)(t.code,{children:"/api/v1/did/"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"It is recommended the client fetches the current version of the document and metadata, makes changes to it, then submit the new version in an update operation in order to preserve the fields that shouldn't change."}),"\n",(0,i.jsx)(t.p,{children:"Example update to rotate keys for an agent DID:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "type": "update",\n    "did": "did:mdip:test:z3v8AuadvRQErtPapNx3ncdUJpPc5dBDGTXXiRxsaH2N8Lj2KzL",\n    "doc": {\n        "@context": "https://w3id.org/did-resolution/v1",\n        "didDocument": {\n            "@context": [\n                "https://www.w3.org/ns/did/v1"\n            ],\n            "id": "did:mdip:test:z3v8AuadvRQErtPapNx3ncdUJpPc5dBDGTXXiRxsaH2N8Lj2KzL",\n            "verificationMethod": [\n                {\n                    "id": "#key-2",\n                    "controller": "did:mdip:test:z3v8AuadvRQErtPapNx3ncdUJpPc5dBDGTXXiRxsaH2N8Lj2KzL",\n                    "type": "EcdsaSecp256k1VerificationKey2019",\n                    "publicKeyJwk": {\n                        "kty": "EC",\n                        "crv": "secp256k1",\n                        "x": "CkHUpYCLpO-ITepMH8NyR1BinjtC8GEjPZmLbhhvdYQ",\n                        "y": "7tbEsQCgPhMx4vgP7anOZEscV0ruXyaEkyKTXaIMniQ"\n                    }\n                }\n            ],\n            "authentication": [\n                "#key-2"\n            ]\n        },\n        "didDocumentMetadata": {\n            "created": "2024-03-25T14:57:20.868Z"\n        },\n        "didDocumentData": {},\n        "mdip": {\n            "registry": "hyperswarm",\n            "type": "agent",\n            "version": 1\n        }\n    },\n    "prev": "fb794984f44fe869a75fade8a7bf31ce0f3f46a3eaded4e286769c62f5d9a9ff",\n    "signature": {\n        "signer": "did:mdip:test:z3v8AuadvRQErtPapNx3ncdUJpPc5dBDGTXXiRxsaH2N8Lj2KzL",\n        "signed": "2024-03-25T14:57:26.343Z",\n        "hash": "575612ed3195eef4e1b7d43b3e40f893d834176321fee8ff6ffe51a79647d912",\n        "value": "87571672a51e3558ed9a9d4ef5fcad4dafbf22ee881735e579305b3ebb404a1d0891e3b45c8ad5c11c95e3ae76ca6f2328c87313d58fe80713c0887294d9078a"\n    }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Upon receiving the operation the MDIP node must:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Verify the signature is valid for the controller of the DID."}),"\n",(0,i.jsx)(t.li,{children:"Verify the previous hash."}),"\n",(0,i.jsx)(t.li,{children:"Record the operation on the DID specified registry (or forward the request to a trusted node that supports the specified registry)."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"For registries such as BTC with non-trivial transaction costs, it is expected that update operations will be placed in a queue, then registered periodically in a batch in order to balance costs and latency of updates. If the registry has trivial transaction costs, the update operation may be distributed individually and immediately. MDIP defers this tradeoff between cost, speed, and security to the node operators."}),"\n",(0,i.jsx)(t.h2,{id:"did-revocation",children:"DID Revocation"}),"\n",(0,i.jsxs)(t.p,{children:["Revoking a DID is a special kind of Update that results in the termination of the DID. Revoked DIDs cannot be updated because they have no current controller, therefore they cannot be recovered once revoked. Revoked DIDs can be resolved without error, but resolvers will return a document set with the ",(0,i.jsx)(t.code,{children:"didMetada.deactivated"})," property set to ",(0,i.jsx)(t.code,{children:"true"}),". The ",(0,i.jsx)(t.code,{children:"didDocument"})," and ",(0,i.jsx)(t.code,{children:"didDocumentData"})," properties will be set to empty."]}),"\n",(0,i.jsxs)(t.p,{children:["To revoke a DID, the MDIP client must sign and submit a ",(0,i.jsx)(t.code,{children:"delete"})," operation to the MDIP node."]}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Create a operation object with these fields in any order:","\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"type"}),'  must be "delete"']}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"did"})," specifies the DID to be deleted"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"prev"})," the sha256 hash of the canonicalized JSON of the previous version's doc"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.li,{children:"Sign the JSON with the private key of the controller of the DID"}),"\n",(0,i.jsxs)(t.li,{children:["Submit the operation to the MDIP node. For example, with a REST API, post the operation using the ",(0,i.jsx)(t.code,{children:"DELETE"})," method to the MDIP node's endpoint to update DIDs (e.g. ",(0,i.jsx)(t.code,{children:"/api/v1/did/"}),")"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Example deletion operation:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "type": "delete",\n    "did": "did:mdip:z3v8AuagQPwk6WhAjauVgkFCBJfHJBVBmNAYEhDNMBEXEmWQrHr",\n    "prev": "9f7f0a67b729248c966bb8945cb80320713aa1de42021c88ca849a4ca029f8d7",\n    "signature": {\n        "signer": "did:mdip:z3v8Auad6fdVkSZE4khWmMwgTjpoMtv82fiT7c56ivNBdjzeMS2",\n        "created": "2024-02-05T20:00:54.171Z",\n        "hash": "ff71d0966ee87d827bf3674cb1511c845e18f010186326b3898f336b30e94662",\n        "value": "92f95f431729858c79ec4c10824e5aa996b7ae5277ec5143af43baf55c7c8d2f73931be5be46da0a7795b5c3b773041a91ccc2755857ddfa34758993428e7ad1"\n    }\n}\n'})}),"\n",(0,i.jsx)(t.p,{children:"Upon receiving the operation the MDIP node must:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Verify the signature is valid for the controller of the DID."}),"\n",(0,i.jsx)(t.li,{children:"Verify the previous hash."}),"\n",(0,i.jsx)(t.li,{children:"Record the operation on the DID specified registry (or forward the request to a trusted node that supports the specified registry)."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"After revocation is confirmed on the DID's registry, resolving the DID will result in response like this:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n    "@context": "https://w3id.org/did-resolution/v1",\n    "didDocument": {},\n    "didDocumentMetadata": {\n        "created": "2024-03-21T18:47:00.655Z",\n        "deactivated": true,\n        "updated": "2024-03-21T18:55:11.530Z"\n    },\n    "didDocumentData": {},\n    "mdip": {\n        "registry": "hyperswarm",\n        "type": "asset",\n        "version": 1\n    }\n}\n'})}),"\n",(0,i.jsxs)(t.p,{children:["The metadata has a deactivated field set to true to conform to the ",(0,i.jsx)(t.a,{href:"https://www.w3.org/TR/did-core/#did-document-metadata",children:"W3C specification"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"did-resolution",children:"DID Resolution"}),"\n",(0,i.jsx)(t.p,{children:"Resolution is the operation of responding to a DID with a DID Document. If you think of the DID as a secure reference or pointer, then resolution is equivalent to dereferencing."}),"\n",(0,i.jsx)(t.p,{children:"Given a DID and an optional resolution time, the resolver infers the CAS from the format of the suffix, then retrieves the associated document seed, parsing it as plaintext JSON.\nIf CAS cannot be inferred, or the data cannot be retrieved, then the resolver should delegate the resolution request to a fallback node.\nOtherwise, if the data can be retrieved but is not a valid MDIP seed document, an error is returned immediately.\nOnce returned and validated, the resolver then evaluates the JSON to determine whether it is a known type (an agent or an asset). If it is not a known type an error is returned."}),"\n",(0,i.jsx)(t.p,{children:"If we get this far, the resolver then looks up the DID's specified registry in its document seed. If the node does not support the registry (meaning the node is not actively monitoring the registry for updates), then it must forward the resolution request to a trusted node that does support the registry. If the node is not configured with any trusted nodes for the specified registry, then it must forward the request to a trusted fallback node to handle unknown registries."}),"\n",(0,i.jsxs)(t.p,{children:["If the node does support the specified registry, the resolver retrieves all update records from its local database that are keyed to the DID, and ordered by each update's ordinal key. The ordinal key is a value or set of values that can be used to sort the updates into chronological order. For example, the ordinal key for the BTC registry will be a tuple ",(0,i.jsx)(t.code,{children:"{block index, transaction index, batch index}"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The document is then generated by creating an initial version of the document from the document seed, then applying valid updates. In the case of an agent DID, a new DID document is created that includes the public key and the DID as the initial controller. In the case of the asset, a new DID document is created that references the controller and includes the asset data in the document metadata."}),"\n",(0,i.jsx)(t.p,{children:"If there are any update operations, each one is validated by:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"verifying that it is signed by the controller of the DID at the time the update was created,"}),"\n",(0,i.jsx)(t.li,{children:"verifying that the previous version hash in the operation is identical to the hash of the document set that it is updating,"}),"\n",(0,i.jsx)(t.li,{children:"verifying the new version is a valid DID document (schema validation)."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"If invalid, the update is ignored, otherwise it is applied to the previous document in sequence up to the specified resolution time (if specified) or to the end of the sequence (if no resolution time is specified). The resulting DID document is returned to the requestor."}),"\n",(0,i.jsx)(t.p,{children:"In pseudo-code:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"function resolveDid(did, asOfTime=now):\n    get suffix from did\n    use suffix as content address to retrieve document seed from CAS\n    if fail to retrieve the document seed\n        forward request to a trusted node\n        return\n    look up did's registry in its document seed\n    if did's registry is not supported by this node\n        forward request to a trusted node\n        return\n    generate initial document from anchor\n    retrieve all update operations from did's registry\n    for all updates until asOfTime:\n        if signature is valid and update is valid:\n            apply update to DID document\n    return DID document\n"})}),"\n",(0,i.jsx)(t.h2,{id:"did-recovery",children:"DID Recovery"}),"\n",(0,i.jsx)(t.p,{children:"For security reasons, MDIP provides no support for storing private keys. We recommend that MDIP clients use BIP-39 to generate a master seed phrase consisting of at least 12 words, and that users safely store the recovery phrase."}),"\n",(0,i.jsx)(t.p,{children:'If a user loses a device that contains their wallet, they should be able to install the wallet software on a new device, initialize it with their seed phrase and recover their DID along with all their attestations. This implies that a "vault" of the attestations should be stored with the agent DID document, though it should be encrypted with the DID\'s current private key for privacy.'})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8336:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/did-lifecycle-c7448c5cc8cb3632c1c358de2fd4d85c.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(6540);const s={},d=i.createContext(s);function r(e){const t=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(d.Provider,{value:t},e.children)}}}]);