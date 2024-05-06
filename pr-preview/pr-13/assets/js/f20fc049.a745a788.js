"use strict";(self.webpackChunkkc_docs=self.webpackChunkkc_docs||[]).push([[17],{1101:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>d,toc:()=>o});var s=n(4848),i=n(8453);const r={title:"Working with Aliased Names",sidebar_label:"Aliased Names",slug:"aliased-names"},t=void 0,d={id:"CLI-user-manual/aliased-names",title:"Working with Aliased Names",description:"What is an alias name?",source:"@site/kc/doc/CLI-user-manual/08-aliased-names.md",sourceDirName:"CLI-user-manual",slug:"/CLI-user-manual/aliased-names",permalink:"/pr-preview/pr-$pr/docs/CLI-user-manual/aliased-names",draft:!1,unlisted:!1,editUrl:"https://github.com/keychainmdip/kc-docs/tree/main/packages/create-docusaurus/templates/shared/kc/doc/CLI-user-manual/08-aliased-names.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Working with Aliased Names",sidebar_label:"Aliased Names",slug:"aliased-names"},sidebar:"tutorialSidebar",previous:{title:"Challenges and Responses",permalink:"/pr-preview/pr-$pr/docs/CLI-user-manual/challenge-responses"},next:{title:"Encryption",permalink:"/pr-preview/pr-$pr/docs/CLI-user-manual/encryption"}},l={},o=[{value:"What is an alias name?",id:"what-is-an-alias-name",level:2},{value:"Adding a name",id:"adding-a-name",level:2},{value:"Listing names",id:"listing-names",level:2},{value:"Removing a name",id:"removing-a-name",level:2}];function c(e){const a={code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h2,{id:"what-is-an-alias-name",children:"What is an alias name?"}),"\n",(0,s.jsx)(a.p,{children:'Throughout this documentation, we used "aliased names" to facilitate interactions with the kc command. Aliased names are stored in the private user wallet and are not communicated or available to other network peers. Names can be created for any type of DID (agent or asset) and so can represent other users or various VCs, schemas, etc.'}),"\n",(0,s.jsx)(a.h2,{id:"adding-a-name",children:"Adding a name"}),"\n",(0,s.jsx)(a.p,{children:"Adding a name will append a new alias to the current user's local wallet:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sh",children:'$ kc add-name david "did:mdip:z3v8AuabNBnymLADSwWpDJPdEhvt2kS5v7UXypjzPnkqfdnW6ri"\nOK\n'})}),"\n",(0,s.jsx)(a.h2,{id:"listing-names",children:"Listing names"}),"\n",(0,s.jsx)(a.p,{children:"Listing names will reveal the list of aliases stored in the current user's local wallet:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-json",children:'$ kc list-names\n{\n    "vc-social-media": "did:mdip:z3v8AuahM2jN3QRaQ5ZWTmzje9HoNdikuAyNjsGfunGfLCGj87J",\n    "charlie-homepage": "did:mdip:z3v8AuaamvoV6JnvnhJk3E1npohd3jxThPSXFAzZZ4WwzMrirbq",\n    "charlie-parent": "did:mdip:z3v8Auabi92Gj2gFdrf6JCubbz4RL4auHAD5eZvz8zkAzkeaeHw",\n    "req-charlie-homepage": "did:mdip:z3v8AuaWxFtpy6Sp5cpHCBQMrsxdMZVdrYTyXMk62p7n5hs4Tb4",\n    "david": "did:mdip:z3v8AuabNBnymLADSwWpDJPdEhvt2kS5v7UXypjzPnkqfdnW6ri"\n}\n'})}),"\n",(0,s.jsx)(a.h2,{id:"removing-a-name",children:"Removing a name"}),"\n",(0,s.jsx)(a.p,{children:"Removing a name will delete an alias from the current user's local wallet:"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-sh",children:"$ kc remove-name david\nOK\n"})})]})}function m(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,a,n)=>{n.d(a,{R:()=>t,x:()=>d});var s=n(6540);const i={},r=s.createContext(i);function t(e){const a=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(r.Provider,{value:a},e.children)}}}]);