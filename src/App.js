import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/myportfolio">Haruki Tsuchiya</Link>} scroll>
                <Navigation>
                    <Link to="/myportfolio/resume">Resume</Link>
                    <Link to="/myportfolio/projects">Projects</Link>
                    <Link to="/myportfolio/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/myportfolio">Haruki Tsuchiya</Link>}>
                <Navigation>
                    <Link to="/myportfolio/resume">Resume</Link>
                    <Link to="/myportfolio/projects">Projects</Link>
                    <Link to="/myportfolio/contact">Contact</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>
  );
}

export default App;
