import React, {useState} from 'react';
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import HomePage from "./components/HomePage";
import ReviewPage from "./components/ReviewPage"
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormContext from './data/contexts';

function App() {
  const history = useHistory();
  //const location = useLocation();
  const [formContext, setFormContext] = useState(FormContext);
  const RouterRender = () => {
    return (
      <FormContext.Provider value={[formContext, setFormContext]}>
      <Switch>
        <Route exact path={`/`}>
          <HomePage/>
        </Route>
        <Route path="/hotel-reviews">
          <ReviewPage/>
        </Route>
      </Switch>
      </FormContext.Provider>
    )
  }
  return (
    <div className="App">
      <RouterRender/>
    </div>
  );
}

export default App;
