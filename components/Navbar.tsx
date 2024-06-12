"use client"
import { AppBar, Toolbar, Typography } from "@mui/material";
import NextLink from 'next/link';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Search from '@mui/icons-material/Search';
import { useRouter } from 'next/navigation';

export default function Navbar(){
  const router = useRouter();
    return (
        <AppBar className="app-bar" style={{
            position:'sticky',
            margin:'0px',
            marginBottom:'15px'
          }}>
            <Toolbar style={{
              display:"flex",
              alignItems:"center",
              justifyContent:"space-evenly"
            }}>
              <ArrowBackIcon
                htmlColor="white"
                fontSize="large"
                onClick={() => router.back()}
                style={{ cursor: 'pointer' }}
              />
              <NextLink href="/user/profile" passHref>
                <Search htmlColor="white" fontSize={"large"}></Search>
              </NextLink>
              <Typography variant="h6" component="div">
                Addmie
              </Typography>
              <NextLink href="/user/profile" passHref>
                <MessageIcon htmlColor="white" fontSize={"large"}></MessageIcon>
              </NextLink>
              <NextLink href="/user/profile" passHref>
                <AccountBoxIcon htmlColor="white" fontSize={"large"}></AccountBoxIcon>
              </NextLink>
            </Toolbar>
          </AppBar>
    );
}

