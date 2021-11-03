import {useState, useEffect, Suspense } from 'react';
import { Route, NavLink, useParams, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import { fetchGetMovieDetails } from '../../serv/moviesApi.js';
import { Load } from '../../Components/Loader/Loader.js';
import s from "./MovieDetailsPage.module.css";

// const Review = lazy(() =>
//   import("./ReviewsView" /* webpackChunkName: "review-view" */)
// );
// const Cast = lazy(() =>
//   import("./CastView" /* webpackChunkName: "cast-view" */)
// );


export default function MovieDetailsPage() {

    const history = useHistory();
    const location = useLocation();
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const { url, path } = useRouteMatch();

    useEffect(() => {
        fetchGetMovieDetails(movieId).then((movie) => {
            setMovie(movie);
        });
    }, [movieId]);

    const onScrollPage = () => {
        setTimeout(() => {
            window.scrollTo({
                top: document.documentElement.clientHeight,
                behavior: "smooth",
            });
        }, 1200);
    };
    const handleGoBack = () => {
        history.push(location?.state?.from?.loction ?? "/");
    };

    return (
        <>
        {movie && (
          <>
            <div>
              <button onClick={handleGoBack} type="button" className={s.movieBack} >
              ← Go back
              </button>
              <div className={s.movie}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className={s.moviePage}>
                  <h1>{movie.title}</h1>
                  <p>Rating: {movie.vote_average} </p>
                  <h3>Overview</h3>
                  <p>{movie.overview}</p>
                  <h3>Genres</h3>
                  <p>{movie.genres.map((genre) => genre.name).join(" , ")}</p>
                </div>
              </div>
              <div className={s.moviePage}>
                <h3>Additional information</h3>
                <ul>
                  <li>
                    <NavLink
                      onClick={() => {
                        onScrollPage();
                      }}
                      to={{
                        pathname: `${url}/cast`,
                        state: { from: location?.state?.from ?? "/" },
                      }}
                      className={s.movieInfo}
                    >
                      Cast
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={() => {
                        onScrollPage();
                      }}
                      to={{
                        pathname: `${url}/reviews`,
                        state: { from: location?.state?.from ?? "/" },
                      }}
                      className={s.movieInfo}
                    >
                      Reviews
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <Suspense fallback={<Load />}>
              <Route path={`${path}/cast`}>
                {/* <Cast movieId={movieId} /> */}
              </Route>
              <Route path={`${path}/reviews`}>
                {/* <Review movieId={movieId} /> */}
              </Route>
            </Suspense>
          </>
        )}
      </>
    );
  }