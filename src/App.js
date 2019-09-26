import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Nyheder from './components/Nyheder';
import OpretNyhed from './components/OpretNyhed';
import NyhedContextProvider from './contexts/NyhedContext';
import Nyhed from './components/Nyhed';
import ProductContextProvider from './contexts/ProductContext';
import Produkt from './components/Produkt';
import Produkter from './components/Produkter';
import OpretProdukt from './components/OpretProdukt';



function App(props) {


  return (

     <NyhedContextProvider>
     <ProductContextProvider>
      <BrowserRouter>

        <div className="App container">


          <Navbar />

          <Route exact path="/" component={Home} />
          <Route exact path="/nyheder" component={Nyheder} />
          <Route exact path="/nyhed/:nyhedid" component={Nyhed} />
          <Route exact path="/opretnyhed" component={OpretNyhed} />
          <Route exact path="/produkter" component={Produkter} />
          <Route exact path="/produkt/:produktid" component={Produkt} />
          <Route exact path="/opretprodukt" component={OpretProdukt} />
  
    
        </div>
      </BrowserRouter>
      </ProductContextProvider>
     </NyhedContextProvider>
  );
}

export default App;
