import React, {  useState } from 'react';
import {  useDispatch } from 'react-redux';

import { addActor} from '../actions/actors';
import { TextField, Button } from '@mui/material';
import {
    InputLabel,
    MenuItem,
    FormControl,
    Select,
  } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ActorsForm() {
    const [name, setName] = useState('');
    const [dob,setDob]=useState('');
    const [gennder,setGender]=useState("");
    const [bio,setBio]=useState("");
   const gen=['Male', 'Female', 'Other'];
   const dispatch = useDispatch();
   const handleSubmit=async (e)=>{
    e.preventDefault();
    const actorsData = {
      name: name,
      dob: dob,
      gender: gennder,
      bio: bio,
    };
    console.log(actorsData)
    try {
        // Dispatch the addProducer action to add the new producer
        await dispatch(addActor(actorsData));
        console.log(actorsData)
        toast.success('actorsData added successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } catch (error) {
        // Handle any errors that occurred during the API call
        toast.error('Failed to add actorsData. Please try again later.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    }
  return (
    <div>
        <h2>Add New Actors</h2>
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
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div>
          <label>BIO:</label>
          <TextField
            type="text"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>
          <div>
          <label>Gender:</label>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel>Actor:</InputLabel>
            <Select value={gennder} onChange={(e) => setGender(e.target.value)} required>
              <MenuItem value="">
                <em>Select a Actor</em>
              </MenuItem>
              {gen.map((gen) => (
                <MenuItem key={gen} value={gen}>
                  {gen}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
</div>



          <Button type="submit" variant="contained" color="primary">
            add actors
          </Button>
        </form>
  
        {/* Add the ToastContainer to show toasts */}
        <ToastContainer />
      </div>
  )
}

export default ActorsForm