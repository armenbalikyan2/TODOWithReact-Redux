import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import InputPage from './components/addTask/AddingTaskPage';
import ListScreen from './components/taskList/TaskListPage';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Header from './components/common/header/Header';
import PageNotFound from './PageNotFound';
import EditScreen from './components/editTask/EditTaskPage';


function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/add-task" component={InputPage} />
        <Route path="/list" component={ListScreen} />
        <Route path="/:type/:id" component={EditScreen} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
