import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CreateUser extends Component {
   
    constructor(props) {
        super(props)

        this.state= { 
            first_name: '',
            last_name: '',
            email: '',
            avatar: '',
            error : false,
            items: [],
       
        }
        }
     //SET DATA OF INPUTS FORMS IN THE STATE    
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }
    //SET DATA IN THE POST METHOD FOR CALL API 
    submitHandler = e => {
        e.preventDefault()  
        axios.post('https://reqres.in/api/users',this.state)
        .then(response => {
            const items = response.data;
            console.log(items)
            this.setState(items);
            console.log(this.state) 
            toast.info('CREATED USER' ,{
                position: "bottom-center"
            }); 
        })  
        .catch(error => {
            console.log(error)
        })
    }
   
    render () {
        const {error,  first_name,
        last_name,
        email,
        avatar, } = this.state;
        let respuesta = (error) ? <p className= "alert alert-danger p-3 text-center"> Todos los compos son obligatorios</p> : '';
      
        return ( 
            <Fragment>
                <h2 className="text-center">Create User</h2>
                    {respuesta}
                <div className="row justify-content-center">
          
           
                    <form className="col-md-8 m-3" 
                
                        onSubmit={this.submitHandler}
                     >
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label>Name</label>
                            <input type="text" 
                                className="form-control" 
                                placeholder="Name"
                                name="first_name" value={first_name}
                                onChange={this.changeHandler}
                            />
                    </div>
                    <div className="form-group col-md-6">
                        <label>Last name</label>
                        <input type="text" 
                        className="form-control" 
                        placeholder="Last name"
                        name="last_name" value={last_name}
                                    onChange={this.changeHandler}     
                        />
                    </div>
                </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label>Email</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Email"
                    name="email" value={email}
                                onChange={this.changeHandler} 
                    />
                </div>
           
        
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label>Avatar</label>
                    <input type="text" 
                    className="form-control" 
                    placeholder="Avatar"
                    name="avatar" value={avatar}
                    onChange={this.changeHandler}  
                    />
                </div>
              
            </div>
      
      <button type="submit" className="btn btn-success float-right">Create User</button>
  </form>

 
  </div>
            </Fragment>
        );
    }
}

export default CreateUser;