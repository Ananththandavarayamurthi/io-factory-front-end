import React from 'react';
import MovieList from './components/MovieList';
import MovieForm from './components/MovieForm';
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import "./App.css"
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';


const App = () => {
  const navigate = useNavigate();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div className="nav-flex">
            <div className="nav-btn">
              <Button color="inherit" onClick={() => navigate("/")}>
                Home
              </Button>
              <Button color="inherit" onClick={() => navigate("/addmovie")}>
                Add Movie
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      
        <Routes>
          <Route path="/addmovie" element={<MovieForm />} />
          <Route path="/" element={<MovieList />} />
        </Routes>
      
    </div>
  );
};

export default App;
