import React, { useState, useEffect } from 'react'
import Paper from '@mui/material/Paper';
import { useParams } from 'react-router';
import Shoe from "../Data/Data.json"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';


function ProductDetails() {
    const { key } = useParams();
    const [ShoeInfo, setShoeInfo] = useState({})

    useEffect(() => {
        Object.keys(Shoe).map((shoe) => {
            if (shoe == key) {
                setShoeInfo(Shoe[shoe])
            }
        })
        console.log(ShoeInfo)
    }, [ShoeInfo])

    return (
        <div style={{ padding: '20px' }}>
            <Paper sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', padding: '20px' }} elevation={6} >
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <KeyboardBackspaceRoundedIcon style={{ margin: '10px', color: 'steelblue' }} />
                    </Link>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                    <Box component="div" sx={[styles.productImg, { minWidth: '250px', width: '45%', height: '80vh', margin: '8px' }]}>
                        <img width='100%' height='100%' src={ShoeInfo.img} />
                    </Box>
                    <Box component="div" sx={[styles.ProductDetails, { minWidth: '200px', fontSize: '16px', padding: '20px', width: '45%', margin: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'start' }]}>
                        <Typography variant="h3" sx={{ fontWeight: '900', marginBottom: '40px', color:'steelBlue' }} component="div" gutterBottom>
                            {ShoeInfo.name}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom component="div">
                            <span style={{ fontWeight: 700 }}> PRICE :</span> 1200$
                        </Typography>
                        <Typography sx={{ fontWeight: 700 }} variant="button" display="block" gutterBottom>
                            DESCRIPTION :
                        </Typography>
                        <Typography sx={{ fontWeight: 500, textAlign: 'justify' }} variant="button" display="block" gutterBottom>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
                            blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
                            neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
                            quasi quidem quibusdam.
                        </Typography>
                        <Button sx={{ width: '200px', padding: '10px', backgroundColor: 'steelBlue', marginTop: '40px' }} variant="contained">Order Now</Button>
                    </Box>
                </div>
            </Paper>
        </div>
    )
}

export default ProductDetails

const styles = {
    productImg: {
        ['@media (max-width:868px)']: {
            width: '100%',
            // height: '50vh'
        },
        ['@media (max-width:400px)']: {
            height: '50vh'
        }
    },
    ProductDetails: {
        ['@media (max-width:868px)']: {
            width: '100%',
        }
    }
}