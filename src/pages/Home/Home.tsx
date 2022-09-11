import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useCustomDispatch, useCustomSelector } from '../../hooks/store'
import { selectCurrentWeatherData } from '../../store/selectors'
import { fetchCurrentWeather } from '../../store/thunks/fetchCurrentWeather'
import Days from '../Days/Days'
import ThisDay from '../ThisDay/ThisDay'
import ThisDayInfo from '../ThisDayInfo/ThisDayInfo'
import './Home.module.scss'
import { Button, Carousel, Accordion } from 'react-bootstrap';

type Props = {}

const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  // const resp = useSelector(state => state)

 const { weather } = useCustomSelector(selectCurrentWeatherData)

  useEffect(()=>{
    dispatch(fetchCurrentWeather('paris'))
  }, [])
  return (
    <div className='Home'>
      <div className='wrapper'>
        <ThisDay weather={weather}/>
        <ThisDayInfo/>
      </div>
      <Days/>
      <button className='btn btn-primary'>JORGE</button>
      <Button>jorge 2</Button>
      <div className='d-flex'>
        <div>jorge</div>
        <div>cardozo</div>
        <div>silvio</div>
      </div>
    {/* <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://via.placeholder.com/800x400.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
    </div>
    
  )
}

export default Home