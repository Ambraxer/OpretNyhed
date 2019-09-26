import React, {createContext, useState} from 'react';



// export ProduktContext
export const ProductContext = createContext();

const ProductContextProvider = (props) => {


    const [produkter, setProdukter] = useState([
        { produktid: 23, 
          produkttitel: "Fusilli L'italiana", 
          produktinfo: "400 g / Pasta Zara", 
          produktpris: 3.80, 
          produktbeskrivelse:"Fusilli L´italiana stammer fra Italien hvor familien Bragagnolo har lavet pasta i mere end et århundrede. Det startede som en lille familievirksomhed, der med tiden voksede sig kæmpe store. Det er stadig et voksende firma og som i dag resultere i Pasta når det er bedst. I løbet af disse år har Pasta ZARA's produktion opretholdt sine principper uændret: et omhyggeligt udvalg af den bedste hård hvede semolina og kun den nyeste teknologi, der anvendes til pastafremstillingsprocessen. Et koncept, der fandt den rette balance mellem tradition og innovation. Dette er hvad der gør forskellen." 
        },
        { produktid: 12, 
          produkttitel: "Kiks m. kakaocreme", 
          produktinfo: "2 pk / 268 g / Hit", 
          produktpris: 17.95, 
          produktbeskrivelse: "Ingrediensliste: HVEDEMEL, sukker, vegetabilsk fedtstof (palme, kokos), fedtfattigt kakaopulver 3,4 %, glucose-sirup og frugtsukker-sirup, valleprodukt (MÆLK), hævemidler (ammoniumcarbonat, natriumcarbonat), salt, surhedsregulerende middel (citronsyre), SKUMMETMÆLKSPULVER, kakaopulver, emulgator (lecithiner), aroma, ÆGGEPULVER.Kan indeholde spor af HASSELNØDDER." 
        },
        { produktid: 56, 
          produkttitel: "Luksusrogn", 
          produktinfo: "2 x 200 g / Amanda",
          produktpris: 32.95,
          produktbeskrivelse: "Ingrediensliste: Min. 76% rogn, vand, tomatpasta, vegetabilsk olie, salt, carrageenan, johannesbrødkernemel. " 
        },
        { produktid: 9, 
          produkttitel: "Kaffe bl. 95 øko.", 
          produktinfo: "400 g / fairtrade/ malet kaffe / Peter Larsen Kaffe", 
          produktpris: 55.95, 
          produktbeskrivelse: "Fairtrade kaffe. Økologisk blanding med en blød og let syrlig smag, med en fyldig aroma. Kaffen er dyrket i det Syd- og mellemamerikanske højland. Fairtrade betyder mere fair handelsvilkår og flere muligheder for, at producenter i udviklingslande kan investere i deres produktion, og i deres lokalsamfund for at skabe en bæredygtig fremtid. "
         }
       ]);

       // TODO - SLET PRODUKT
       const sletProdukt = (id) => {
           setProdukter(produkter.filter(n => n.produktid !== id));
       }

       // OPRET NYHED
       const tilfoejProdukt = (produkttitel, produktinfo, produktpris, produktbeskrivelse) => {
           let produktid = Math.floor (Math.random() * 100);
            setProdukter([...produkter, {produkttitel: produkttitel, produktinfo: produktinfo, produktpris: produktpris, produktbeskrivelse: produktbeskrivelse}]);
    
       }

       // TODO - HENT NYHED UD FRA DENS ID 
       const findProdukt = (id) =>{
           return produkter.find(n => n.produktid === id);
       }
    
       
       return (

        <ProductContext.Provider value={{produkter, tilfoejProdukt, sletProdukt, findProdukt}}>
            {props.children}
        </ProductContext.Provider>
       );
     }

     export default ProductContextProvider;