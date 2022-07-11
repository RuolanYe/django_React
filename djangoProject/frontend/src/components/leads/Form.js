import React, { Component, useState } from 'react'
import {useDispatch} from 'react-redux'
import { createLead } from '../../reducers/leadsSlice';
import PropTypes from 'prop-types';

function Form () {

  const [postData, setPostData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(createLead(postData));
  }

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Lead</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={postData.name}
              onChange={(e) => setPostData({...postData,name: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={postData.email}
              onChange={(e) => setPostData({...postData,email: e.target.value})}
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              className="form-control"
              type="text"
              name="message"
              value={postData.message}
              onChange={(e) => setPostData({...postData,message: e.target.value})}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    )
  }


export default Form