import React from 'react';
import './SelectedModel.css';

const SelectedModel = (props) => {
    const { SelectModel } = props;
    let price = 0;
    for (const models of SelectModel) {
        price = price + models.hire;
    }

    return (
        <div className="border p-2">
            <div className="text-center fs-4">
                <p><b>Selected Models : {SelectModel.length}</b></p>
                <p><b>Total Budget: </b>{price}</p>
            </div>
            {
                SelectModel.map(model => <Cart
                    model={model}
                    key={model.key}
                ></Cart>)
            }
        </div>
    );
};

function Cart(props) {
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center px-3 select-model text-center mb-2">
                <img src={props.model.img} className="model-img" alt="selected model" />
                <div className="fs-5">
                    <p>{props.model.person}</p>
                    <p><b>${props.model.hire}</b></p>
                </div>
            </div>
        </div>
    )
}
export default SelectedModel;