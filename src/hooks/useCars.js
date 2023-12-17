import { useMemo } from "react";

export const useSortedCars = (cars, sort) => {
    const sortedCars = useMemo(() => {
        if(sort) {
          return sort === "rentPrice"
            ? [...cars].sort((a, b) => a[sort] - b[sort])
            : [...cars].sort((a, b) => new Date(a[sort]) - new Date(b[sort]))
        }
        return cars;
      }, [sort, cars])

    return sortedCars;
}

export const useCars = (cars, sort, query) => {
    const sortedCars = useSortedCars(cars, sort);

    const sortedAndSearchedCars = useMemo(() => {
        return sortedCars.filter(car => car.title.toLowerCase().includes(query))
      }, [query, sortedCars])
      console.log(sort)
      console.log(query)
      return sortedAndSearchedCars;
}