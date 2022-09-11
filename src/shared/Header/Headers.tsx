import React, { useEffect, useState } from 'react'
import { GlobalSvgSelector } from '../../assets/icons/global/GlobalSvgSelector'
// import './Header.scss'
import Select from 'react-select'
import { useTheme } from '../../hooks/useTheme'
import { Theme } from '../../context/ThemeContext'
import { Button, Container, Form, Nav, Navbar, NavDropdown  } from 'react-bootstrap';
import makeAnimated from 'react-select/animated';
import AsyncSelect from "react-select/async";
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { selectCurrentCitiesData, selectCurrentWeatherData } from '../../store/selectors'
import { fetchCurrentCities } from '../../store/thunks/fetchCurrentCitites'
import { CitiesService } from '../../services/CitiesService'
import { fetchWeatherLatAndLon } from '../../store/thunks/fetchCurrentWeather'
import * as lodash from "lodash";
import { AsyncPaginate } from "react-select-async-paginate";
import { addCities } from '../../store/slices/CurrentCities/currentCitiesSlice'
import { removeAllWeather, setLoading } from '../../store/slices/currentWeatherSlice'

type Props = {}

const Headers = (props: Props) => {
  const animatedComponents = makeAnimated();
  const theme = useTheme()
  let options = [
    { value: 'chocolate', label: 'Chocolate' , other: 1},
    { value: 'strawberry', label: 'Strawberry', other: 1 },
    { value: 'vanilla', label: 'Vanilla', other: 1 },
    { value: 'siete', label: 'siete', other: 1 },
    { value: 'ocho', label: 'ocho', other: 1 },
    { value: 'uno', label: 'uno', other: 1 },
    { value: 'dos', label: 'dos', other: 1 },
    { value: 'tres', label: 'tres', other: 1 },
    { value: 'cuatro', label: 'cuatro', other: 1 },
    { value: 'cinco', label: 'cinco', other: 1 },
    { value: 'seis', label: 'seis', other: 1 },
  ]

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      // backgroundColor: theme.theme === Theme.DARK ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
      backgroundColor: '#add7ff',
      minWidth: '300px',
      color: '#FFF'
      // width: '900px',
      // height: '37px',
      // border: 'none',
      // borderRadius: '10px',
      // zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: '#FFF'
    }),
  };
  const dispatch = useCustomDispatch();
  const { cities } = useCustomSelector(selectCurrentCitiesData)
  const { weather } = useCustomSelector(selectCurrentWeatherData)
  // console.log("cities", cities)
  // useEffect(()=>{
  //   dispatch(fetchCurrentCities('buenos aires'))
  // }, [])

  useEffect(() => {
    // console.log("effect cties", cities)
  }, [cities])

  useEffect(() => {
    // console.log("effect weather", weather)
  }, [weather])
  

  const [values, setValues] = useState([{}])
  const [searchCities, setSearchCities] = useState([{}])

  // const loadOptions = async (inputValue: any) => {
  //   if (inputValue) {
  //     console.log("query", query)
  //     console.log("call", call)
  //     const response = await fetch(
  //       `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}&rapidapi-key=f4efa35498msh1c7b5fc84555938p144d20jsn1a5cdd58695b`
  //     );
  //     const responseJSON = await response.json();
  //     setCall(false)
  //     console.log({responseJSON})
  //     options = responseJSON?.data?.map((value: any) => {
  //       return {
  //         id: value.id,
  //         value: `${value.city}, ${value.region}`,
  //         label: `${value.city}, ${value.region}`,
  //         lat: value.latitude,
  //         lon: value.longitude,
  //       }
  //     })
  //     console.log("options", options)
  //     setValues(options)
  //     return options;
  //     // return new Promise((resolve, reject) => {
  //     //   // using setTimeout to emulate a call to server
  //     //   setTimeout(() => {
  //     //     resolve(filter(inputValue));
  //     //   }, 2000);
  //     // });
  //   }
  // };

  const loadOptions = async (inputValue: string, callback: any) => {
    if (inputValue) {
      // console.log("query", query)
      // console.log("call", call)
      const response = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}&rapidapi-key=f4efa35498msh1c7b5fc84555938p144d20jsn1a5cdd58695b`
      );
      const responseJSON = await response.json();
      setCall(false)
      // console.log("Json response",responseJSON)
      options = responseJSON?.data?.map((value: any) => {
        return {
          id: value.id,
          value: `${value.city}, ${value.country}`,
          label: `${value.city}, ${value.country}`,
          lat: value.latitude,
          lon: value.longitude,
        }
      })
      // console.log("options", options)
      setValues(options)
      // return callback(null, { options: options});
      return callback (options);
    }
  };

  // const fetchUsers = (input, callback) => {
  //   fetch(`https://api.github.com/search/users?q=${input}`)
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("json", json);
  //       callback(null, { options: json.items });
  //     });
  // };

  // const debouncedFetchUsers = lodash.debounce(fetchUsers, 250);

  // const getUsers = (input, callback) => {
  //   if (lodash.isEmpty(input)) {
  //     return callback(null, { options: [] });
  //   }
  //   debouncedFetchUsers(input, callback);
  // };

  const debouncedFetchCities = lodash.debounce(loadOptions, 250);

  const getCities = (input: string, callback: any) => {
    if (lodash.isEmpty(input)) {
      return callback(null, { options: [] });
    }

    // select value
    // console.log("agreagar al cities store", input)

    debouncedFetchCities(input, callback);
  };

  const [query, setQuery] = useState("");
  const [call, setCall] = useState(false);
  const [displayMessage, setDisplayMessage] = useState("");

  useEffect(() => {
    const timeOutId = setTimeout(() => callAPI(query), 500);
    return () => clearTimeout(timeOutId);
  }, [query]);

  // const filter = (inputValue: any) =>
  //   options.filter(option =>
  //     option.label.toLowerCase().includes(inputValue.toLowerCase())
  //   );

  // const changeTheme = () => {
  //   theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
  // }

  const onChangeSelectedOption = (e: any) => {
    // console.log("agreagar al cities store", e)
  };

const onDropDownChange = (value: any) => {
  // console.log("dropDown",value)
  setSearchCities(value)
  // dispatch(fetchCurrentCities('buenos aires'))

  // Add cities to store
  dispatch(addCities(value))
  // dispatch(removeAllWeather)
}

const callAPI = (value: string) => {
  setCall(true)
}

// const onChange = (value: string) => {
//   console.log("event: ", value);
//   setQuery(value)
// }

const onSend = () => {
  // console.log({cities})
  console.log("Empezo")
  // dispatch(setLoading(true))
  dispatch(removeAllWeather())
  searchCities.map(async (city) => {
    // console.log({city})
    await setTimeout(()=> {
      dispatch(fetchWeatherLatAndLon(city.lat, city.lon, cities))
    }, 2000)
  });
  console.log("Termino")
  // console.log("after cities", cities)
  // console.log("after weater", weather)
  // Object.entries(cities).forEach(([key, value]) => {
  //   console.log("value",value)
  //   console.log("key",key)
  //   dispatch(fetchWeatherLatAndLon(value.latitude, value.longitude))
  // });
  // cities.map((city: any) => {
  //   dispatch(fetchWeatherLatAndLon(city.latitude, city.longitude))
  // })
}

  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          {/* <GlobalSvgSelector id='header-logo'/> */}
          <div className='d-flex align-items-center'>
            <img src={`icons/icon-4.png`} className="icon-big" alt="weather" />
            <div>

              <small className='text-primary ms-2'>Challenge Weather</small>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className='ms-auto'>
            {/* <Select  components={animatedComponents} closeMenuOnSelect={false} defaultValue={options[0]} styles={colourStyles} options={options} isMulti onChange={onDropDownChange}/> */}
            {/* <AsyncSelect components={animatedComponents} styles={colourStyles}  cacheOptions onInputChange={onChange} loadOptions={loadOptions}/> */}
            <AsyncSelect components={animatedComponents} styles={colourStyles}  cacheOptions loadOptions={getCities} isMulti  onChange={onDropDownChange} onInputChange={onChangeSelectedOption}/>
            {/* <AsyncPaginate  debounceTimeout={300} styles={colourStyles}  loadOptions={loadOptions} isMulti/> */}
            <button className='btn btn-primary ms-0 mt-0 mt-2 mt-lg-0 ms-lg-2' onClick={onSend}>Search</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Headers