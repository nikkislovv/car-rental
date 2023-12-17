import { useContext, useEffect, useState } from "react";
import { useFetching } from '../../hooks/useFetching';
import CatalogService from '../../API/CatalogService';
import '../../styles/Home.css';
import CarList from "../CarList";
import Loader from "../Loader";
import CarFilter from "../CarFilter";
import { useCars } from "../../hooks/useCars";
import AppPagination from "../AppPagination";
import { getPageCount } from "../../utils/pages";
import RentModal from "../RentModal";
import CreateRentForm from "../CreateRentForm";

const Home = () => {
  const [cars,setCars]= useState([])

  const [filter, setFilter] = useState({sort: '', query: ''})

  const sortedAndSearchedCars = useCars(cars, filter.sort, filter.query)

  const [totalPages, setTotalPages] = useState(0)
  const [pageSize, setPageSize] = useState(4)
  const [pageNumber, setPageNumber] = useState(1)

  const [modal, setModal] = useState(false)

  const [selectedCar, setSelectedCar] = useState({})

  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await CatalogService.getAll(pageNumber, pageSize);
    setCars(response.data)
    const totalCount = JSON.parse(response.headers["pagination"])["TotalCount"]
    setTotalPages(getPageCount(totalCount, pageSize))
  })

  useEffect( () => {
    fetchPosts()
  },[pageNumber])

  const changePage = (page) => {
    setPageNumber(page)
  }
  
  return (
    <div>
      {
       postError 
          ? <h1>Произошла ошибка ${postError}</h1>
          :   
            isPostLoading
              ? <div style={{display: 'flex',justifyContent: 'center', marginTop: 50}}><Loader/></div>
              : 
                <div className="App">
                  <RentModal visible={modal} setVisible={setModal}>
                    <CreateRentForm selectedCar={selectedCar} setVisible={setModal}/>
                  </RentModal>
                  <CarFilter
                  filter={filter}
                  setFilter={setFilter}
                  />
                  <CarList cars={sortedAndSearchedCars} setVisible={setModal} setSelectedCar={setSelectedCar}/>
                  <AppPagination 
                    totalPages={totalPages} 
                    changePage={changePage} 
                    pageNumber={pageNumber}
                  />
                </div>         
      }
    </div>
  );
}


export default Home;