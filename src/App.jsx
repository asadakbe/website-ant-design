import React from 'react'
import './App.css';
import { Layout, } from 'antd';
import AppHeader from './components/common/header';
import AppHome from './views/home';
import AppFooter from './components/common/footer';


const { Header, Content, Footer } = Layout;

const App = () => {

  return (
    <>
       <Layout className="mainLayout">
          <Header>
            <AppHeader />
          </Header>
          <Content>
              <AppHome />
          </Content>
          <Footer>
            <AppFooter />
          </Footer>
        </Layout>
    </>
  );
}

export default App;
