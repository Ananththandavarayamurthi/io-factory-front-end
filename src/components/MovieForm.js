import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addMovie } from '../actions/movieActions';
import { fetchProducers } from '../actions/producerAction';
import { fetchActors } from '../actions/actors';
import ProducerForm from "./ProducerForm";
import ActorsForm from "./ActorsForm"
import { TextField, Button } from '@mui/material';
import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
  } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const MovieForm = () => {
    const [name, setName] = useState('');
    const [year, setYear] = useState('');
    const [producer, setProducer] = useState('');
    const [actors, setActors] = useState([]);
    const [poster, setPoster] = useState('');
    const [producerfor,setproducerfrom]=useState(true);
    const [actorfor,setactorfrom] = useState(true)
  
    const dispatch = useDispatch();
    const producers = useSelector((state) => state.producers.producers);
    const actorsList = useSelector((state) => state.actors.actors);
 
 
 
    useEffect(()=>{
      dispatch(fetchProducers());
      dispatch(fetchActors())
  },[dispatch])
  
    const handleActorChange = (e, index) => {
      const updatedActors = [...actors];
      updatedActors[index] = e.target.value;
      setActors(updatedActors);
    };
   
  
    const handleAddActor = () => {
      setActors([...actors, '']);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const movieData = {
        name,
        yearOfRelease:Number(year),
        producer,
        actors,
        poster
      };
      dispatch(addMovie(movieData));
      // Reset form fields after submitting
      setName('');
      setYear('');
      setProducer('');
      setActors([]);
      setPoster('')
  
      // Show a success toast
      toast.success('Movie added successfully!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    };
   
    return (
        
        
      <div>
         <span style={{ display: 'flex',flexDirection: "column",alignItems: "flex-end" }}>
          <h4>If producer not existing in the list, add</h4>
          <Button  variant="contained" color="primary"
           onClick={()=>setproducerfrom(!producerfor)}>
            Add Producer
          </Button>
          {producerfor?null:<ProducerForm/>}
          
        </span>
        <span style={{ display: 'flex',flexDirection: "column",alignItems: "flex-end" }}>
          <h4>If actor not existing in the list, add</h4>
          <Button  variant="contained" color="primary"
           onClick={()=>setactorfrom(!actorfor)}>
            Add actor
          </Button>
          {actorfor?null:<ActorsForm/>}
          
        </span>
        
        <h2>Add New Movie</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <TextField
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Year:</label>
            <TextField
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
            />
          </div>
          <div>
          <label>Poster:</label>
          <TextField
            type="text"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
            required
          />
        </div>
          <div>
          <label>Producer:</label>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel>Producer:</InputLabel>
            <Select value={producer} onChange={(e) => setProducer(e.target.value)} required>
              <MenuItem value="">
                <em>Select a Producer</em>
              </MenuItem>
              {producers.map((producer) => (
                <MenuItem key={producer.name} value={producer.name}>
                  {producer.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
           
           
          
</div>

<div>
  
  <label>Actors:</label>
          {actors.map((actorId, index) => (
            <div key={index}>
              <FormControl sx={{ m: 1, minWidth: 200 }}>
                <InputLabel>Select an Actor</InputLabel>
                <Select value={actorId} onChange={(e) => handleActorChange(e, index)} required>
                  <MenuItem value="">
                    <em>Select an Actor</em>
                  </MenuItem>
                  {actorsList.map((actor) => (
                    <MenuItem key={actor.name} value={actor.name}>
                      {actor.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          ))}
  <button type="button" onClick={handleAddActor}>
    Add Actor
  </button>
</div>

          <Button type="submit" variant="contained" color="primary">
            Add Movie
          </Button>
        </form>
  
        {/* Add the ToastContainer to show toasts */}
        <ToastContainer />
      </div>
    );
  };
  
  export default MovieForm;
  