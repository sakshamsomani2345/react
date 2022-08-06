import React, { useState} from "react";
import { Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  AppBar,
  Typography,
  Toolbar,
  Box,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { authActions } from "../store";
const Header = () => {
  const dispatch=useDispatch();
    const [value,setvalue]=useState();
    const isLoggedIn=useSelector(state=>state.isLoggedIn);
  return (
    <AppBar
    position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(58,75,180,1) 2%, rgba(116,49,110,1) 36%, rgba(2,0,161,1) 73%, rgba(69,92,252,1) 100%)",
      }}
    >
      <Toolbar>
        <Typography variant="h4">Blogs App</Typography>
       {isLoggedIn && <Box display="flex"marginLeft="auto" marginRight="auto"
        >
            <Tabs 
             textColor="inherit"
            value={value} onChange={(e,val)=>setvalue(val)}>
                <Tab LinkComponent={Link} to ='/blogs' label="All Blogs"/>
                <Tab LinkComponent={Link} to ='/myBlogs'label="My Blogs"/>
                <Tab LinkComponent={Link} to ='blogs/add'label="Add Blog"/>

            </Tabs>
        </Box>}
        <Box display="flex" marginLeft="auto">
         {!isLoggedIn && <><Button
          LinkComponent={Link} to ='/auth'
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Login
          </Button>
          <Button
          LinkComponent={Link} to ='/auth'
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Sign Up
          </Button></>}
       {  isLoggedIn && <Button
       onClick={()=>dispatch(authActions.logout())}
          LinkComponent={Link} to ='/auth'
            variant="contained"
            sx={{ margin: 1, borderRadius: 10 }}
            color="warning"
          >
            Log Out
          </Button>}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
