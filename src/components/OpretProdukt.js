import React, { useContext, useState } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const OpretProdukt = () => {

const { tilfoejProdukt } = useContext(ProductContext);
    // State til indholdet i en nyhed
    const [produkttitel, setProdukttitel] = useState('');
    const [produktinfo, setProduktinfo] = useState('');
    const [produktpris, setProduktpris] = useState('');
    const [produktbeskrivelse, setProduktbeskrivelse] = useState('');


   const handleSubmit = (e) => {
        e.preventDefault();

        tilfoejProdukt(produkttitel, produktinfo, produktpris, produktbeskrivelse);
        setProdukttitel('');
        setProduktinfo('');
        setProduktpris('');
        setProduktbeskrivelse('');
   }


    return (
        <form onSubmit={handleSubmit}>

            <input type="text" placeholder="Produktets titel" value={produkttitel}
                onChange={(e) => setProdukttitel(e.target.value)} />

            <input type="text" placeholder="Produktets info" value={produktinfo}
                onChange={(e) => setProduktinfo(e.target.value)} />
           
            <input type="text" placeholder="Produktets pris" value={produktpris}
                onChange={(e) => setProduktpris(e.target.value)} />
           
            <input type="text" placeholder="Produktbeskrivelse" value={produktbeskrivelse}
                onChange={(e) => setProduktbeskrivelse(e.target.value)} />

            <input type="submit" value="Gem produktet inden det bliver slettet!" />

        </form>
    );
}

export default OpretProdukt;