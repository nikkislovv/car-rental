import React from "react"
import CarItem from "./CarItem";

const CarList = ({cars, setVisible, setSelectedCar}) => {

  if(!cars.length) {
    return (
      <h1 style={{textAlign: "center", marginTop: "50px"}}>
        Машины не найдены!
      </h1>
    )
  }

  return (
    <div>
      {cars.map((car) => (
        <CarItem car={car} key={car.id} setVisible={setVisible} setSelectedCar={setSelectedCar}/>
      ))}
    </div>
  )
};

export default CarList;
