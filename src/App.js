import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DetailFilm from './pages/DetailFilm';
import Home from './pages/Home';
import { useState } from 'react';
function App() {
  const [loading, setLoading] = useState(false);
  return (
    <Router>
      <div className="container pt-5">
        <Switch>
          <Route path="/detail/:id">
            <DetailFilm setLoading={setLoading} />
          </Route>
          <Route exact path="/">
            <Home setLoading={setLoading} />
          </Route>
        </Switch>
        {loading ? (
          <div>
            <div class="spinner-grow text-dark d-block mx-auto" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
            <h6 className="text-center pt-2">Loading ...</h6>
          </div>
        ) : (
          ''
        )}
      </div>
    </Router>
  );
}

export default App;
