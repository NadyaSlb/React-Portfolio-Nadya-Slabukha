import { React, useState } from 'react';
import Header from '../components/Header';
import Projects from '../components/Projects';
import About from '../components/About';
import Footer from '../components/Footer';
import { Container } from 'react-bootstrap';
function Home() {

    const [activeTab, setActiveTab] = useState("projects")

    const renderComponent = () => {
        switch (activeTab) {
            case "projects":
                return <Projects />
                break;
            // case "contact":
            //     return <Contact/>
            //     break;

            default:
                return <About />
                break;
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
