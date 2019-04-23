import React from 'react';
import Header from './Header';

class App extends React.Component {
    render() {
        return (
            <div className="App">

                <Header />

                <main className="App-content">
                    <h1>Troy Smith</h1>
                </main>

                <h3>Footer</h3>

            </div >
        )
    }
}

export default App