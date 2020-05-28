import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import InputPage from './components/addTask/AddingTaskPage';
import ListScreen from './components/taskList/TaskListPage';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/Header';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/addTask" component={InputPage} />
        <Route path="/list" component={ListScreen} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
