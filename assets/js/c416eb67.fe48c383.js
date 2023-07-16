"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[262],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5545:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},l="Tags",o={unversionedId:"Mapping/tags",id:"Mapping/tags",title:"Tags",description:"This is an explanation of all tags that can be applied with CollectionService or the Tag Editor.",source:"@site/docs/Mapping/tags.md",sourceDirName:"Mapping",slug:"/Mapping/tags",permalink:"/IPS2DevKit/docs/Mapping/tags",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Hierarchy",permalink:"/IPS2DevKit/docs/mapping/hierarchy"}},s={},p=[],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tags"},"Tags"),(0,r.kt)("p",null,"This is an explanation of all tags that can be applied with CollectionService or the Tag Editor."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CamLocation",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All instances tagged ",(0,r.kt)("inlineCode",{parentName:"li"},"CamLocation")," are BaseParts"),(0,r.kt)("li",{parentName:"ul"},"CanCollide is false, CanQuery is false, and CanTouch is false"),(0,r.kt)("li",{parentName:"ul"},"All instances have an attribute called DisplayName, storing a string, which displays to a camera as the name of the hatch"))),(0,r.kt)("li",{parentName:"ul"},"Clip_Bounds",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All instances tagged ",(0,r.kt)("inlineCode",{parentName:"li"},"Clip_Bounds")," are BaseParts"),(0,r.kt)("li",{parentName:"ul"},"CanCollide is false, CanQuery is false, and CanTouch is true"),(0,r.kt)("li",{parentName:"ul"},"All instances have an attribute called Entrance, with the name of the Entrance's folder name which it teleports you to upon touching it"),(0,r.kt)("li",{parentName:"ul"},"Instances named Broad will be disabled during the round start and round end, to allow for entering and escaping"),(0,r.kt)("li",{parentName:"ul"},"Instances not named Broad always teleport thieves"))),(0,r.kt)("li",{parentName:"ul"},"Clip_Entrance",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All instances tagged ",(0,r.kt)("inlineCode",{parentName:"li"},"Clip_Entrance")," are BaseParts"),(0,r.kt)("li",{parentName:"ul"},"CanCollide is true, CanQuery is true, and CanTouch is true"),(0,r.kt)("li",{parentName:"ul"},"CanCollide set to false during round intro and escape sequence, to allow for entering and escaping"))),(0,r.kt)("li",{parentName:"ul"},"Clip_Player",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All instances tagged ",(0,r.kt)("inlineCode",{parentName:"li"},"Clip_Player")," are BaseParts"),(0,r.kt)("li",{parentName:"ul"},"CanCollide is true, CanQuery is true, and CanTouch is true"),(0,r.kt)("li",{parentName:"ul"},"Instances that only thieves can collide with"),(0,r.kt)("li",{parentName:"ul"},"Does not prevent camera lasers or any projectile from moving through"),(0,r.kt)("li",{parentName:"ul"},"Mostly used for out of bounds protection"))),(0,r.kt)("li",{parentName:"ul"},"EntranceNode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"All instances tagged ",(0,r.kt)("inlineCode",{parentName:"li"},"EntranceNode")," are BaseParts"),(0,r.kt)("li",{parentName:"ul"},"CanCollide is false, CanTouch is false, but CanQuery is true"),(0,r.kt)("li",{parentName:"ul"},"Node has Attachment children named 1, 2, ..., n, corresponding to n number of seats in the corresponding entrance van"),(0,r.kt)("li",{parentName:"ul"},"When entering the map, the first thief to exit the van will end at attachment point 1, the second thief to exit the van will end at attachment point 2, and so on"),(0,r.kt)("li",{parentName:"ul"},"Orientation doesn't matter, only position"))),(0,r.kt)("li",{parentName:"ul"},"Item",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Everything stealable"),(0,r.kt)("li",{parentName:"ul"},"All Items are Models"),(0,r.kt)("li",{parentName:"ul"},"Any Item can have the following attributes:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"DisplayName, string, overrides the model name for the client's UI"),(0,r.kt)("li",{parentName:"ul"},"CashValue, num, overrides the cash value of an item"))),(0,r.kt)("li",{parentName:"ul"},"Items are picked up by the biggest part of a volume. To disable this, add an underscore prefix to the name of the item"),(0,r.kt)("li",{parentName:"ul"},"The position used for distance calculations for picking up items is determined by the pivot point of the item's model"),(0,r.kt)("li",{parentName:"ul"},"There should be at least 1 BasePart as a child of the item model"),(0,r.kt)("li",{parentName:"ul"},"Instances also tagged with ",(0,r.kt)("inlineCode",{parentName:"li"},"SpecialItem")," have additional properties...",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The direct children of the model make up the stealable item"),(0,r.kt)("li",{parentName:"ul"},"Optional model/folder called ExtraItems, containing tagged items that spawn when the special item spawns"),(0,r.kt)("li",{parentName:"ul"},"Optional model/folder called FallbackItems, containing tagged items that spawn when the special item DOESN'T spawn"),(0,r.kt)("li",{parentName:"ul"},"Optional model/folder called MapModel, parents the children of this to the map if the special item check succeeds"),(0,r.kt)("li",{parentName:"ul"},"Optional model/folder called FallbackMapModel, parents the children of this to the map if the special item check fails")))))))}m.isMDXComponent=!0}}]);