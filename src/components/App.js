import React, { Component, useState } from "react";
import "./../styles/App.css";

// Do not alter the states const and values inside it.
const states = [
  {
    name: "Madhya Pradesh",
    cities: [
      {
        name: "Indore",
        towns: [
          {
            name: "Mhow"
          },
          {
            name: "Dewas"
          }
        ]
      },
      {
        name: "Bhopal",
        towns: [
          {
            name: "Manit"
          },
          {
            name: "Berasia"
          }
        ]
      },
      {
        name: "Gwalior",
        towns: [
          {
            name: "Ajaypur"
          }
        ]
      }
    ]
  },
  {
    name: "Jharkhand",
    cities: [
      {
        name: "Dhanbad",
        towns: [
          {
            name: "IIT(ISM) Dhanbad"
          },
          {
            name: "Hirapur"
          }
        ]
      },
      {
        name: "Wasseypur",
        towns: [
          {
            name: "Sardar khan's"
          },
          {
            name: "Faizal khan's"
          }
        ]
      },
      {
        name: "Mirzapur",
        towns: [
          {
            name: "Kaleen bhaiya's"
          },
          {
            name: "Guddu bhaiya's"
          }
        ]
      }
    ]
  },
  {
    name: "Assam",
    cities: [
      {
        name: "Guwhati",
        towns: [
          {
            name: "Amin"
          },
          {
            name: "Jalah"
          }
        ]
      },
      {
        name: "Jungle1",
        towns: [
          {
            name: "Tiger found at IIT Guwahati"
          },
          {
            name: "Leopard found in IIT Guwahati"
          }
        ]
      },
      {
        name: "Tezpur",
        towns: [
          {
            name: "Dibrugarh"
          },
          {
            name: "Silchar"
          }
        ]
      }
    ]
  },
  {
    name: "Bihar",
    cities: [
      {
        name: "Patna",
        towns: [
          {
            name: "Sonpur"
          },
          {
            name: "Maner"
          }
        ]
      },
      {
        name: "Gaya",
        towns: [
          {
            name: "Bakraur"
          },
          {
            name: "Barachatti"
          }
        ]
      },
      {
        name: "Darbhanga",
        towns: [
          {
            name: "Singhwara"
          },
          {
            name: "Jale"
          }
        ]
      }
    ]
  }
];

function App() {
  return(
    <div className="accordion accordion-flush" id="main">
      {states.map((data,idx)=>{
        return(
          <div key={idx} id={`state${idx}`} className="accordion-item">
            <h2 className="accordion-header" id={`flush-headingOne${idx}`}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseOne${idx}`} aria-expanded="false" aria-controls="flush-collapseOne">
                {data.name}
              </button>
            </h2>
            <div id={`flush-collapseOne${idx}`} className="accordion-collapse collapse" aria-labelledby={`flush-headingOne${idx}`} data-bs-parent="#main">
              <div className="accordion-body">
                <div className="accordion accordion-flush" id={`accordian${idx}`}>  
                  {data.cities.map((c,cidx)=>{
                    return(
                      <div className="accordion-item" key={cidx} id={`city${cidx}`}>
                      <h2 className="accordion-header" id={`flush-headingTwo${cidx}`}>
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapseTwo${cidx}`} aria-expanded="false" aria-controls={`flush-collapseTwo${cidx}`}>
                        {c.name}
                        </button>
                      </h2>
                      <div id={`flush-collapseTwo${cidx}`} className="accordion-collapse collapse" aria-labelledby={`flush-headingTwo${cidx}`} data-bs-parent={`#accordian${idx}`}>
                        <div className="accordion-body">
                        <ul className="list-group">
                          {c.towns.map((t,tidx)=>{
                            return(
                              <li key={tidx} id={`town${tidx}`} className="list-group-item">
                                {t.name}
                              </li>
                            )
                          })}
                          </ul>
                        </div>
                      </div>
                    </div>  
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )
      })}
  </div>
  )}

export default App;
