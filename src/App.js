import './App.css';
import AppBar from './Components/AppBar';
import {Load} from './Components/Loader/Loader.js';
import {React, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

// import HomePage from './pages/HomePage/HomePage.js';
// import MoviesPage from './pages/MoviesPage/MoviesPage.js';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage.js';


const HomePage = lazy(() =>
  import(
    "./pages/HomePage/HomePage.js" /* webpackChunkName: "home-page" */),
);

// const MovieDetailsPage = lazy(() =>
//   import(
//     "./pages/MovieDetailsPage/MovieDetailsPage.js" /* webpackChunkName: "movie-details-page" */),
// );

const MoviesPage = lazy(() =>
  import(
    "./pages/MoviesPage/MoviesPage.js" /* webpackChunkName: "movies-page" */),
);

const NotFoundPage = lazy(() => 
  import(
    "./pages/NotFoundPage/NotFoundPage.js" /* webpackChunkName: "not-found-page" */),
);


const App = () => {
  return (
    <>
    <AppBar />

    <Suspense fallback={<Load />}>

     <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          {/* <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route> */}

          <Route >
            <NotFoundPage  />
          </Route>
      </Switch>
    </Suspense>
    </>
  )
}

export default App;
