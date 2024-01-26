"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[167],{3905:(e,n,a)=>{a.d(n,{Zo:()=>s,kt:()=>d});var i=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,i,t=function(e,n){if(null==e)return{};var a,i,t={},l=Object.keys(e);for(i=0;i<l.length;i++)a=l[i],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)a=l[i],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var u=i.createContext({}),p=function(e){var n=i.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},s=function(e){var n=p(e.components);return i.createElement(u.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},f=i.forwardRef((function(e,n){var a=e.components,t=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),f=t,d=c["".concat(u,".").concat(f)]||c[f]||m[f]||l;return a?i.createElement(d,r(r({ref:n},s),{},{components:a})):i.createElement(d,r({ref:n},s))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var l=a.length,r=new Array(l);r[0]=f;var o={};for(var u in n)hasOwnProperty.call(n,u)&&(o[u]=n[u]);o.originalType=e,o[c]="string"==typeof e?e:t,r[1]=o;for(var p=2;p<l;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1920:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var i=a(7462),t=(a(7294),a(3905));const l={sidebar_position:4},r="JavaScript",o={unversionedId:"extras/progetto-finale-extra/js",id:"extras/progetto-finale-extra/js",title:"JavaScript",description:"Crea un file app.js",source:"@site/docs/extras/progetto-finale-extra/js.md",sourceDirName:"extras/progetto-finale-extra",slug:"/extras/progetto-finale-extra/js",permalink:"/javascript-from-scratch-aw/docs/extras/progetto-finale-extra/js",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CSS",permalink:"/javascript-from-scratch-aw/docs/extras/progetto-finale-extra/css"},next:{title:"Esempio",permalink:"/javascript-from-scratch-aw/docs/extras/progetto-finale-extra/example"}},u={},p=[{value:"Crea un file <code>app.js</code>",id:"crea-un-file-appjs",level:2},{value:"Dichiarazione delle variabili",id:"dichiarazione-delle-variabili",level:2},{value:"Selezionare l&#39;elemento dello schermo",id:"selezionare-lelemento-dello-schermo",level:2},{value:"Gestire il click del pulsante",id:"gestire-il-click-del-pulsante",level:2},{value:"Gestire i simboli",id:"gestire-i-simboli",level:2},{value:"Gestire i numeri",id:"gestire-i-numeri",level:2},{value:"Gestire le operazioni matematiche",id:"gestire-le-operazioni-matematiche",level:2}],s={toc:p},c="wrapper";function m(e){let{components:n,...a}=e;return(0,t.kt)(c,(0,i.Z)({},s,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"javascript"},"JavaScript"),(0,t.kt)("h2",{id:"crea-un-file-appjs"},"Crea un file ",(0,t.kt)("inlineCode",{parentName:"h2"},"app.js")),(0,t.kt)("p",null,"All'interno di vscode crea un file JavaScript chiamato ",(0,t.kt)("inlineCode",{parentName:"p"},"app.js")),(0,t.kt)("h2",{id:"dichiarazione-delle-variabili"},"Dichiarazione delle variabili"),(0,t.kt)("p",null,"Dichiara tre variabili utilizzando la parola chiave ",(0,t.kt)("inlineCode",{parentName:"p"},"let"),"."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"runningTotal")," per memorizzare il totale attuale delle operazioni."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"buffer")," per memorizzare l'input dell'utente."),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"previousOperator")," per memorizzare l'operatore precedente.")),(0,t.kt)("h2",{id:"selezionare-lelemento-dello-schermo"},"Selezionare l'elemento dello schermo"),(0,t.kt)("p",null,"Usa il metodo ",(0,t.kt)("inlineCode",{parentName:"p"},"querySelector")," per selezionare l'elemento dello schermo e assegnarlo alla variabile ",(0,t.kt)("inlineCode",{parentName:"p"},"screen"),"."),(0,t.kt)("h2",{id:"gestire-il-click-del-pulsante"},"Gestire il click del pulsante"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Definisci la funzione ",(0,t.kt)("inlineCode",{parentName:"li"},"buttonClick")," per gestire il click dei pulsanti."),(0,t.kt)("li",{parentName:"ul"},"La funzione riceve come argomento il valore del pulsante cliccato."),(0,t.kt)("li",{parentName:"ul"},"Utilizza la funzione ",(0,t.kt)("inlineCode",{parentName:"li"},"isNaN")," per controllare se il valore \xe8 un numero o un simbolo."),(0,t.kt)("li",{parentName:"ul"},"Se il valore \xe8 un simbolo, esegui la funzione ",(0,t.kt)("inlineCode",{parentName:"li"},"handleSymbol"),"."),(0,t.kt)("li",{parentName:"ul"},"Se il valore \xe8 un numero, esegui la funzione ",(0,t.kt)("inlineCode",{parentName:"li"},"handleNumber"),"."),(0,t.kt)("li",{parentName:"ul"},"Infine, aggiorna il contenuto dello schermo con il valore di ",(0,t.kt)("inlineCode",{parentName:"li"},"buffer"),".")),(0,t.kt)("h2",{id:"gestire-i-simboli"},"Gestire i simboli"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Definisci la funzione ",(0,t.kt)("inlineCode",{parentName:"li"},"handleSymbol")," per gestire i simboli."),(0,t.kt)("li",{parentName:"ul"},"La funzione riceve come argomento il simbolo cliccato."),(0,t.kt)("li",{parentName:"ul"},"Utilizza un costrutto ",(0,t.kt)("inlineCode",{parentName:"li"},"switch")," per controllare quale simbolo \xe8 stato cliccato."),(0,t.kt)("li",{parentName:"ul"},'Se il simbolo \xe8 "C", reimposta il valore di ',(0,t.kt)("inlineCode",{parentName:"li"},"buffer"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"runningTotal")," e ",(0,t.kt)("inlineCode",{parentName:"li"},"previousOperator"),"."),(0,t.kt)("li",{parentName:"ul"},'Se il simbolo \xe8 "=", calcola il risultato utilizzando la funzione ',(0,t.kt)("inlineCode",{parentName:"li"},"flushOperation"),", reimposta il valore di ",(0,t.kt)("inlineCode",{parentName:"li"},"buffer"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"runningTotal")," e ",(0,t.kt)("inlineCode",{parentName:"li"},"previousOperator"),"."),(0,t.kt)("li",{parentName:"ul"},'Se il simbolo \xe8 "\u2190", rimuovi l\'ultimo carattere da ',(0,t.kt)("inlineCode",{parentName:"li"},"buffer"),"."),(0,t.kt)("li",{parentName:"ul"},'Se il simbolo \xe8 un operatore matematico ("+", "-", "\xd7", "\xf7"), esegui la funzione ',(0,t.kt)("inlineCode",{parentName:"li"},"handleMath"),".")),(0,t.kt)("h2",{id:"gestire-i-numeri"},"Gestire i numeri"),(0,t.kt)("p",null,"Aggiungi una nuova funzione chiamata ",(0,t.kt)("inlineCode",{parentName:"p"},"handleNumber"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx"},'function handleNumber(numberString) {\n  if (buffer === "0") {\n    buffer = numberString;\n  } else {\n    buffer += numberString;\n  }\n}\n')),(0,t.kt)("p",null,"La funzione accetta una stringa rappresentante il numero digitato dall'utente. In primo luogo, la funzione controlla se il buffer \xe8 uguale a 0. Se lo \xe8, imposta il buffer con il valore del numero digitato. Altrimenti, concatena il numero digitato con il valore del buffer."),(0,t.kt)("p",null,"Aggiorna la funzione ",(0,t.kt)("inlineCode",{parentName:"p"},"buttonClick"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx"},"function buttonClick(value) {\n  if (isNaN(value)) {\n    handleSymbol(value);\n  } else {\n    handleNumber(value);\n  }\n  screen.innerText = buffer;\n}\n")),(0,t.kt)("p",null,"La funzione ",(0,t.kt)("inlineCode",{parentName:"p"},"buttonClick")," controlla se il valore passato \xe8 un numero o un simbolo. Se \xe8 un numero, viene chiamata la funzione ",(0,t.kt)("inlineCode",{parentName:"p"},"handleNumber"),". Altrimenti, viene chiamata la funzione ",(0,t.kt)("inlineCode",{parentName:"p"},"handleSymbol"),". Infine, il valore del buffer viene visualizzato sullo schermo."),(0,t.kt)("h2",{id:"gestire-le-operazioni-matematiche"},"Gestire le operazioni matematiche"),(0,t.kt)("p",null,"Aggiungi una nuova funzione chiamata ",(0,t.kt)("inlineCode",{parentName:"p"},"flushOperation"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx"},'function flushOperation(intBuffer) {\n  switch (previousOperator) {\n    case "+":\n      runningTotal += intBuffer;\n      break;\n    case "-":\n      runningTotal -= intBuffer;\n      break;\n    case "\xd7":\n      runningTotal *= intBuffer;\n      break;\n    case "\xf7":\n      runningTotal /= intBuffer;\n      break;\n  }\n}\n')),(0,t.kt)("p",null,"La funzione accetta un intero rappresentante il valore numerico nel buffer. La funzione esegue l'operazione matematica tra il valore nel buffer e il valore dell'operatore precedente, aggiornando il valore di ",(0,t.kt)("inlineCode",{parentName:"p"},"runningTotal"),"."),(0,t.kt)("p",null,"Aggiungi una nuova funzione chiamata ",(0,t.kt)("inlineCode",{parentName:"p"},"handleMath"),":"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-jsx"},'function handleMath(symbol) {\n  if (buffer === "0") {\n    // Non fare nulla\n    return;\n  }\n\n  const intBuffer = parseInt(buffer);\n\n  if (runningTotal === 0) {\n    runningTotal = intBuffer;\n  } else {\n    flushOperation(intBuffer);\n  }\n\n  previousOperator = symbol;\n  buffer = "0";\n}\n')),(0,t.kt)("p",null,"La funzione accetta un simbolo rappresentante l'operatore matematico digitato dall'utente. In primo luogo, controlla se il buffer \xe8 uguale a 0. Se lo \xe8, non viene eseguita alcuna operazione. In caso contrario, la funzione converte il valore del buffer in un intero e controlla se ",(0,t.kt)("inlineCode",{parentName:"p"},"runningTotal")," \xe8 uguale a 0. Se lo \xe8, imposta il valore di ",(0,t.kt)("inlineCode",{parentName:"p"},"runningTotal")," con il valore del buffer. Altrimenti, chiama la funzione ",(0,t.kt)("inlineCode",{parentName:"p"},"flushOperation")," per eseguire l'operazione tra il valore nel buffer e il valore dell'operatore precedente."),(0,t.kt)("p",null,"Infine, la funzione imposta il valore dell'operatore precedente con il simbolo passato come argomento, e imposta il valore del buffer a 0."),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Congratulazioni! \ud83c\udf89")),(0,t.kt)("p",null,"E' arrivato il momento di presentare il progetto al resto del gruppo!"))}m.isMDXComponent=!0}}]);