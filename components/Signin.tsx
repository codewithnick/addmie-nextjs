"use client"
import { useState } from 'react';
import axios from 'axios';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function   In() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errormessage,setErrormessage] =useState('');
  const handleSubmit = (event:any) => {
    event.preventDefault();
    axios( {
      method: 'post',
      url:'http://localhost:3000/api/user/login',
      headers: { 'Content-Type': 'application/json',username,password},
      data:{}
    }).then((response)=>{
      if(response.status===200)
      {
        document.cookie="username:"+username+";";
        document.cookie="token:"+response.data.token+";";
        console.log('user logged in sucessfully');
        setErrormessage('');
      }
      else{
        setErrormessage(response.data.message??"Some error occured");
        console.error(response);
      }
    }).catch(e => {
      const errormsg=e.response.data.message??"Some Error Occured";
      setErrormessage(errormsg);
      console.log(e);
  });
  };
  const handleUsernameChange = (event:any) => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = (event:any) => {
    setPassword(event.target.value);
  }

  return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            p:3,
            boxShadow:'1',
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          bgcolor={'white'}
        >
          <Avatar sx={{ m: 1, bgcolor: 'Blue' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" color={'black'}>
            Sign In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  onChange={handleUsernameChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onChange={handlePasswordChange}
                />
              </Grid>

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleSubmit}
            >
              Sign In
            </Button>
            <Typography color={'red'} fontSize={14}>
              {errormessage}
            </Typography>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Not a user ? Sign up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    
  );
}
