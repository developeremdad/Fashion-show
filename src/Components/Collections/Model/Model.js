import React from 'react';
import './Model.css';

const Model = (props) => {

    const { person, img, age, height, experience, city, edu, hire } = props.model;
    return (
        <div className="col col-lg-4 col-md-6 col-sm-12">
            {/* display all models  */}
            <div className="">
                <div className="card h-100 model">
                    <div className="text-center">
                        <img src={img} className="card-img-top custom-img-style" alt="Model images" />
                    </div>

                    <div className="card-body">
                        <h4 className="card-title"><b>Name:</b> {person}</h4>
                        <p className="card-text"><b>Education:</b> {edu}</p>
                        {/* <p className="card-title"><b>Job:</b> {job}</p> */}
                        <p className="card-text"><b>Experience:</b> {experience}</p>
                        <p className="card-text"><span className="me-5"><b>Age:</b> {age}</span><b>Height:</b> {height}<span></span></p>
                        <p className="card-text"><b>Citizen:</b> {city}</p>
                        <p className="card-text"><b>Hire:</b> $ {hire} (Week)</p>
                    </div>
                    <div className="card-footer">
                        {/* click handler  select button */}
                        <button
                            onClick={() => props.handleHire(props.model)}
                        ><i className="fas fa-check"></i> Hire Model</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Model;