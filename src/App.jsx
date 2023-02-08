import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import LocationInfo from './components/LocationInfo'
import Pagination from './components/Pagination'
import ResidentForm from './components/ResidentForm'
import ResidentList from './components/ResidentList'
import { getRandomNumber } from './utils/handleRandom'



const RESIDENTS_PERPAGE = 12;

function App() {
  //Estado que almacena la informacion de la location
  const [location, setLocation] = useState()
  //Estado que almacena la informacion del input no controlado
  const [nameLocation, setNameLocation] = useState("")

  // Estado que es el valor de la pagina (tenemos un arreglo con residentes[] y ResidentsPerPage=N)
  const [page, setPage] = useState(1)

  //Funcion que se ejecuta en el submit del form
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.idLocation.value)
    setNameLocation(e.target.idLocation.value)
    e.target.reset()
  }
  
  //Funcion que se encarga de ubicar a los residentes por pagina
  const pagination = () => {
    if (!location) return []
    const maxLimit = RESIDENTS_PERPAGE * page
    const minLimit = maxLimit - RESIDENTS_PERPAGE
    const newResidents = location?.residents.slice(minLimit, maxLimit)
    return newResidents
  }


  //Effecto que se ejecuta en el primer render y cuando cambia nameLocation (repite la peticion)
  useEffect(() => {
    setPage(1)
    const dimension = nameLocation === "" ? getRandomNumber(126) : nameLocation
    console.log(nameLocation)
    const URL = `https://rickandmortyapi.com/api/location/${dimension}`
    axios.get(URL)
      .then((res) => setLocation(res.data))
      .catch((err) => console.log(err))
  }, [nameLocation])


  return (

    <div className="App">
      <ResidentForm handleSubmit={handleSubmit} />
      <LocationInfo location={location} />
      <Pagination
        location={location}
        RESIDENTS_PERPAGE={RESIDENTS_PERPAGE}
        page={page}
        setPage={setPage} />
      <ResidentList pagination={pagination} />
      <Pagination
        location={location}
        RESIDENTS_PERPAGE={RESIDENTS_PERPAGE}
        page={page}
        setPage={setPage} />
    </div>

  )
}

export default App
