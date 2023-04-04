import React from 'react'
import cars from '../cars.json'
// Import {useParams} from "react-router-dom" here //
import { useParams } from 'react-router-dom'
// import MUI components here //
import { Container, Paper, Chip } from "@mui/material";


const Car = (props) => {
    const carId = useParams().id
    const thisCar = cars.find((car) => car.id === Number(carId))
    console.log(thisCar)
    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h1>{thisCar.Name.toUpperCase()}</h1>
                {Object.keys(thisCar).map((key, idx) => {
                    return <Chip key={idx} label={`${key}: ${thisCar[key]}`}></Chip>;
                })}
            </Paper>
        </Container>
    )
}

export default Car