import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import InputPage from './components/addTask/AddingTaskPage';
import ListScreen from './components/taskList/TaskListPage';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import PageNotFound from './PageNotFound';
import EditScreen from './components/editTask/EditTaskPage';
import { Layout } from 'antd';
import HeaderComponent from './components/common/header/Header';

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <div className="App">
      <Layout className="layout">
        <Header>
          <HeaderComponent />
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/add-task" component={InputPage} />
            <Route path="/list" component={ListScreen} />
            <Route path="/:type/:id" component={EditScreen} />
            <Route component={PageNotFound} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2020 Created by Armen Balikyan
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
