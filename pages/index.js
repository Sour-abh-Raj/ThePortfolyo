import Header from "@/src/components/Header";
import ScrollBar from "@/src/components/ScrollBar";
import About from "@/src/components/sections/About";
import Blog from "@/src/components/sections/Blog";
import Clients from "@/src/components/sections/Clients";
import Contact from "@/src/components/sections/Contact";
import Copyright from "@/src/components/sections/Copyright";
import Facts from "@/src/components/sections/Facts";
import Home from "@/src/components/sections/Home";
import Portfolio from "@/src/components/sections/Portfolio";
import Testimonials from "@/src/components/sections/Testimonials";
import Separator from "@/src/components/Separator";
import { jqueryFuntion } from "@/src/utilits";
import { Fragment, useEffect } from "react";

import React, { useState } from 'react';
// import Handler from "@/pages/api/hello";



function Handler() {
  // Define state to hold the fetched data
  const [data, setData] = useState({});

  // Define the API endpoint URL
  const API_ENDPOINT = "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae";

  // Fetch data from the API endpoint when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // Function to fetch data from the API endpoint
  const fetchData = async () => {
    try {
      const response = await fetch(API_ENDPOINT);
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error(error);
    }
  };



  const splitUserName = (userName) => {
    const parts = userName.split(' ');
    const firstName = parts[0];
    const lastName = parts.slice(1).join(' '); // Join the remaining parts as the last name
    return { firstName, lastName };
  };

  const splitUserLocation = (userLocation) => {
    const parts = userLocation.split(',');
    const address = parts[0];
    const nationality = parts.slice(1).join(' '); // Join the remaining parts as the last name
    return { address, nationality };
  }

  const userName = data.user?.about?.name || ''
  const { firstName, lastName } = splitUserName(userName);
  const image = data.user?.about?.avatar?.url || ''
  const experience = data.user?.about?.subTitle || ''
  const location = data.user?.about?.address || ''
  const { address, nationality } = splitUserLocation(location)
  const phoneNumber = data.user?.about?.phoneNumber || ''
  const email = data.user?.email || ''
  const skills = data.user?.skills || ''
  const timeline = data.user?.timeline || ''
  const projects = data.user?.projects || ''
  const quotes = data.user?.testimonials || ''
  const socialHandles = data.user?.social_handles || ''
  const services = data.user?.services || ''
    return { experience, firstName, lastName, image, address, nationality, phoneNumber, email, skills, timeline, projects, quotes, socialHandles, services };


}



const Index = () => {
  useEffect(() => {
    jqueryFuntion();
  });

  const { experience, firstName, lastName, image, address, nationality, phoneNumber, email, skills, timeline, projects, quotes, socialHandles, services } = Handler();
  return (
    <Fragment>
      <div className="page-content">
        <Header />
        <div id="wrapper">
          <main className="flex-column-mobile">

            <Home userName={firstName} experience={experience} />
            {/* <About /> */}
            <About firstName={firstName} lastName={lastName} image={image} addressUser={address} nationalityUser={nationality} phoneNumber={phoneNumber} email={email} skills={skills} timeline={timeline} />

            <Separator type={"down"} />
            <Facts />
            <Separator type={"up"} />
            {/* <Portfolio /> */}
            <Portfolio projects={projects} />
            <Separator type={"down"} />
            <Testimonials quotes={quotes} />
            <Separator type={"up"} />
            <Contact addressUser={address} nationalityUser={nationality} phoneNumber={phoneNumber} email={email} address={address} socialHandles={socialHandles} />
            <Separator type={"down"} />
            <Clients services={services}/>
            <Separator type={"up"} />
            <Blog />
            <Separator type={"down"} />
            <Copyright />
          </main>
        </div>
        <ScrollBar />
      </div>
    </Fragment>
  );
};
export default Index;
