import React, { useEffect, useState } from 'react';
import Model from './Model/Model';
import './Collection.css';
import SelectedModel from './SelectedModel/SelectedModel';

const Collections = () => {
    // for display models 
    const [models, setModels] = useState([]);
    // for handleHire button click 
    const [SelectModel, setSelectModel] = useState([]);
    // console.log(SelectModel);
    useEffect(() => {
        fetch('./FakeModels.JSON')
            .then(res => res.json())
            .then(data => setModels(data))
    }, [])


    // if click hire button then work function 
    const handleHire = (model) => {
        const newModel = [...SelectModel, model]
        setSelectModel(newModel);
    }

    return (
        <div className="row container-fluid pt-4">
            <div className="col-lg-9">
                <div className="row g-4">
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