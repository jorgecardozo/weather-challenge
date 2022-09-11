// Libraries
import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';

import './Forecast.scss';

interface Props {
	data: any;
}

const Forecast = ({ data }: Props) => {
	return (
		<>
			<Accordion allowZeroExpanded>
				{data.map((dayWeather: any, idx: number) => (
					<AccordionItem key={idx}>
						<AccordionItemHeading>
							<AccordionItemButton>
								<div className='daily-item'>
									<img
										src={`icons/${dayWeather.icon}.png`}
										className='icon-small'
										alt='weather'
									/>
									<label className='day'>{dayWeather.day}</label>
									<label className='description'>
										{dayWeather.description}
									</label>
									<label className='min-max'>
										{Math.round(dayWeather.temp_max)}°C /
										{Math.round(dayWeather.temp_min)}°C
									</label>
								</div>
							</AccordionItemButton>
						</AccordionItemHeading>
						<AccordionItemPanel>
							<div className='daily-details-grid'>
								<div className='daily-details-grid-item gap-4'>
									<label>Pressure:</label>
									<label>{dayWeather.pressure}</label>
								</div>
								<div className='daily-details-grid-item gap-4'>
									<label>Humidity:</label>
									<label>{dayWeather.humidity}</label>
								</div>
								<div className='daily-details-grid-item gap-4'>
									<label>Clouds:</label>
									<label>{dayWeather.clouds}%</label>
								</div>
								<div className='daily-details-grid-item gap-4'>
									<label>Wind speed:</label>
									<label>{dayWeather.wind_speed} m/s</label>
								</div>
								<div className='daily-details-grid-item gap-4'>
									<label>Sea level:</label>
									<label>{dayWeather.sea_level}m</label>
								</div>
								<div className='daily-details-grid-item gap-4'>
									<label>Feels like:</label>
									<label>{dayWeather.feels_like}°C</label>
								</div>
							</div>
						</AccordionItemPanel>
					</AccordionItem>
				))}
			</Accordion>

			{/* <Accordion allowZeroExpanded>
        {data.splice(0, 7).map((day: any, idx: number) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <img src={`icons/${day.weather[0].icon}.png`} className="icon-small" alt="weather" />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">{day.weather[0].description}</label>
                  <label className="min-max">{Math.round(day.main.temp_max)}°C /{Math.round(day.main.temp_min)}°C</label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item gap-4">
                  <label>Pressure:</label>
                  <label>{day.main.pressure}</label>
                </div>
                <div className="daily-details-grid-item gap-4">
                  <label>Humidity:</label>
                  <label>{day.main.humidity}</label>
                </div>
                <div className="daily-details-grid-item gap-4">
                  <label>Clouds:</label>
                  <label>{day.clouds.all}%</label>
                </div>
                <div className="daily-details-grid-item gap-4">
                  <label>Wind speed:</label>
                  <label>{day.wind.speed} m/s</label>
                </div>
                <div className="daily-details-grid-item gap-4">
                  <label>Sea level:</label>
                  <label>{day.main.sea_level}m</label>
                </div>
                <div className="daily-details-grid-item gap-4">
                  <label>Feels like:</label>
                  <label>{day.main.feels_like}°C</label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion> */}
		</>
	);
};

export default Forecast;
