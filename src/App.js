import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

import MenCategory from './components/men/MenCategory';
import WomenCategory from './components/women/WomenCategory';
import SaleCategory from './components/SaleCategory';

import MenShirts from './components/men/menShirts';
import MenJeans from './components/men/menJeans';
import MenShoes from './components/men/menShoes';
import WomenShirts from './components/women/womenShirts';
import WomenJeans from './components/women/womenJeans';
import WomenShoes from './components/women/womenShoes';

import MenShirtContextProvider from './contexts/MenShirtsContext';
import MenJeansContextProvider from './contexts/MenJeansContext';
import MenShoesContextProvider from './contexts/MenShoesContext';
import WomenShoesContextProvider from './contexts/WomenShoesContext';
import WomenJeansContextProvider from './contexts/WomenJeansContext';
import WomenShirtsContextProvider from './contexts/WomenShirtsContext';

import MenShirtItem from './components/men/MenShirtItem';
import MenJeansItem from './components/men/MenJeansItem';
import MenShoeItem from './components/men/MenShoeItem';
import WomenShirtItem from './components/women/WomenShirtItem';
import WomenJeansItem from './components/women/WomenJeansItem';
import WomenShoeItem from './components/women/WomenShoeItem';

import MenNewRelease from './components/men/MenNewRelease';
import Favorites from './components/Favorites';
import FavoritesContextProvider from './contexts/FavoritesContext';
import Cart from './components/Cart';
import Footer from './components/Footer';
import CartContextProvider from './contexts/CartContext';

function App(props) {
  console.log(props);
  return (
    <HashRouter>
      <div className='App'>
        <Navbar />

        <Route exact path='/' component={Home} />
        <Route path='/favorites' component={Favorites} />
        <Route path='/cart' component={Cart} />

        <MenShirtContextProvider>
          <MenJeansContextProvider>
            <MenShoesContextProvider>
              <WomenShirtsContextProvider>
                <WomenJeansContextProvider>
                  <WomenShoesContextProvider>
                    <Route path='/sale' component={SaleCategory} />
                  </WomenShoesContextProvider>
                </WomenJeansContextProvider>
              </WomenShirtsContextProvider>
            </MenShoesContextProvider>
          </MenJeansContextProvider>
        </MenShirtContextProvider>

        {/* Men */}
        <Route exact path='/men' component={MenCategory} />
        <MenShirtContextProvider>
          <Route exact path='/men/shirts' component={MenShirts} />
          <FavoritesContextProvider>
            <Route exact path='/men/shirts/:item_id' component={MenShirtItem} />
          </FavoritesContextProvider>
        </MenShirtContextProvider>

        <MenJeansContextProvider>
          <Route exact path='/men/jeans' component={MenJeans} />
          <FavoritesContextProvider>
            <Route path='/men/jeans/:item_id' component={MenJeansItem} />
          </FavoritesContextProvider>
        </MenJeansContextProvider>

        <MenShoesContextProvider>
          <Route exact path='/men/shoes' component={MenShoes} />
          <FavoritesContextProvider>
            <Route path='/men/shoes/:item_id' component={MenShoeItem} />
          </FavoritesContextProvider>
        </MenShoesContextProvider>

        <MenShirtContextProvider>
          <MenJeansContextProvider>
            <MenShoesContextProvider>
              <Route exact path='/men/newreleases' component={MenNewRelease} />
            </MenShoesContextProvider>
          </MenJeansContextProvider>
        </MenShirtContextProvider>

        {/* Women */}
        <Route exact path='/women' component={WomenCategory} />

        <WomenShirtsContextProvider>
          <Route exact path='/women/shirts' component={WomenShirts} />
          <FavoritesContextProvider>
            <Route
              exact
              path='/women/shirts/:item_id'
              component={WomenShirtItem}
            />
          </FavoritesContextProvider>
        </WomenShirtsContextProvider>

        <WomenJeansContextProvider>
          <Route exact path='/women/jeans' component={WomenJeans} />
          <FavoritesContextProvider>
            <Route
              exact
              path='/women/jeans/:item_id'
              component={WomenJeansItem}
            />
          </FavoritesContextProvider>
        </WomenJeansContextProvider>

        <WomenShoesContextProvider>
          <Route exact path='/women/shoes' component={WomenShoes} />
          <FavoritesContextProvider>
            <Route
              exact
              path='/women/shoes/:item_id'
              component={WomenShoeItem}
            />
          </FavoritesContextProvider>
        </WomenShoesContextProvider>
        <Footer />

        <CartContextProvider></CartContextProvider>
      </div>
    </HashRouter>
  );
}

export default App;
