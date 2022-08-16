import { React, useState } from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Resume from '../components/Resume';
import { Container } from 'react-bootstrap';
function Home() {

    const [activeTab, setActiveTab] = useState("about")

    const renderComponent = () => {
        switch (activeTab) {
            case "projects":
                return <Projects />
            case "contact":
                return <Contact/>
                case "resume":
                    return <Resume/>
            default:
                return <About />
        }
    }

    const changeTab = (tab) => setActiveTab(tab)

    return (
        <Container fluid>
            <Header activeTab={activeTab} changeTab={changeTab} />
            {renderComponent()}
            <Footer />
        </Container>

    );
}

export default Home;
