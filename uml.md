# Article
Article er den eneste collectionen med relasjoner.  
Article colletionen består av feltene og typene:
* _id string
* title string
* ingress string
* content string
* author strng
* category ObjectId (Relasjon med _id i category colletionen)
* categoryid string
* hidden Boolean
* image ObjectId (Relasjon med _id i image colletionen)
* user ObjectId (Relasjon med _id i user colletionen)  

Feltene som er av typen ObjectId er relasjoner til andre collections. Vi setter inn en referanse til data i en annen collection enn article.  

* Relasjonen til category lar oss koble artikklene opp mot kategorier. Dette er viktig ettersom vi skal filterere artikkler basert på kategorier senere i oppgaven. 
* Relasjonen til image lar oss koble et bilde opp mot artikkelen. Vi har satt opp sånn at et bilde ikke er nødvendig for å lage en artikkel. 
* Relasjonen til user lar oss koble en bruker opp mot en artikkel. I dette tilfellet er dette en admin, siden kun admins skal kunne lage artikler. 

Vi kunne her også forklart resten av colletionsene, men siden de ikke inneholer relasjoner, syntes vi at UMLen snakker for seg selv. 