import React, { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';


const Produkt = (props) => {

    let produktID = +props.match.params.produktid; // *9* laves om en 9 ... + laver om til tal i stedet for string
   
   // Find nyhed via NyhedContext
   const {findProdukt} = useContext(ProductContext);
   const produkt = findProdukt(produktID);
   
   
// Hvis nyheden fines ( der kommer en nyhed retur fra context)
if (produkt) {
    return (

        <div className="Produkt">

            <h1>Udvalgt nyhed</h1>
            <p>Produktet har id: {produktID}</p>
            <h2>{produkt.produkttitel}</h2>
            <p>{produkt.produktinfo}</p>
            <p>{produkt.produktpris}</p>
            <p>{produkt.produktbeskrivelse}</p>
        </div>

    );
    }
    else 
    {
        return (
            <h1>Der er desværre sket en fejl - ingen nyheder passer til det, du har søgt på.</h1>
        )
    }
}


export default Produkt;