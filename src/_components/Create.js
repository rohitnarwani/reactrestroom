import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Create extends Component {
  constructor(){
    super();
    this.state = {
      name:'',
      address:'',
      city:''

    };

  }
  onChange= (e)=>{
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }
  onSubmit =(e)=>{
    e.preventDefault();
  }
  render() {
      const { name, address, city} = this.state;
      return (
        <div className="container">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">
                ADD CONTACT
              </h3>
            </div>
            <div className="panel-body">
              <h4><Link to="/"><span className="glyphicon glyphicon-th-list" aria-hidden="true"></span> Contacts List</Link></h4>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label htmlFor="isbn">Name:</label>
                  <input type="text" className="form-control" name="name" value={name} onChange={this.onChange} placeholder="Name" />
                </div>
                <div className="form-group">
                  <label htmlFor="title">Address:</label>
                  <input type="text" className="form-control" name="address" value={address} onChange={this.onChange} placeholder="Address" />
                </div>
                <div className="form-group">
                  <label htmlFor="author">City:</label>
                  <input type="text" className="form-control" name="city" value={city} onChange={this.onChange} placeholder="City" />
                </div>

                <button type="submit" className="btn btn-default">Submit</button>
              </form>
            </div>
          </div>
        </div>
      );
    }
  }

  export default Create;
