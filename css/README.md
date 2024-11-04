# Bootstrap, svg-grafik, dom-manipulation, Canvas  

## **Uppgiftsbeskrivning**	

Du skall skapa en mindre webbsida utifrån de önskemål och målgrupp som din kund har. Din webbsida skall omfattas av nedanstående kravspecifikation.

## **Syfte**

Syftet med uppgiften är att tillämpa de kunskaper som vi gått igenom under terminens gång. Du kommer kunna fördjupa dina kunskaper inom **DOM-manipulation**, **Javascipt**, **2D-grafik** och **CSS-ramverk.**

## **Förlag till idéer**

| SIDA | canvas | Dom-manipulation | SVG | chart.js |
| :---- | :---- | :---- | :---- | :---- |
| **Spelportal** | Spel, paint… | blackjack | Logga | Spelstats |
| **Dashboard** | Statistik | Uppdatera data (localstorage) | Logga, grafik | Statistik  |
| **Träningssida** | Spelpaus, målarpaus. | Skapa en lista med övningar. bj-paus.  | Logga | Träningsstatistik |
| **Paint 3.0** | Utveckla Paint | Ändra färger, penselstorlekar… | Logga | Visa statistik över bilder |
| **Filmfavoriter** | Yta att skapa  egna filmomslag/filmrelaterade konstverk | En “to watch”-list som användaren kan fylla i | Ikoner för olika filmgenrer | Visualisera data om filmer |
| **Egen idé** |  |  |  |  |

## **Kravspecifikation**

Layouten på alla sidor skall göras främst med **Bootstrap**. Du skall göra en responsiv webbsida som funkar i mobil \+ desktop-läge (breakpoint vid MD)

- [ ] Skisser över de olika sektionerna (handgjorda utan färg)  
- [ ] Använd chart.js för att visa statistik på sidan.  
- [ ] Minst en SVG-bild. Kan tex vara en logga eller ett element som animeras. Använd gärna Figma till detta.  
- [ ] Användaren ska kunna manipulera DOM-en mha Javascript. Exempelvis lägga till/ta bort text/list items via ett formulär eller ta bort/lägga till css-klasser  
- [ ] Vanliga mappstrukturen i kursen. Undermappar **css**, **img**, **misc**.(misc ny, placera filer som inte passar andra mappar)  
- [ ] Använd gärna **AI-genererad** text till **paragrafer/rubriker**.  
      

## **GitHub**

Under arbetets gång skall arbetet syncas mot GitHub. Detta gör vi för att både spara en historik och för vi skall ha en kopia utifall att något skulle hända med sidan under arbetets gång. (t.ex. dator som går sönder)

Du skall **minst göra en push** till GitHub **efter varje lektion** men kan med fördel pusha om du gör en större förändring på sidan med. Slutinlämning av webbsidan görs som en Push till GitHub med kommentaren **“Inlämning”**.

**Hur kommer jag igång?**  
Gör en fork/gaffel på följande sida [https://github.com/ntijoh/corp](https://github.com/ntijoh/corp). 

**Dokumentation**  
Ditt projekt skall dokumenteras (varje vecka efter/under lektion) och lämnas in på classroom som en klassisk inlämning. Tänk på att dokumentationen skall visa en process och dina beslut längs vägen. Ta gärna skärmbilder för att beskriva arbetets process. (CMD+SHIFT+4 för mac, print screen för windows)  
						  
**Tidsplanering**

| 43 | Presentation av uppgiften / Om dokumentering / Start planering/ skissa |
| :---: | :---- |
| 45 | Fortsatt arbete. Skräddarsy Bootstrap med Scss |
| 46 | Fortsatt arbete |
| 47 |  |
| 48 | Inlämning |

**Bedömningsmatris**

| Betyget A | Betyget C | Betyget E |
| ----- | ----- | ----- |
| **Eleven gör en genomarbetad projektplan för en tänkt produkt, vid behov reviderar eleven planen.** | **Eleven gör en genomarbetad projektplan för en tänkt produkt.** *Handgjord skiss om grovt visar layout  på tänkt produkt. Även mobil layout visas.* | **Eleven gör en enkel projektplan för en tänkt produkt.** *enkel skiss* |
| **Utifrån projektplanen utvecklar eleven efter samråd med handledare produkten där logiker som styr innehåll, design och beteende i omfattande utsträckning är åtskilda.** | **Utifrån projektplanen utvecklar eleven efter samråd med handledare produkten där logiker som styr innehåll, design och beteende är åtskilda.** *efter samråd* | **Utifrån projektplanen utvecklar eleven i samråd med handledare produkten där logiker som styr innehåll, design och beteende i begränsad utsträckning är åtskilda.** *i samråd* |
| **I arbetet utvecklar eleven kod som med gott resultat följer standarder och som omfattar flera tekniker för märkspråk och stilmallar där eleven i omfattande utsträckning använder tekniker för att generera stilmallskod.** | **I arbetet utvecklar eleven kod som med tillfredsställande resultat följer standarder och som omfattar några tekniker för märkspråk och stilmallar där eleven använder tekniker för att generera stilmallskod.** *SCSS (skräddarsy bootstrap)* | **I arbetet utvecklar eleven kod som med tillfredsställande resultat följer standarder och som omfattar någon teknik för märkspråk och stilmallar där eleven i begränsad utsträckning använder tekniker för att generera stilmallskod.** *css-variabler* |
| **I arbetet bearbetar eleven med gott resultat och via flera moment text, bild och eventuell annan media så att de blir anpassade för att fungera i produkten.** | **I arbetet bearbetar eleven med tillfredsställande resultat och via flera moment text, bild och eventuell annan media så att de blir anpassade för att fungera i produkten.** *Animerad svg logga  Välarbetade bilder/text som passar ihop i produkten*  | **I arbetet bearbetar eleven med tillfredsställande resultat text, bild och eventuell annan media så att de blir anpassade för att fungera i produkten.**  *Svg logga Genomarbetat textsemantik (h1,h2,p…)* |
| **Eleven utvecklar med gott resultat funktionalitet inom något eller några av områdena domskript, interaktiv 2D-grafik, 3D-grafik eller animationer.** *Canvas, Paint, JS eller Blackjack har modifierats mycket för att fungera till produkt* | **Eleven utvecklar med tillfredsställande resultat funktionalitet inom något eller några av områdena domskript, interaktiv 2D-grafik, 3D-grafik eller animationer.** *Animerad svg logga Canvas, Paint, JS eller Blackjack har modifierats för att fungera till produkt* | **Eleven utvecklar med tillfredsställande funktionalitet inom något eller några av områdena domskript, interaktiv 2D-grafik, 3D-grafik eller animationer.** *svg logga/bild, interaktiv Canvas (paint, canvas-spel, eller BlackJack)*  |
| **I sitt arbete inkluderar eleven flera funktioner av komplex natur från ett klassbibliotek eller ramverk inom områdena design eller skript.** | **I sitt arbete inkluderar eleven några funktioner från ett klassbibliotek eller ramverk inom områdena design eller skript.** *Responsiv Bootstrap \+ modifierad canvas* | **I sitt arbete inkluderar eleven någon enkel funktion från ett klassbibliotek eller ramverk inom områdena design eller skript.** *Bootstrap \+ enklare canvas (från exempel)* |
| **När arbetet är utfört gör eleven en noggrann och utförlig dokumentation av de moment som har utförts med koppling till generella principer och testresultat samt utvärderar med utförliga och nyanserade omdömen sitt arbete och resultat samt ger förslag på hur arbetet kan förbättras.** | **När arbetet är utfört gör eleven en noggrann dokumentation av de moment som har utförts samt utvärderar med nyanserade omdömen sitt arbete och resultat.**  *Github-push varje lektion. Screenshots/kommenterade text i dokument på classroom varje lektion Nyanserad utvärdering* | **När arbetet är utfört gör eleven en enkel dokumentation av de moment som har utförts samt utvärderar med enkla omdömen sitt arbete och resultat.** *Github-push varje lektion. Screenshots/kommenterade text i dokument på classroom varje lektion Enkel utvärdering* |
| **Eleven använder med säkerhet terminologi inom området.** |  | **Eleven använder med viss säkerhet terminologi inom området.** |
| **Dessutom kontrollerar eleven med säkerhet produktens tillgänglighet med automatiserade tester och simuleringar samt manuella tester.** | **Dessutom kontrollerar eleven med viss säkerhet produktens tillgänglighet med automatiserade tester och begränsad manuell testning.** Testa i mobil/desktop | **Dessutom kontrollerar eleven med viss säkerhet produktens tillgänglighet med automatiserade tester.**  validering, contrast checker |

