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
        <button {...props} style={{ marginBottom: 3 }} className="btn btn-success">
            {props.children}
        </button>
    );
}

export function Filters(props) {
    return (
        <div className="input-group">
            <select className="custom-select" id="priceGroup" onChange={(event) => props.handlePrice(event.target.value)}>
                <option value="1">Under $50</option>
                <option value="2">$50 to $100</option>
                <option value="3">$100 to $250</option>
                <option value="4">Over $250</option>
            </select>
            <div className="input-group-append btn-group btn-group-toggle" data-toggle="buttons">
                <label className="btn btn-light active" onClick={() => props.handleFilter("anniversary")}>
                    <input type="radio" name="options" id="anniversary" autoComplete="off" /> Anniversary
                </label>
                <label className="btn btn-light" onClick={() => props.handleFilter("baby shower")}>
                    <input type="radio" name="options" id="babys" autoComplete="off" /> Baby Shower
                </label>
                <label className="btn btn-light" onClick={() => props.handleFilter("birthday")}>
                    <input type="radio" name="options" id="birthday" autoComplete="off" /> Birthday
                </label>
                <label className="btn btn-light" onClick={() => props.handleFilter("graduation")}>
                    <input type="radio" name="options" id="graduation" autoComplete="off" /> Graduation
                </label>
                <label className="btn btn-light" onClick={() => props.handleFilter("wedding")}>
                    <input type="radio" name="options" id="wedding" autoComplete="off" /> Wedding
                </label>
            </div>
        </div>
    )
}

