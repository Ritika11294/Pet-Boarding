
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

export function Entity() {

    const { id } = useParams();
    const [detail, setDetail] = useState({});

    useEffect(() => {
        getListDetails()
    }, [])

    const getListDetails = () => {
        axios.get(` http://localhost:8080/entities/${id}`).then((res) => {
            setDetail(res.data)
        })
    }

    return (
        <Card sx={{ maxWidth: 345 }} style={{ margin: "auto", marginTop: "20px" }}>
            {/* <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      /> */}
            <CardContent>
                {/* <Typography gutterBottom variant="h5" component="div">
          {detail.image}
        </Typography> */}

                <Typography variant="h5" color="Black">
                    {detail.title}
                </Typography>
                <br />
                <Typography variant="body2" color="black">
                    Number of pets that will be watched at one time.
                </Typography>

                <Typography variant="body2" color="text.secondary">
                    {detail.petSize}
                </Typography>
                <br />
                <Typography variant="body2" color="black">
                    Accepted Pet Types
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {detail.petType}
                </Typography>
                <br />
                <Typography variant="body2" color="black">
                    Accepted Pet Size
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {detail.weight}
                </Typography>
                <br />
                <Typography variant="body2" color="black">
                    Level of adult supervision.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {detail.adultSupervision}
                </Typography>
                <br />
                <Typography variant="body2" color="black">
                    The place your pet will sleep at night.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {detail.sleepingPlace}
                </Typography>
                <br />
                <Typography variant="body2" color="black">
                    The number of potty breaks provided per day.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {detail.pottyBreaks}
                </Typography>
                <br />
                <Typography variant="body2" color="black" >
                    The number of walks provided per day.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {detail.numberOfWalks}
                </Typography>
                <br />
                <Typography variant="body2" color="black">
                    The type of home I stay in.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {detail.typeOfHome}
                </Typography>
                <br />
                <Typography variant="body2" color="black">
                    My outdoor area size.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {detail.outdoorSize}
                </Typography>
                <br />
                <Typography variant="body2" color="black">
                    Emergency transport.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {detail.transport}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
