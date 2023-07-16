"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7300:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={sidebar_position:1},o="Getting Started",s={unversionedId:"characters/getting-started",id:"characters/getting-started",title:"Getting Started",description:"Step 1: The Idea",source:"@site/docs/characters/getting-started.md",sourceDirName:"characters",slug:"/characters/getting-started",permalink:"/IPS2DevKit/docs/characters/getting-started",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Plugin",permalink:"/IPS2DevKit/docs/plugin"},next:{title:"Getting Started",permalink:"/IPS2DevKit/docs/mapping/getting-started"}},l={},c=[{value:"Step #1: The Idea",id:"step-1-the-idea",level:3},{value:"Get the Plugin",id:"get-the-plugin",level:3},{value:"Make the Model",id:"make-the-model",level:3},{value:"Thief",id:"thief",level:4},{value:"Camera",id:"camera",level:4},{value:"Upload and Submit",id:"upload-and-submit",level:3}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h3",{id:"step-1-the-idea"},"Step #1: The Idea"),(0,a.kt)("p",null,"Come up with an idea! If it's a camera or a thief, its name, its stats, anything! Make sure to include all your details when submitting, though.\nAnyone can help contribute feedback to your idea."),(0,a.kt)("h3",{id:"get-the-plugin"},"Get the Plugin"),(0,a.kt)("p",null,"Get the official IPS2 Developer Kit plugin here: (link here)\nThis will provide you all the tools necessary to submit something."),(0,a.kt)("h3",{id:"make-the-model"},"Make the Model"),(0,a.kt)("h4",{id:"thief"},"Thief"),(0,a.kt)("p",null,"Spawn in a thief dummy from the Dummy section of the plugin.",(0,a.kt)("br",{parentName:"p"}),"\n","Use the thief rig and dress it up with accessories, body colors, a shirt, and pants.",(0,a.kt)("br",{parentName:"p"}),"\n","You can add body colors, shirts, and pants by clicking the plus button next to the thief rig in the explorer.",(0,a.kt)("br",{parentName:"p"}),"\n","To change the shirts and pants, you must provide the clothing URL from Roblox's catalog.",(0,a.kt)("br",{parentName:"p"}),"\n","Shirts and pants can be found in the catalog underneath Classic Shirts and Classic Pants, respectively.",(0,a.kt)("br",{parentName:"p"}),"\n","Enable the Properties menu in the View tab if it isn't enabled.",(0,a.kt)("br",{parentName:"p"}),"\n","When you find the clothes you like, copy the URL of the shirt and paste it into the property ShirtTemplate, and pants, PantsTemplate.",(0,a.kt)("br",{parentName:"p"}),"\n","To add accessories, find the catalog link of the accessory you wish to add.",(0,a.kt)("br",{parentName:"p"}),"\n","Enable the Command Bar in the View tab if it isn't enabled.",(0,a.kt)("br",{parentName:"p"}),"\n","Copy and paste this command into the command bar: ",(0,a.kt)("inlineCode",{parentName:"p"},'assetId = 1337 game:GetService("InsertService"):LoadAsset(assetId).Parent = game.Workspace'),(0,a.kt)("br",{parentName:"p"}),"\n","Take the number in the URL of the accessory link and replace the number ",(0,a.kt)("inlineCode",{parentName:"p"},"1337")," with the the desired accessory number.",(0,a.kt)("br",{parentName:"p"}),"\n","Press enter to run the command.",(0,a.kt)("br",{parentName:"p"}),"\n","Take the accessory from the model that spawned underneath Workspace, and move it to be a child of the thief model.",(0,a.kt)("br",{parentName:"p"}),"\n","You will know it works when the accessory snaps into the correct position on the thief model.   "),(0,a.kt)("h4",{id:"camera"},"Camera"),(0,a.kt)("p",null,"When modeling a camera, change the base camera model and edit it until you are satisfied.",(0,a.kt)("br",{parentName:"p"}),"\n","Knowledge of how the solid modeling tools work in Roblox will help you greatly.",(0,a.kt)("br",{parentName:"p"}),"\n","Alternatively, feel free to use a 3D modeling program to create a mesh and texture.",(0,a.kt)("br",{parentName:"p"}),"\n","A Blender model of Basic is provided at this link: (link here)",(0,a.kt)("br",{parentName:"p"}),"\n","Make sure to be creative! It gives you a higher chance for your work to be seriously considered.   "),(0,a.kt)("h3",{id:"upload-and-submit"},"Upload and Submit"),(0,a.kt)("p",null,"Upload your thief or camera and make sure you allow copying on the model. Lastly, compile all your work into one message and send it on our\ncommunications server (linked below the In Plain Sight 2 game page in the social links section) in the correct channel for submissions."))}h.isMDXComponent=!0}}]);