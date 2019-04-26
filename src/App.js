import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/main.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">

                <Header />

                <main className="App-content">
                    <h1>Troy Smith</h1>
                    <h2>TEST</h2>
                </main>

                <Footer />

            </div >
        )
    }
}

export default App