import { Switch, Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupPage from './pages/NewMeetup';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout';
import MainNavigation from './components/layout/MainNavigation';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact><AllMeetupsPage /></Route>
        <Route path="/new-meetup"><NewMeetupPage /></Route>
        <Route path="/favorites"><FavoritesPage /></Route>
      </Switch>
    </Layout>
  );
}

export default App;
