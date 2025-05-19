
import './App.css';
import Welcome from "./components/welcome/Welcome";
import About from "./components/about/About";
import Work from './components/work/work';
import Faq from "./components/faq/Faq";
import Reviews from "./components/reviews/Reviews";
import Contacts from "./components/contacts/Contacts";
import Services from './components/services/Services';
import Top from './components/top/Top';
import Call from './components/call/call';


function App() {

    return (
        <div className="App">
            <Welcome/>
            <About />
            <Services />
            <Work/>
            <Faq />
            <Reviews />
            <Contacts />
            <Call/>
            <Top/>
        </div>
    );
}

export default App
