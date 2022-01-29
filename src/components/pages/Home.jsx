import React from 'react';
import Hero from "../Hero"
import Crepe from "./../../assets/img/crepe.jpeg"
import CoffeeIcon from '@mui/icons-material/Coffee';
import { Link } from "react-router-dom";


export default function Home() {
  

  return (
    <>
      <div className="home">
        <Hero />
        <div className="home__text-container--hours">
          <h2>Open Mon - Sat</h2>
          <h3>8am - 3pm</h3><br />
        </div>
        <a href="https://maps.google.com/maps/dir//5550+Sterrett+Pl+STE+103+Columbia,+MD+21044/@39.2198675,-76.8572016,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x89b7df91246ece95:0x660f3f46fe2d0b21" rel="noreferrer" target="blank_">
        <div className="home__text-container--address">
            <p>5550 Sterrett Place</p>
            <p>Suite 103, Columbia</p>
            <p>MD 212044</p>
        </div></a>
        <a href="https://maps.google.com/maps/dir//5550+Sterrett+Pl+STE+103+Columbia,+MD+21044/@39.2198675,-76.8572016,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x89b7df91246ece95:0x660f3f46fe2d0b21" rel="noreferrer" target="blank_">
          <div className="home__map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.0131317599657!2d-76.85939028464011!3d39.2198674795222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7df91246ece95%3A0x660f3f46fe2d0b21!2s5550%20Sterrett%20Pl%20STE%20103%2C%20Columbia%2C%20MD%2021044!5e0!3m2!1sen!2sus!4v1643486851275!5m2!1sen!2sus"
              width="600"
              height="450"
              loading="lazy"
            />
          </div></a>
        <div className="home__text-container--marketing">
          <h2>Simply the best.</h2>
          <img src={Crepe} />
          <Link to={'/menu'}>
            <CoffeeIcon style={{color: "#550707", marginTop: "10%"}}/>
          </Link>
        </div>
      </div>
    </>
  );
}
