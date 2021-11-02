import { Redirect, Route, useParams } from "react-router";
import data from "../dummy-data";
import { Switch } from "react-router";


const Movie = () => {
  const {id} = useParams()
  // Variable berikut akan menampung data movie yang akan kita tampilkan
  const movie = data.find( param => param.mal_id == id );
  if (movie) {
    return (
      <div className="row my-5">
        <div className="card mb-3 p-0">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={movie.image_url}
                className="img-fluid rounded-start"
                alt="skilvul"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <p className="card-text">
                  <small className="text-muted">{movie.score}</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
  else {
    return (
      <Switch>
        <Route path="*">
          <Redirect to="/NotFound">
          </Redirect>
        </Route>
      </Switch>
    )
  }
};

export default Movie;
