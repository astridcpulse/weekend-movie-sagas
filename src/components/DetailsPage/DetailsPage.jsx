import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Button } from '@mui/material';
// import { red } from '@mui/material/colors';
import { ThemeProvider, createMuiTheme, Typography } from '@mui/material';
import {axios} from 'axios';

function DetailsPage(){
    const [thisMovie, setThisMovie] = useState('');
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();
    const chosenMovie = ( movies.find((movie) => {
        if(movie.id == params.id){
            return movie;
        }
    }))

    console.log('genres', genres);

    useEffect(() => {
        setThisMovie(chosenMovie);
        dispatch({ type: 'FETCH_MOVIES' });
        dispatch({
            type: 'GET_GENRES',
            payload: params.id
        })
    
    },[params.id])

    
    return(
        <>

           <Typography 
                variant="h3"
                align='center'
            > {thisMovie.title}</Typography>
           <img src={thisMovie.poster} />
           <h3>Genres:</h3>
           {genres && genres.map(genre => 
                <p>{genre.name}</p>
            )}
            <h4>Description:</h4>
           <p>{thisMovie.description}</p>

           
           <Button 
                variant='contained'
                
                onClick={()=> history.push('/')}>Go Back</Button>
            
        </>
    );

}

export default DetailsPage;