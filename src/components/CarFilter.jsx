import React from "react"
import Input from "./Input";
import Selector from "./Selector";

const CarFilter = ({filter, setFilter}) => {
  return (
    <div>
        <Input
          value={filter.query}
          onChange={e => setFilter({...filter, query: e.target.value})}
          placeholder="Поиск..."
        />
        <Selector
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Сортировка"
          options={[
            {value: "rentPrice", name: "По стоимости"},
            {value: "releaseYear", name: "По году выпуска"},
          ]}
        />
      </div>
  )
};

export default CarFilter;
