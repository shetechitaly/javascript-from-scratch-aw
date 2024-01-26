"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[614],{3905:(e,n,i)=>{i.d(n,{Zo:()=>p,kt:()=>f});var t=i(7294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function o(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function l(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)i=r[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),i=n;return e&&(i="function"==typeof e?e(n):o(o({},n),e)),i},p=function(e){var n=s(e.components);return t.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(i),d=a,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||r;return i?t.createElement(f,o(o({ref:n},p),{},{components:i})):t.createElement(f,o({ref:n},p))}));function f(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}d.displayName="MDXCreateElement"},706:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var t=i(7462),a=(i(7294),i(3905));const r={sidebar_position:1},o="Funzioni",l={unversionedId:"javascript-ii/funzioni",id:"javascript-ii/funzioni",title:"Funzioni",description:"Argomenti: Function Declaration, Function Expression e Arrow Function",source:"@site/docs/javascript-ii/funzioni.mdx",sourceDirName:"javascript-ii",slug:"/javascript-ii/funzioni",permalink:"/javascript-from-scratch-aw/docs/javascript-ii/funzioni",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Javascript II",permalink:"/javascript-from-scratch-aw/docs/category/javascript-ii"},next:{title:"Oggetti",permalink:"/javascript-from-scratch-aw/docs/javascript-ii/oggetti"}},u={},s=[{value:"Intro",id:"intro",level:2},{value:"Function Declaration",id:"function-declaration",level:2},{value:"Function Expression",id:"function-expression",level:2},{value:"Arrow Function",id:"arrow-function",level:2},{value:"Esercizio",id:"esercizio",level:2},{value:"if else",id:"if-else",level:3}],p={toc:s},c="wrapper";function m(e){let{components:n,...i}=e;return(0,a.kt)(c,(0,t.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"funzioni"},"Funzioni"),(0,a.kt)("p",null,"Argomenti: Function Declaration, Function Expression e Arrow Function"),(0,a.kt)("h2",{id:"intro"},"Intro"),(0,a.kt)("p",null,"In programmazione, ",(0,a.kt)("strong",{parentName:"p"},"una funzione \xe8 un blocco di codice che pu\xf2 essere richiamato da altre parti del programma per eseguire una determinata operazione"),". Le funzioni sono utilizzate per creare codice modulare, riutilizzabile e pi\xf9 facile da leggere e mantenere."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.w3schools.com/js/js_functions.asp"},"Scopri di pi\xf9"))),(0,a.kt)("h2",{id:"function-declaration"},"Function Declaration"),(0,a.kt)("p",null,"Per definire una funzione in JavaScript, si utilizza la parola chiave ",(0,a.kt)("inlineCode",{parentName:"p"},"function"),", seguita dal nome della funzione e tra parentesi tonde i parametri della funzione (se presenti), infine le parentesi graffe che racchiudono il corpo della funzione."),(0,a.kt)("p",null,"Esempio di definizione di una funzione:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"\nfunction saluta(nome) {\n  console.log(`Ciao ${nome}!`);\n}\n")),(0,a.kt)("p",null,"Questa funzione, chiamata ",(0,a.kt)("inlineCode",{parentName:"p"},"saluta"),', prende come parametro un nome e stampa a video il messaggio "Ciao" seguito dal nome.'),(0,a.kt)("p",null,"Per utilizzare una funzione, basta richiamarla utilizzando il nome della funzione e passando eventuali argomenti."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'saluta("Mario"); // Stampa "Ciao Mario!" a video\n')),(0,a.kt)("p",null,"Le funzioni possono anche restituire un valore utilizzando l'istruzione ",(0,a.kt)("inlineCode",{parentName:"p"},"return"),". Questo valore pu\xf2 essere poi assegnato a una variabile o utilizzato in qualsiasi altra operazione."),(0,a.kt)("p",null,"Esempio di funzione che restituisce un valore:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"\nfunction quadrato(numero) {\n  return numero * numero;\n}\n\nlet risultato = quadrato(5); // La variabile risultato conterr\xe0 il valore 25`\n")),(0,a.kt)("p",null,"Infine, le funzioni possono essere utilizzate anche senza parametri. In tal caso, \xe8 necessario specificare le parentesi tonde vuote dopo il nome della funzione."),(0,a.kt)("p",null,"Esempio di funzione senza parametri:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function saluta() {\n  console.log("Ciao!");\n}\n\nsaluta(); // Stampa "Ciao!" a video\n')),(0,a.kt)("h2",{id:"function-expression"},"Function Expression"),(0,a.kt)("p",null,"\xc8 possibile definire funzioni anche senza specificare un nome, in tal caso si parla di ",(0,a.kt)("strong",{parentName:"p"},"funzioni anonime"),". Queste funzioni possono essere utilizzate come argomenti di altre funzioni o assegnate a variabili."),(0,a.kt)("p",null,"Esempio di funzione anonima:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"  let saluta = function(nome) {\n  console.log(`Ciao ${nome}!`);\n};\n")),(0,a.kt)("h2",{id:"arrow-function"},"Arrow Function"),(0,a.kt)("p",null,"Le ",(0,a.kt)("strong",{parentName:"p"},"arrow function")," sono una sintassi pi\xf9 breve per definire le funzioni, introdotte in ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3schools.com/js/js_es6.asp"},"ECMAScript 6"),". Si utilizza l'operatore ",(0,a.kt)("inlineCode",{parentName:"p"},"=>")," per separare i parametri dal corpo della funzione. Le arrow function non hanno un proprio oggetto ",(0,a.kt)("inlineCode",{parentName:"p"},"this"),", ma ereditano quello dal contesto in cui sono state definite."),(0,a.kt)("p",null,"Esempio di arrow function:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"  const quadrato = (numero) => numero * numero;\n  let risultato = quadrato(5); // La variabile risultato conterr\xe0 il valore 25\n")),(0,a.kt)("h2",{id:"esercizio"},"Esercizio"),(0,a.kt)("h3",{id:"if-else"},"if else"),(0,a.kt)("p",null,"In RunJS, scrivere una funzione che prende in input un numero e restituisce una stringa che indica se il numero \xe8 pari o dispari."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulazioni! \ud83c\udf89")))}m.isMDXComponent=!0}}]);