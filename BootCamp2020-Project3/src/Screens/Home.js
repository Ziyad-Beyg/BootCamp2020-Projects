import React from 'react';
import ShoeCard from "../Components/ShoeCard";
import Shoes from "../Data/Data.json"
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div style={{ margin: "0 auto", textAlign: 'center', padding: '20px' }}>
            <h1 style={{ color: 'steelblue', fontSize: '5rem', margin: '0px' }}>
                ALL SHOES
            </h1>


            <Paper sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }} elevation={6} >
                {
                    Object.entries(Shoes).map(([Key, { name, img }]) =>
                        <Link style={{ width: '30%', minWidth: '300px', margin: '20px', textDecoration: 'none' }} key={Key} to={`/productDetails/${Key}`}>
                            <ShoeCard shoeImg={img} shoeName={name} />
                        </Link>
                    )
                }
            </Paper>


        </div>
    )
}

export default Home
