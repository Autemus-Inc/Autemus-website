import React from 'react'
import portfolioBg from "../assets/portfolio-bg.svg"
import transafeImg from "../assets/transafe.png"

const Portfolio = () => {
  return (
    <div>
    <section className='pagebackground'>
        <img src={portfolioBg} alt="" />
      </section>
      <section className='mainContent'>
        <h2>Our Product</h2>
        <div className="product">
            <div className="process">
                <div className="card">
                <div className="cardImg">
                <img src="https://img.freepik.com/free-vector/mobile-weather-application_1284-4093.jpg?size=626&ext=jpg&ga=GA1.2.1207199826.1690666781&semt=ais" alt="" />
                </div>
                <div className='card-content'>
                    <h4>Seajro Weather App</h4>
                    <p className='status'>Coming Soon</p>
                    <p>Seajro is your reliable companion for all things weather-related. With a sleek and intuitive interface, Seajro provides real-time weather updates, forecasts, and essential meteorological data at your fingertips. Whether you're planning a weekend getaway, checking daily conditions, or staying safe during extreme weather events, Seajro keeps you informed with accuracy and precision.</p>
                </div>
                </div>
                <div className="card">
                <div className='card-content'>
                    <h4>TranSafe E-ticketing Application</h4>
                    <p className='status'>Coming Soon</p>
                    <p>Transafe is your ultimate ticketing companion for hassle-free travel experiences. With a user-friendly interface and robust features, Transafe makes booking and managing electronic tickets a breeze. Whether you're boarding a train, catching a flight, or attending an event, rely on Transafe for convenient, secure, and paperless ticketing.</p>
                </div>
                <div className="cardImg">
                    <img src={transafeImg} alt="" />
                  </div>
                </div>
                <div className="card">
                <div className="cardImg">
                <img src="https://img.freepik.com/free-vector/online-medicine-service-landing-page_107791-5138.jpg?size=626&ext=jpg&ga=GA1.1.1207199826.1690666781&semt=ais" alt="" />
                </div>
                <div className='card-content'>
                    <h4>Inventify Application</h4>
                    <p className='status'>Coming Soon</p>
                    <p>Inventify streamlines your inventory management with efficiency and precision. Say goodbye to the hassles of manual tracking. With Inventify, you can effortlessly monitor stock levels, track product movement, and receive timely alerts for restocking. Whether you run a small business or a large enterprise, Inventify empowers you to optimize your inventory, reduce costs, and keep your operations running smoothly.</p>
                </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio