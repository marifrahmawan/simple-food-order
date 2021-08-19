import React, { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';

function App() {
  const [stateShowCart, setstateShowCart] = useState(false);

  const showCartHandler = () => {
    setstateShowCart(true);
  };

  const hideCartHandler = () => {
    setstateShowCart(false);
  };

  return (
    <CartProvider>
      {stateShowCart && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
