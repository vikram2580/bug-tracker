import React, { useState } from "react";
import "./Modal.css";

const Modal = ({ setNewBug, newBug, onSave, closeModal }) => {
  return (
    <div className='modal'>
      <div className='modal-content'>
        <div className='modal-head'>
          <span className=''>Add Bug</span>
          <div className='dot' onClick={closeModal}></div>
        </div>
        <hr className='divider' />
        <div className='input-container'>
          <input
            className='input-field'
            value={newBug?.bugId}
            placeholder='Enter Bug Number'
            type='number'
            onChange={(event) => {
              setNewBug((prevBug) => ({
                ...prevBug,
                bugId: event.target.value,
              }));
            }}
          />
          <input
            id='new-bug'
            className='input-field'
            placeholder='Enter Description'
            type='text'
            value={newBug?.description}
            onChange={(event) => {
              setNewBug((prevBug) => ({
                ...prevBug,
                description: event.target.value,
                status: "RE",
              }));
            }}
          />
          <button
            type='button'
            data-dismiss='modal'
            className='btn btn-primary btn-sm mt-3'
            onClick={onSave}
          >
            Save
          </button>
        </div>
      </div>
      {/* <div
          id='add-bug-container'
          className={`add-bug-container`}
          data-backdrop='static'
        >
          <div className='container'>
            <div className='col mx-2'>
              <h5 className='text-primary text-left mt-4'>Add Bug</h5>
              <input
                className='mt-4'
                type='number'
                onChange={(event) => {
                  setNewBug((prevBug) => ({
                    ...prevBug,
                    bugId: event.target.value,
                  }));
                }}
              />
              <input
                id='new-bug'
                className='mt-4'
                type='text'
                onChange={(event) => {
                  setNewBug((prevBug) => ({
                    ...prevBug,
                    description: event.target.value,
                    status: "RE",
                  }));
                }}
              />
              <button
                type='button'
                className='btn btn-primary btn-sm mt-3'
                data-dismiss='modal'
                onClick={() => addBug()}
              >
                Save
              </button>
            </div>
          </div>
        </div> */}
    </div>
  );
};

export default Modal;
