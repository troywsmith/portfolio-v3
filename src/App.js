import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div className="App">

                <h3>Header</h3>
                {/* <Header cartTotal={this.state.cartTotal} />
                <NavTop /> */}

                <main className="App-content">
                    <h1>Main Content</h1>
                    {/* <Switch> */}
                    {/* <Route exact path="/" component={PageHome} cartTotal={this.state.cartTotal}/> */}
                    {/* <Route exact path="/" render={() => <PageHome state={this.state} categories={this.state.categories} products={this.state.products} cartTotal={this.state.cartTotal} />} /> */}
                    {/* 
                        <Route exact path='/' render={(props) => (
                            <PageHome {...props} app_state={this.state} />
                        )} /> */}

                    {/* <Route path="/products" render={() => <PageProducts categories={this.state.categories} products={this.state.products} cartTotal={this.state.cartTotal} />} /> */}
                    {/* <Route path="/products/:category" render={() => <PageProducts app_state={this.state} />} /> */}
                    {/* <Route path='/products/:category/:subcategory' render={(props) => (
                            <PageProducts {...props} app_state={this.state} />
                        )} /> */}

                    {/* <Route path="/account" component={PageAccount} />
                <Route path="/product/:id" component={PageProduct} /> */}
                    {/* <Route component={PageHome} /> */}
                    {/* </Switch> */}
                </main>

                {/* <Footer /> */}
                <h3>Footer</h3>

            </div >
        )
    }
}

export default App