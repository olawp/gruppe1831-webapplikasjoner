# gruppe1831-webapplikasjoner
## Generell info
* Default pass for bruker og admin sin dummy data er Asdf1.
* Tatt inspirasjon fra forelesers eksempler til kode.
* Linje 18 til 35 i Footer.js er funnet på stackoverflow, men har modifikasjoner.
* .env er lagt med, vet at dette egentlig ikke skal gjøres - men er for en lettere setup (MAIL_USER og MAIL_PASSWORD er det eneste som må endres)
* Alle filer er dokumentert med JSDoc
## How To - Setup
### Database
* Sørg for at Mongo kjører på default port 27017, eller eventuelt bytt databaseadreesen i server/.env
* Opprett database i Mongo med navn "gruppe1831"
  * Opprett collections med navn: "articles", "categories", "contacts", "images" og "users"
    * Importer JSON data fra mappen "dummy data" inn til deres respektive collections
### Frontend & Server
* Sett opp to terminaler, der hver har stiene: "\gruppe1831-webapplikasjoner\frontend" og "\gruppe1831-webapplikasjoner\server"
#### Server
  * I terminal 1 (server) skriv "npm i" inn i terminalen
    * Etter NPM i har blitt fullført, skriv "npm run dev" inn i terminalen
      * Serveren vil nå kjøre
    * Om du vil teste server, skriv "npm run test"
#### Frontend
  * I terminal 2 (frontend) skriv "npm i" inn i terminalen (SØRG FOR AT SERVER KJØRER - hvis ikke kommer sidene til å være tomme)
    * Etter NPM i har blitt fullført, skriv "npm start" inn i terminalen
      * Frontend vil nå åpnes
    * Om du vil teste frontend, skriv "npm run test"
