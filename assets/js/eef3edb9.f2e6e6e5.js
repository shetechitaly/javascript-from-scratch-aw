"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[789],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(i),m=a,f=u["".concat(p,".").concat(m)]||u[m]||s[m]||n;return i?r.createElement(f,l(l({ref:t},d),{},{components:i})):r.createElement(f,l({ref:t},d))}));function f(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,l=new Array(n);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<n;c++)l[c]=i[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},9230:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=i(7462),a=(i(7294),i(3905));const n={sidebar_position:2},l="Traccia",o={unversionedId:"progetto-finale/traccia",id:"progetto-finale/traccia",title:"Traccia",description:"Obiettivo del Progetto",source:"@site/docs/progetto-finale/traccia.md",sourceDirName:"progetto-finale",slug:"/progetto-finale/traccia",permalink:"/javascript-from-scratch-aw/docs/progetto-finale/traccia",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Live Preview",permalink:"/javascript-from-scratch-aw/docs/progetto-finale/livepreview"},next:{title:"Esempio",permalink:"/javascript-from-scratch-aw/docs/progetto-finale/example"}},p={},c=[{value:"Obiettivo del Progetto",id:"obiettivo-del-progetto",level:3},{value:"Requisiti Specifici:",id:"requisiti-specifici",level:2},{value:"Struttura dei File",id:"struttura-dei-file",level:3},{value:"Guida alla Realizzazione del Progetto",id:"guida-alla-realizzazione-del-progetto",level:2},{value:"Strutturare il Form HTML",id:"strutturare-il-form-html",level:3},{value:"Stilizzare la Pagina e il Form",id:"stilizzare-la-pagina-e-il-form",level:3},{value:"Implementare la Logica con JavaScript",id:"implementare-la-logica-con-javascript",level:3},{value:"Testare il Progetto",id:"testare-il-progetto",level:3}],d={toc:c},u="wrapper";function s(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"traccia"},"Traccia"),(0,a.kt)("h3",{id:"obiettivo-del-progetto"},"Obiettivo del Progetto"),(0,a.kt)("p",null,"L'obiettivo di questo progetto \xe8 la creazione di un'applicazione web che permetta agli utenti di generare una bio professionale in stile LinkedIn. L'utente inserir\xe0 le proprie informazioni professionali e personali attraverso un form, e l'applicazione generer\xe0 dinamicamente una pagina che presenta queste informazioni in un formato pulito e professionale."),(0,a.kt)("h2",{id:"requisiti-specifici"},"Requisiti Specifici:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Scrivere uno script JavaScript che prenda le informazioni inserite dall'utente e le visualizzi in una sezione separata della pagina sotto forma di bio."),(0,a.kt)("li",{parentName:"ul"},"Implementare la validazione del form per assicurarsi che tutti i campi siano compilati prima di permettere all'utente di generare la bio.")),(0,a.kt)("h3",{id:"struttura-dei-file"},"Struttura dei File"),(0,a.kt)("p",null,"Il progetto dovr\xe0 essere organizzato in tre file principali:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"index.html"),": Contiene la struttura della pagina e il form di input."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"style.css"),": Contiene le regole di stilizzazione per la pagina."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"script.js"),": Contiene la logica per raccogliere i dati del form e generare la bio.")),(0,a.kt)("h2",{id:"guida-alla-realizzazione-del-progetto"},"Guida alla Realizzazione del Progetto"),(0,a.kt)("h3",{id:"strutturare-il-form-html"},"Strutturare il Form HTML"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"index.html"),", creare un form con campi di input per tutte le informazioni richieste."),(0,a.kt)("li",{parentName:"ul"},"Assicurarsi che ogni campo di input abbia un ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," unico per facilitare la raccolta dei dati con JavaScript.")),(0,a.kt)("p",null,"Crea un file HTML contenente questo codice:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'  <html>\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0">\n        <title>Progetto Finale SheTech</title>\n        <link rel="stylesheet" href="style.css">\n    </head>\n\n    <body>\n        <div class="container">\n            <h1>Professional Bio Maker \ud83d\udcdd</h1>\n            <form id="#">\n                <input type="text" id="name" placeholder="Nome e Cognome" required>\n                <input type="text" id="role" placeholder="Ruolo" required>\n                <textarea id="#" placeholder="Competenze Tecniche" required></textarea>\n                <textarea id="#" placeholder="Competenze Trasversali" required></textarea>\n                <textarea id="#" placeholder="Breve Biografia" required></textarea>\n                <textarea id="#" placeholder="Esperienze Lavorative" required></textarea>\n                <textarea id="#" placeholder="Formazione" required></textarea>\n                <input type="text" id="#" placeholder="Contatti" required>\n                <button type="submit">Generate Bio</button>\n            </form>\n            <div id="#"></div>\n        </div>\n        <script src="script.js"><\/script>\n    </body>\n  </html>\n')),(0,a.kt)("h3",{id:"stilizzare-la-pagina-e-il-form"},"Stilizzare la Pagina e il Form"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"style.css"),", definire le regole CSS per rendere l'interfaccia utente pulita, moderna e responsive."),(0,a.kt)("li",{parentName:"ul"},"Utilizzare margini, padding, bordi e colori per migliorare l'usabilit\xe0 e l'estetica del form e della bio risultante."),(0,a.kt)("li",{parentName:"ul"},"Personalizzare il font e i colori per rendere la pagina pi\xf9 accattivante.")),(0,a.kt)("p",null,"In ",(0,a.kt)("inlineCode",{parentName:"p"},"style.css"),", crea un file CSS contenente questo codice:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-css"},'body, html {\n    margin: 0;\n    padding: 0;\n    font-family: Arial, sans-serif;\n}\n\n.container {\n    max-width: 600px;\n    margin: 20px auto;\n    padding: 20px;\n    border: 1px solid #ccc;\n    border-radius: 5px;\n}\n\nh1 {\n    text-align: center;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n}\n\ninput[type="text"], textarea {\n    margin-bottom: 10px;\n    padding: 10px;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n}\n\nbutton {\n    padding: 10px;\n    background-color: #007bff;\n    color: white;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}\n\nbutton:hover {\n    background-color: #0056b3;\n}\n\n#bioOutput {\n    margin-top: 20px;\n    padding: 20px;\n    background-color: #f0f0f0;\n    border: 1px solid #ddd;\n    border-radius: 5px;\n}\n')),(0,a.kt)("h3",{id:"implementare-la-logica-con-javascript"},"Implementare la Logica con JavaScript"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In ",(0,a.kt)("inlineCode",{parentName:"li"},"script.js"),", aggiungere un event listener al form per intercettare il submit e prevenire il comportamento di default del browser."),(0,a.kt)("li",{parentName:"ul"},"Raccogliere i valori inseriti dall'utente, validarli, e poi generare dinamicamente la bio utilizzando questi dati."),(0,a.kt)("li",{parentName:"ul"},"Inserire la bio generata in una sezione dedicata della pagina.")),(0,a.kt)("h3",{id:"testare-il-progetto"},"Testare il Progetto"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Verificare che il form raccolga correttamente i dati inseriti dall'utente."),(0,a.kt)("li",{parentName:"ul"},"Controllare che la bio venga generata correttamente e visualizzata nella pagina.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Congratulazioni! \ud83c\udf89")),(0,a.kt)("p",null,"E' arrivato il momento di presentare il progetto al resto del gruppo!"))}s.isMDXComponent=!0}}]);