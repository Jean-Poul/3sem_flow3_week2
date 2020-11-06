# 3 semester, flow 3, week 2

-------------------------------------------------------------------------------------------------
### Overview
  - flow3 week2 tuesday exercise
  - flow3 week2 wednesday exercise
  - flow3 week2 thursday exercise
  - flow3 week2 friday exercise
-------------------------------------------------------------------------------------------------

##### NOTE: 
- Look at the bottom of the page to see written answers from this weeks questions.

###### Tuesday: 
- Client Side Routing with React Router V5 <br/>
https://github.com/Jean-Poul/3sem_flow3_week2/tree/main/01_Tuesday<br/>
- 

###### Wednesday: 
- Securing Restful Web Services <br/>
https://github.com/Jean-Poul/3sem_flow3_week2/tree/main/02_Wednesday <br/>
-

###### Thursday: 
- External requests from our endpoints and how to parallelize long lasting tasks <br/>
https://github.com/Jean-Poul/3sem_flow3_week2/tree/main/03_Thursday <br/>
- 

###### Friday: 
- Complete all exercises <br/>
https://github.com/Jean-Poul/3sem_flow3_week2/tree/main/04_Friday <br/>
- 



### ANSWERS
1. Kunne bruge react komponenter og kommunikation mellem Komponenter:

Vi startede med at gøre brug af komponenter tirsdag hvor vi gør brug af export/import for at kunne arbejde med diverse komponenter i vores projekt. Alt i react foregår via komponenter hvor man bygger et komponent op med sit eget hovedformål. Derved undgår man redundant kode og kan genbruge komponenter, som kan genbruges flere steder i sin applikation. Der er klasse og funktions komponenter. Det kan bruges ved bla. at sende props med som en slags variable og returnere et react element som bliver renderet og vist på klientsiden.
Eks: https://github.com/Jean-Poul/3sem_flow3_week1/blob/main/01_Tuesday/day1_exercise/src/App.js
Se App.js hvor vi øverst importer vores komponenter og gør f.eks. brug af dem i linje 25-27

2. Kunne bruge JSX samt forklare hvilket problem JSX løser for os.

JSX er en JavaScript extension, der gør det muligt for os at kunne skrive HTML elementer i vores JavaScript uden brug af en masse DOM objekter (eks. document.getElementById()). 
Eks: på dette ses igen i samme link: https://github.com/Jean-Poul/3sem_flow3_week1/blob/main/01_Tuesday/day1_exercise/src/App.js
Se funktionen App() fra linje 20-41

3. Kunne forklare og demonstrere brug af props i React
Props står for properties og er stateless. Dvs. det bruges som read-only og ikke til at ændre en value, hvor state bruges i stedet. Props bruges til at sende data fra en component til en anden. Props sendes altid fra parrent til child. For at kunne gå fra child til parrent skal man bruge "lifting state up".
Eks:
https://github.com/Jean-Poul/3sem_flow3_week1/blob/main/01_Tuesday/day1_exercise/src/file3.js
Se i file3.js i linje 23-25, som sender en prop videre til funktionen Welcome i linje 7

4. Kunne forklare og demonstrere brug af state i React med Hooks via useState
En hook er en speciel funktion, som lader os gøre brug af react features. Et eksempel på dette kunne være metoden useState. Ved at gøre brug af useState kan man tilføje en state til en komponent. Eks: https://github.com/Jean-Poul/3sem_flow3_week1/blob/main/02_Wednesday/day2_ex/src/App.js
I linje 9 i App.js kan man se [count, setCount] = setState(props.count). Count er en getter og setCount er en setter, hvis man sammenligner det med java verden. setState kan sammenlignes med en constructor. I linje 20 og 23 gør jeg brug af count og setCount. I linje 9 gøres brug af setState.

5. Kunne bruge useEffect og forklare forskellig anvendelse af dette.
Ved at bruge useEffect, fortæller man react at der skal gøres noget bestemt efter render(ens DOM er loaded færdig). Dvs. man gør brug af useEffect efter en update af ens DOM. Man kan have flere useEffect metoder i samme fil.
React vil huske den funktion man passer og kan derved gøre brug af den efter ens DOM er blevet opdateret.
Eks:
https://github.com/Jean-Poul/3sem_flow3_week1/blob/main/03_Thursday/react-crud-rest-exercise/src/components/App.js
I filen App.js linje 11 gøres brug af useEffect og her bruges denne hook til at  indsætte data til vores tabel, efter vores DOM er loaded.

6. Kunne bruge list og keys i react, samt bruge controlled komponents til formdata.
Ved at gøre brug af keys kan man entydigt identificere rækker i en liste. Herved opstår der ikke konflikter, når man skal finde hver enkelte række. Controlled components er når ens form data bliver afviklet af et React komponent.
Eks: https://github.com/Jean-Poul/3sem_flow3_week1/blob/main/02_Wednesday/day2_ex/src/ListDemo.jsx
Her vælger jeg at henvise til hele ListDemo.jsx filen, da der her gøres brug af to komponenter. MemberTable, som indeholder MemberDemo, og dette returneres til hvor det kaldes fra. På linje 26 indsættes en key til hver table row (<tr>).

7. Kunne forklare og demonstrere begrebet "Lifting State" i React
Lifting state vil sige at man løfter data fra en child til en parrent komponent. Hvis man vil have videre ført data fra en child komponent til et andet child komponent skal ens data først forbi parrent komponent. Dvs. man ikke kan gå fra child til child komponent. 
Eks: https://github.com/Jean-Poul/3sem_flow3_week1/blob/main/03_Thursday/day3_exercise/src/LiftingUp.js
Se i LiftingUp.js. Her har vi en parrent komponent (StartDemo) i linje 20 og to child komponenter, InputComp i linje 34 og ShowComp i linje 40. 
InputComp sætter state på en value, som gemmes i parrent komponent, hvorefter ShowComp kan se den nye og opdateret state. State bliver ændret i parrent komponent, hvorefter child komponenterne gør brug af props, da de kun skal gøre brug af read-only.
