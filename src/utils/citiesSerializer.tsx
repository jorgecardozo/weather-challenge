interface City {
	id: string;
	city: string;
	country: string;
	countryCode: string;
	latitude: string;
	longitude: string;
}

interface otherCity {
	id: string;
	label: string;
	latitude: string;
	longitude: string;
}

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
export const serializerCity = (data: any) => {
	const city = data[0];
	const id = `${city.latitude.toFixed(2)}#${city.longitude.toFixed(2)}`;
	const object = {} as City;

	object.id = id;
	object.city = city.city;
	object.country = city.country;
	object.countryCode = city.countryCode;
	object.latitude = city.longitude.toFixed(2);
	object.longitude = city.longitude.toFixed(2);

	return object;
};

export const serializerCities = (data: any) => {
	const objectCities = {} as any;

	data.map((city: any) => {
		const objectCity = {} as otherCity;
		const id = `${city.lat.toFixed(2)}#${city.lon.toFixed(2)}`;

		objectCity.id = id;
		objectCity.label = city.label;
		objectCity.latitude = city.lon.toFixed(2);
		objectCity.longitude = city.lon.toFixed(2);
		objectCities[`${id}`] = objectCity;
	});

	return objectCities;
};
