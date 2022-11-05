import { useDispatch, useSelector } from 'react-redux';
import {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {axios} from 'axios';

function DetailsPage(){
    const [thisMovie, setThisMovie] = useState('');
    const movies = useSelector(store => store.movies);
    const genres = useSelector(store => store.genres);

    const dispatch = useDispatch();
    const params = useParams();
    const chosenMovie = ( movies.find((movie) => {
        if(movie.id == params.id){
            return movie;
        }
    }))


    useEffect(() => {
        setThisMovie(chosenMovie);
        dispatch({
            type: "GET_GENRES",
            payload: params.id
        })
    
    },[params.id])


    return(
        <>
            <h1> details page</h1>
           <h1> {thisMovie.title}</h1>
           <img src={thisMovie.poster} />
           
    );

}

export default DetailsPage;