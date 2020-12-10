# gruppe1831-webapplikasjoner
## Generell info
* Default pass for bruker og admin sin dummy data er Asdf1.
* Tatt inspirasjon fra forelesers eksempler til kode, ellers er ingenting kopiert.
## How To
* Opprett database i Mongo med navn "gruppe1831"
  * Opprett collections med navn: "articles", "categories", "contacts", "images" og "users"
    * Importer JSON data fra mappen "dummy data" inn til deres respektive collections
* Sett opp to terminaler, der hver har stiene: "\gruppe1831-webapplikasjoner\frontend" og "\gruppe1831-webapplikasjoner\server"
 * I terminal 1 (server) skriv "npm i" inn i terminalen
   * Etter NPM i har blitt fullført, skriv "npm run dev" inn i terminalen
     * Serveren vil nå kjøre
       * Om du vil teste server, skriv "npm run test"
  * I terminal 2 (frontend) skriv "npm i" inn i terminalen (SØRG FOR AT SERVER KJØRER - hvist ikke kommer sidene til å være tomme)
    * Etter NPM i har blitt fullført, skriv "npm start" inn i terminalen
      * Frontend vil nå åpnes
    * Om du vil teste frontend, skriv "npm run test"
