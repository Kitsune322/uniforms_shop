import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import ProductList from './components/body/body';

function App() {
    return (
        <div>
            <Header />

            <ProductList />

            <Footer />
        </div>
    );
}

export default App;
