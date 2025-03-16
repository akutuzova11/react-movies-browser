import {
  HashRouter,
  Redirect,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import { Provider } from "react-redux";
import { store } from "./store";
import { Navigation } from "../common/components/Navigation";
import MovieList from "../features/movies/MovieList/index";
import MoviePage from "../features/movies/MoviePage";
import PeopleList from "../features/people/PeopleList";
import PersonPage from "../features/people/PersonPage";
import { toMovieList, toMoviePage, toPeopleList, toPersonPage } from "./routes";
import ScrollToTop from "../common/components/ScrollToTop";

export const App = () => (
  <Provider store={store}>
    <HashRouter>
      <ScrollToTop />
      <Navigation />
      <Switch>
        <Route path={toMoviePage()}>
          <MoviePage />
        </Route>
        <Route path={toPersonPage()}>
          <PersonPage />
        </Route>
        <Route path={toMovieList()}>
          <MovieList />
        </Route>
        <Route path={toPeopleList()}>
          <PeopleList />
        </Route>
        <Route path="/">
          <Redirect to={toMovieList()} />
        </Route>
      </Switch>
    </HashRouter>
  </Provider>
);
