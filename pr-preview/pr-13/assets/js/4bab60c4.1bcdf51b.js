"use strict";(self.webpackChunkkc_docs=self.webpackChunkkc_docs||[]).push([[31],{9241:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>o});var i=t(4848),r=t(8453);const s={title:"Working with Encryption",sidebar_label:"Encryption",slug:"encryption"},d=void 0,a={id:"CLI-user-manual/encryption",title:"Working with Encryption",description:"What is encryption?",source:"@site/kc/doc/CLI-user-manual/09-encryption.md",sourceDirName:"CLI-user-manual",slug:"/CLI-user-manual/encryption",permalink:"/pr-preview/pr-$pr/docs/CLI-user-manual/encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/keychainmdip/kc-docs/tree/main/packages/create-docusaurus/templates/shared/kc/doc/CLI-user-manual/09-encryption.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Working with Encryption",sidebar_label:"Encryption",slug:"encryption"},sidebar:"tutorialSidebar",previous:{title:"Aliased Names",permalink:"/pr-preview/pr-$pr/docs/CLI-user-manual/aliased-names"},next:{title:"Voting",permalink:"/pr-preview/pr-$pr/docs/CLI-user-manual/voting"}},c={},o=[{value:"What is encryption?",id:"what-is-encryption",level:2},{value:"Encrypting a file",id:"encrypting-a-file",level:2},{value:"Encrypting a message",id:"encrypting-a-message",level:2},{value:"Decrypting a message or a file",id:"decrypting-a-message-or-a-file",level:2},{value:"Decrypting JSON from a VC",id:"decrypting-json-from-a-vc",level:2}];function p(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"what-is-encryption",children:"What is encryption?"}),"\n",(0,i.jsx)(n.p,{children:"Encryption is a way to scramble data so that only authorized parties can unscramble it. All data communicated between peers is encrypted such that only the specific agents DIDs involved in the MDIP operation can unscramble it. Each agent DID has its own unique encryption key-pairs derived from the wallet's HD keys."}),"\n",(0,i.jsx)(n.h2,{id:"encrypting-a-file",children:"Encrypting a file"}),"\n",(0,i.jsx)(n.p,{children:"The MDIP CLI can be used to encrypt a file so that it only can be decrypted by the user controlling a specific agent DID keys:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ echo 'this is a secret message' > tmp/secret.txt\n$ kc encrypt-file tmp/secret.txt david\ndid:mdip:z3v8AuadZVYKXq9oyoWmCgqGREsvMxCKDWxwLHNw3tHpfDyrNr3\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The DID returned by the ",(0,i.jsx)(n.code,{children:"encrypt-file"}),' function can only be decrypted by the user controlling "david"\'s agent DID keys:']}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'$ kc resolve-did did:mdip:z3v8AuadZVYKXq9oyoWmCgqGREsvMxCKDWxwLHNw3tHpfDyrNr3\n{\n    "@context": "https://w3id.org/did-resolution/v1",\n    "didDocument": {\n        "@context": [\n            "https://www.w3.org/ns/did/v1"\n        ],\n        "id": "did:mdip:z3v8AuacNPvBNSN8o1LgJxSD9jZVQBkre8BfHdrPgSugb7zuhqs",\n        "controller": "did:mdip:z3v8AuagsGQwffFd2oVhkdcTWRBi2ps5FdRAJD4jzEVMszkYBCj"\n    },\n    "didDocumentMetadata": {\n        "created": "2024-03-14T19:39:55.374Z",\n        "mdip": {\n            "registry": "hyperswarm",\n            "type": "asset",\n            "version": 1\n        },\n        "data": {\n            "cipher_hash": "b618bf73a5a421ff1ab89cb0a6dd76d296915f8b17f8f899bdbc42ee68906cd6",\n            "cipher_receiver": "UsCHFkoWeKbmnPC6rL5K55O2zewCehy9WHGFOuxE_nYZrIpxwn4biSbkqhMO_7iFRWFM7Kv_R78SQOO_GROpF_0ttlQYOg",\n            "cipher_sender": "fIhBsmICMqN-2nW2FQ2fk-2-DrvQ0EfPyGRa6YUoEywDJdzEtyAW4PBiYnwrgomA0oC5Ox5SeTtCon0ps7baqvHDFDr3aw",\n            "created": "2024-03-14T19:39:55.374Z",\n            "sender": "did:mdip:z3v8AuagsGQwffFd2oVhkdcTWRBi2ps5FdRAJD4jzEVMszkYBCj"\n        }\n    }\n}\n'})}),"\n",(0,i.jsx)(n.h2,{id:"encrypting-a-message",children:"Encrypting a message"}),"\n",(0,i.jsx)(n.p,{children:"The MDIP CLI can be used to encrypt a message that can only be decrypted by the targeted DID:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ kc encrypt-msg 'this is another secret message' david\ndid:mdip:z3v8AuacNPvBNSN8o1LgJxSD9jZVQBkre8BfHdrPgSugb7zuhqs\n"})}),"\n",(0,i.jsx)(n.h2,{id:"decrypting-a-message-or-a-file",children:"Decrypting a message or a file"}),"\n",(0,i.jsx)(n.p,{children:"Recipients of MDIP encrypted messages or files can use the command below to decrypt the received content:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"$ kc decrypt-did did:mdip:z3v8AuacNPvBNSN8o1LgJxSD9jZVQBkre8BfHdrPgSugb7zuhqs\nthis is another secret message\n"})}),"\n",(0,i.jsx)(n.h2,{id:"decrypting-json-from-a-vc",children:"Decrypting JSON from a VC"}),"\n",(0,i.jsx)(n.p,{children:"Some MDIP documents such as VCs are encrypted JSON. This command  combines decrypting with parsing as JSON:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'$ kc decrypt-json charlie-homepage\n{\n    "@context": [\n        "https://www.w3.org/ns/credentials/v2",\n        "https://www.w3.org/ns/credentials/examples/v2"\n    ],\n    "type": [\n        "VerifiableCredential",\n        "did:mdip:z3v8AuahM2jN3QRaQ5ZWTmzje9HoNdikuAyNjsGfunGfLCGj87J"\n    ],\n    "issuer": "did:mdip:z3v8AuagsGQwffFd2oVhkdcTWRBi2ps5FdRAJD4jzEVMszkYBCj",\n    "validFrom": "2024-03-13T20:18:13.290Z",\n    "validUntil": null,\n    "credentialSubject": {\n        "id": "did:mdip:z3v8AuagsGQwffFd2oVhkdcTWRBi2ps5FdRAJD4jzEVMszkYBCj"\n    },\n    "credential": {\n        "account": "https://charliehebdo.fr/",\n        "service": "homepage"\n    },\n    "signature": {\n        "signer": "did:mdip:z3v8AuagsGQwffFd2oVhkdcTWRBi2ps5FdRAJD4jzEVMszkYBCj",\n        "signed": "2024-03-13T21:01:15.922Z",\n        "hash": "da5837c59a2a30a0235668ba8d472dcfc10221a0f01d1d2c9e265ff13436e036",\n        "value": "861af32e15e961853b1e84543635249a5f89f22f9360293c05be3a84b53724a934d4e5fc7c6901f503e3df72cb653efa76e8f565dca5c07c7fc9437c95d4355f"\n    }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:'Only the MDIP agent DID user with the necessary wallet key-pairs can decrypt the VC "charlie-homepage". Anyone else on the network only sees encrypted content:'}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'$ kc resolve-did did:mdip:z3v8AuaamvoV6JnvnhJk3E1npohd3jxThPSXFAzZZ4WwzMrirbq\n{\n    "@context": "https://w3id.org/did-resolution/v1",\n    "didDocument": {\n        "@context": [\n            "https://www.w3.org/ns/did/v1"\n        ],\n        "id": "did:mdip:z3v8AuaamvoV6JnvnhJk3E1npohd3jxThPSXFAzZZ4WwzMrirbq",\n        "controller": "did:mdip:z3v8AuagsGQwffFd2oVhkdcTWRBi2ps5FdRAJD4jzEVMszkYBCj"\n    },\n    "didDocumentMetadata": {\n        "created": "2024-03-13T21:01:16.102Z",\n        "mdip": {\n            "registry": "hyperswarm",\n            "type": "asset",\n            "version": 1\n        },\n        "data": {\n            "cipher_hash": "cb98be9a0f06160ccdff4d35bf00971944b5a27db3e6974b0301cd26018588c1",\n            "cipher_receiver": "AG_uM(...)UyV8",\n            "cipher_sender": "wcV2W(...)enfc",\n            "created": "2024-03-13T21:01:16.100Z",\n            "sender": "did:mdip:z3v8AuagsGQwffFd2oVhkdcTWRBi2ps5FdRAJD4jzEVMszkYBCj"\n        }\n    }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function d(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);