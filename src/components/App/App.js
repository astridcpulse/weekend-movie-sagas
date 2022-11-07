import {HashRouter as Router, Route} from 'react-router-dom';
// import './App.css';
import MovieList from '../MovieList/MovieList'
import DetailsPage from '../DetailsPage/DetailsPage'
import { ThemeProvider, createTheme, Typography } from '@mui/material';



function App() {
  return (

    <div className="App">
      <Typography variant="h2">My Movies!</Typography>

      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        <Route path='/:id' exact>
          <DetailsPage />
        </Route>

        {/* Details page */}

        {/* STRETCH: Add Movie page */}
      </Router>
     
    </div>
  );
}


export default App;
