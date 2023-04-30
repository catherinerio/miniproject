

import React from 'react';
import './App.css';
import { Grid, TextField, Card, CardContent, Typography, MenuItem, InputLabel, FormControl, Select} from '@mui/material';
// import Select from '@mui/material/Select';

function App() {
  // const [name, setName] = React.useState("");
  const [selectedFile, setSelectedFile] = React.useState(null);
  const {value, setValue} = React.useState();
  
if (value) {
  return (
    <>
      <div className="text-2xl">Thank you!</div>
      <div className="text-md">We'll be in touch soon.</div>
    </>
  );
}

  return (
    <div className="App"> 
      <Typography gutterBottom variant="h3" align="center">
        Meydit
       </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact Us
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
              <TextField label="First name" placeholder='Enter your First Name' variant='outlined' name='firstName' fullWidth required></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label="Last name" placeholder='Enter your Last Name' variant='outlined' fullWidth required></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField type='number' label="Phone Number" placeholder='Enter your Phone number' variant='outlined' fullWidth required></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField type='email' label="Email Address" placeholder='Enter your Email Address' variant='outlined' fullWidth required></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField label="Address" placeholder='Enter your Address' variant='outlined' fullWidth required></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label="City" placeholder='City' variant='outlined' fullWidth required></TextField>
            </Grid>
            <Grid xs={12} sm={6} item>
              <TextField label="Postcode" placeholder='Postcode' variant='outlined' fullWidth required></TextField>
            </Grid>
            
            <Grid xs={12} sm={6} item fullWidth>
            <FormControl fullWidth>
              <InputLabel>Clothing</InputLabel>
              <Select value={value} label="Clothing" handleChange={(e)=>setValue(e.target.value)}>
                <MenuItem value={'Saree'} >Saree</MenuItem>
                <MenuItem value={'Blouse'}>Blouse</MenuItem>
                <MenuItem value={'Dress'}>Dress</MenuItem></Select></FormControl>
            </Grid>
            <Grid xs={12} sm={6} item fullWidth>
            {/* <input type="text" value={name} handleChange={(e) => setName(e.target.value)}/> */}
            <input type="file" variant="contained" value={selectedFile} handleChange={(e) => setSelectedFile(e.target.files[0])}/></Grid>
          <Grid xs={12} item>
              <TextField label="Message" multiline rows={2} placeholder='Enter your description' variant='outlined' fullWidth required></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField label="Specify the Budget (optional)" placeholder='Budget' variant='outlined' fullWidth></TextField>
            </Grid>
            <Grid xs={12} item>
              <button type='submit' variant="contained" color='primary' fullWidth>Submit</button>
            </Grid>
          </Grid>
          </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
    
  );
}

export default App;
