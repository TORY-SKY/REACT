import React from "react";
import icon1 from "../../images/ui-ux.png";
import icon2 from "../../images/developer.png";
import icon3 from "../../images/api.png";
import img1 from "../../images/04-heatbeat.png";
import "../../assets/components/ComponentsCSS/index.css";
const LandingPage = () => {
  return (
    <>
      <div className="LandingPage d-flex align-items-center justify-content-center flex-column">
        <div className="row my-5 pt-5">
          <div className="col-sm-12 col-lg-6 container ">
            <div className="LandingPageHeroText container ">
              <h1 className="container ">
                Hi, I'm Victor, a frontend developer. Building captivating
                websites with HTML, CSS, and JavaScript.
              </h1>
              <a href="" className="HireUsBTN my-3">
                Hire Us
              </a>
              <div className="CustomersRating">
                <span className="Grade Rating ">4.5</span>
                <span className="material-symbols-outlined Grade">grade</span>
                <span className="material-symbols-outlined Grade">grade</span>
                <span className="material-symbols-outlined Grade">grade</span>
                <span className="material-symbols-outlined Grade">grade</span>
                <span className="material-symbols-outlined Grade">grade</span>
              </div>
              <div className="lists d-lg-flex">
                <div className="list">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="green"
                    data-v-31fea99f=""
                  >
                    <path
                      d="M11 1.5625L4.125 8.4375L1 5.3125"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Proficiency in Frameworks</span>
                </div>
                <div className="list">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="green"
                    data-v-31fea99f=""
                  >
                    <path
                      d="M11 1.5625L4.125 8.4375L1 5.3125"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Responsive Web Design:</span>
                </div>
                <div className="list">
                  <svg
                    width="12"
                    height="10"
                    viewBox="0 0 12 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    color="green"
                    data-v-31fea99f=""
                  >
                    <path
                      d="M11 1.5625L4.125 8.4375L1 5.3125"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                  <span>Collaborative Approach</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <div className="HERO_IMAGE position-relative my-4">
              <div className="HeroImage"></div>
            </div>
          </div>
        </div>
        <div className="WhatWeOffer container-fluid d-flex align-items-center justify-content-center">
          <div className="row container-fluid  ">
            <div className="col-lg-4 col-md-12  d-flex  justify-content-center flex-column">
              <div className="CARDS text-light p-3 my-2 ">
                <img src={icon1} alt="icon" className="img-fluid w-25" />
                <h4>UI/UX DESIGNING</h4>
                <span>
                  Creative UI/UX designer shaping digital experiences with a
                  year of hands-on expertise. Passionate about visually
                  appealing, user-centric design.
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-12  d-flex  justify-content-center flex-column">
              <div className="CARDS text-light p-3 my-2">
                <img src={icon3} alt="icon" className="img-fluid w-25" />
                <h4>API Integration for Web Solutions</h4>
                <span>
                  Proficient Frontend Developer adept at seamlessly integrating
                  APIs for dynamic and efficient web solutions.
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-12  d-flex  justify-content-center flex-column">
              <div className="CARDS text-light p-3 my-2">
                <img src={icon2} alt="icon" className="img-fluid w-25" />
                <h4>Responsive Web Development</h4>
                <span>
                  Seasoned Frontend Developer adept at crafting responsive and
                  visually appealing websites, with a strong focus on API
                  integration for dynamic functionality.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="WhoWevWorkedFor container-fluid container-fluid bg-dark w-100 h100">
          <div className="Companies ">
            <h1>hello world</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
