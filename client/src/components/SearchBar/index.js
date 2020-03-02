import React from "react";

import "./style.css";

export function Input(props) {
    return (
        // <div className="form-group">
            <input className="form-control" {...props} />
        // </div>
    );
}

export function FormBtn(props) {
    return (
        <button {...props} style={{  marginBottom: 3 }} className="btn btn-success">
            {props.children}
        </button>
    );
}

export function Filters() {
    return (
        <div className="input-group">
            <select className="custom-select" id="priceGroup">
                <option defaultValue="1">Any price</option>
                <option value="2">Under $50</option>
                <option value="3">$50 to $100</option>
                <option value="4">$10 to $250</option>
                <option value="5">Over $250</option>
            </select>
            <div className="input-group-append btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-light active">
                    <input type="radio" name="options" id="option1" autoComplete="off" /> Anniversary
                </label>
                <label className="btn btn-light">
                    <input type="radio" name="options" id="option2" autoComplete="off" /> Baby Shower
                </label>
                <label className="btn btn-light">
                    <input type="radio" name="options" id="option3" autoComplete="off" /> Birthday
                </label>
                <label className="btn btn-light">
                    <input type="radio" name="options" id="option3" autoComplete="off" /> Graduation
                </label>
                <label className="btn btn-light">
                    <input type="radio" name="options" id="option3" autoComplete="off" /> Wedding
                </label>
            </div>
        </div>
    )
}

