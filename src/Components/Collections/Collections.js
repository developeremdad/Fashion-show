import React, { useEffect, useState } from 'react';
import Model from './Model/Model';
import './Collection.css';

const Collections = () => {
    const [models, setModels] = useState([])
    useEffect(() => {
        fetch('./FakeModels.JSON')
            .then(res => res.json())
            .then(data => setModels(data))
    }, [])
    return (
        <div className="row container-fluid collection-container">
            <div className="col-lg-9">
                <div className="row g-3">
                    {
                        models.map(model => <Model model={model} key={model.key}></Model>)
                    }
                </div>
            </div>
            <div className="col-lg-3">
                <h2>this is cart div</h2>
            </div>
        </div>
    );
};

export default Collections;