// Libraries
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import makeAnimated from 'react-select/animated';
import AsyncSelect from 'react-select/async';
import * as lodash from 'lodash';

// Store
import { useCustomDispatch, useCustomSelector } from '../../hooks/store';
import { selectCurrentCitiesData } from '../../store/selectors';
import { fetchWeatherLatAndLon } from '../../store/thunks/fetchCurrentWeather';
import { addCities } from '../../store/slices/CurrentCities/currentCitiesSlice';
import { removeAllWeather } from '../../store/slices/currentWeather/currentWeatherSlice';

interface Props {}

const Header = (props: Props) => {
	const animatedComponents = makeAnimated();
	let options = [
		{ value: 'chocolate', label: 'Chocolate', other: 1 },
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
	];

	const colourStyles = {
		control: (styles: any) => ({
			...styles,
			backgroundColor: '#add7ff',
			minWidth: '300px',
			color: '#FFF',
		}),
		singleValue: (styles: any) => ({
			...styles,
			color: '#FFF',
		}),
	};
	const dispatch = useCustomDispatch();
	const { cities } = useCustomSelector(selectCurrentCitiesData);
	const [searchCities, setSearchCities] = useState([{}]);

	const loadOptions = async (inputValue: string, callback: any) => {
		if (inputValue) {
			const response = await fetch(
				`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=1000000&namePrefix=${inputValue}&rapidapi-key=f4efa35498msh1c7b5fc84555938p144d20jsn1a5cdd58695b`
			);
			const responseJSON = await response.json();
			options = responseJSON?.data?.map((value: any) => {
				return {
					id: value.id,
					value: `${value.city}, ${value.country}`,
					label: `${value.city}, ${value.country}`,
					lat: value.latitude,
					lon: value.longitude,
				};
			});
			return callback(options);
		}
	};

	const debouncedFetchCities = lodash.debounce(loadOptions, 250);

	const getCities = (input: string, callback: any) => {
		if (lodash.isEmpty(input)) {
			return callback(null, { options: [] });
		}
		debouncedFetchCities(input, callback);
	};

	const onDropDownChange = (value: any) => {
		setSearchCities(value);
		dispatch(addCities(value));
	};

	const onSearch = () => {
		dispatch(removeAllWeather());
		searchCities.map((city: any) => {
			dispatch(fetchWeatherLatAndLon(city.lat, city.lon, cities));
		});
	};

	return (
		<Navbar bg='dark' expand='lg'>
			<Container fluid>
				<Navbar.Brand href='#'>
					<div className='d-flex align-items-center'>
						<img src={`icons/icon-4.png`} className='icon-big' alt='weather' />
						<div>
							<small className='text-primary ms-2'>Challenge Weather</small>
						</div>
					</div>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav className='ms-auto'>
						<AsyncSelect
							components={animatedComponents}
							styles={colourStyles}
							cacheOptions
							loadOptions={getCities}
							isMulti
							onChange={onDropDownChange}
						/>
						<button
							className='btn btn-primary ms-0 mt-0 mt-2 mt-lg-0 ms-lg-2'
							onClick={onSearch}
						>
							Search
						</button>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
