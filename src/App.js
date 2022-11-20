import "./App.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import Main from "./components/Main";


function App() {
    return (
        <>
            <header>
                <Header />
            </header>

            <main>
                <Main />
                <Info />
            </main>

            <footer>
                <Footer />
               
            </footer>
        </>
    );
}

export default App;
