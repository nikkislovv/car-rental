import React, { useState } from "react"
import TextField from '@mui/material/TextField';
import RentCommandService from "../API/RentCommandService";

const CreateRentForm = ({selectedCar, setVisible}) => {

    const [start, setStart] = useState()
    const [finish, setFinish] = useState()

    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection:"column"}}>
            <h1>Открытие аренды</h1>
            <img src={selectedCar.image} style={{ height: 120, width: 200 }}></img>
            <TextField
                id="datetime-local"
                label="С"
                onChange={e => setStart(e.target.value)}
                type="datetime-local"
                sx={{ width: 250, marginTop: "10px"}}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <TextField
                id="datetime-local"
                label="По"
                onChange={e => setFinish(e.target.value)}
                type="datetime-local"
                sx={{ width: 250, marginTop: "10px" }}
                InputLabelProps={{
                shrink: true,
                }}
            />
            <button 
                style={{border:"4px solid black", marginTop: "10px", minHeight: "30px", minWidth:"100px"}} 
                onClick={() => {RentCommandService.create(start, finish, selectedCar.id); setVisible(false)}}
            >
                Открыть аренду
            </button>
        </div>
    )
};

export default CreateRentForm;