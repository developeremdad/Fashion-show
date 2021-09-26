import React, { useEffect, useState } from 'react';
import Model from './Model/Model';
import './Collection.css';
import SelectedModel from './SelectedModel/SelectedModel';

const Collections = () => {
    // for display models 
    const [models, setModels] = useState([]);
    // for handleHire button click 
    const [SelectModel, setSelectModel] = useState([]);
    useEffect(() => {
        fetch('./FakeModels.JSON')
            .then(res => res.json())
            .then(data => setModels(data))
    }, [])

    const handleHire = (model) => {
        setSelectModel(model);
    }

    return (
        <div className="row container-fluid collection-container">
            <div className="col-lg-9">
                <div className="row g-3">
                    {
                        models.map(model => <Model
                            model={model}
                            key={model.key}
                            handleHire={handleHire}
                        ></Model>)
                    }
                </div>
            </div>
            <div className="col-lg-3">
                <SelectedModel SelectModel={SelectModel}></SelectedModel>
            </div>
        </div>
    );
};

export default Collections;