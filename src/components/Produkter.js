import React, {useContext} from 'react';
import {Link } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';


const Produkter = () => {

    // Hent alle nyheder fra useState i NyhedContext
    const { produkter } = useContext(ProductContext);
    const { sletProdukt } = useContext(ProductContext);


    const produktListe = produkter.map(n => {

        return(
            <div key={n.produktid}>
                <h4>{n.produkttitel}</h4>
                <Link to={"/produkt/"  + n.produktid}>Læs mere</Link>
                <button onClick={() => sletProdukt(n.produktid)}>SLET!!!</button>
            </div>
        );

    });

    return (
        <div className="Produkter">

            <h2>Produkter</h2>

            {produktListe}

        </div>
    );
}

export default Produkter;