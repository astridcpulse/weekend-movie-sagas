import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import './MovieList.css'
import { red } from '@mui/material/colors';
import { Box, ThemeProvider, createTheme } from '@mui/material';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    

    return (
        <main>
            

            <section className="movies">
                {movies.map(movie => {
                    return (
                       
                        <Box sx={{ 
                            p: 3,
                            '&:hover': {
                            opacity: [0.9, 0.8, 0.7],
                            },
                            }}
                            >
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img 
                                onClick={() => history.push(`/${movie.id}`)} 
                                src={movie.poster} 
                                alt={movie.title}
                            />
                           
                        </div>
                        </Box>
                        
                    );
                })}
            </section>
            
        </main>

    );
}

export default MovieList;