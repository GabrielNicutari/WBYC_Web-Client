import React from 'react'
import './recipe-update.styles.scss'
import UpdateRecipe from './recipe-update.component.jsx'

export const UpdateModal= ({show, close, state}) => {
    console.log("show: " + show + "close: " + close);
    return (
        <div className="modal-wrapper"
             style={{
                 transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
                 opacity: show ? '1' : '0'
             }}
        >
            <div className="modal-header">
                <p>Welcome To Our Site</p>
                <span onClick={close} className="close-modal-btn">x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <h4>Modal</h4>
                    <UpdateRecipe state={state}/>
                </div>
                <div className="modal-footer">
                    <button onClick={close} className="btn-cancel">Close</button>
                </div>
            </div>
        </div>
    )
}