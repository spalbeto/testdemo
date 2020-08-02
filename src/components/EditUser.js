import React, { Component, Fragment } from 'react';
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class EditUser extends Component {
   
    constructor(props) {
        super(props)

        const { detail } = this.props.location
            this.state = (detail)
            console.log('El state es:')
            console.log(this.state)
            this.state= { 
             error : false,
            items: [],
            data: [],
            id: detail,
           
    }
    }
    //SET DATA OF INPUTS 
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }
    
    //CONSIMING API REST WITH PARAM ID FOR USER PROP PARAM
    ObtainID = e => {
      axios.get(`https://reqres.in/api/users/${this.state.id}`)
        .then(response => {
            const items = response.data.data;
            console.log(items)
            this.setState({items}); 
            console.log(this.state)  
        })  
        .catch(error => {
            console.log(error)
        })
    }
   //CHARGED METHOD OBTAINID
     getData(){
         setTimeout(() => {
          this.ObtainID()
         }, .5)
       }
     //CHARGED METHOD TO OPEN WINDOWS OR UPDATE WEB SITE
       componentDidMount() {
         this.getData()
        }
       
    //UPDATE USER SEND PARAMS WHIT INPUTS TO PUT WITH API REST
       UpdateUser = e => {
        this.setState({ [e.target.name]: e.target.value })
        const data = {"data":{"id":3,"email":`${this.state.items.email}`,"first_name":`${this.state.items.first_name}`,"last_name":`${this.state.items.last_name}`,"avatar":`${this.state.items.avatar}`},"ad":{"company":"StatusCode Weekly","url":"http://statuscode.org/","text":"A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."}}
        e.preventDefault()
        axios.put(`https://reqres.in/api/users/${this.state.id}`,data) 
        .then(response => {
            const items = response.data.data;
             this.setState({items});
             toast.info('USER UPDATED' ,{
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
            <h2 className="text-center">Edit User</h2>
            {respuesta}
            <div className="row justify-content-center">
          
           
            <form className="col-md-8 m-3" 
                 onSubmit={this.ObtenerID}
               
            >
            <div className="form-row">
                <div className="form-group col-md-6">
                    <label>Name</label>
                    <input type="text" 
                            
                        className="form-control" 
                        defaultValue={this.state.items.first_name}
                        name="first_name"
                        onChange={this.changeHandler}
                                />
                </div>
                <div className="form-group col-md-6">
                    <label>Last Name</label>
                    <input type="text" 
                    className="form-control" 
                    defaultValue={this.state.items.last_name}
                    name="last_name"
                    onChange={this.changeHandler}     
                    />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-12">
                    <label>Email</label>
                    <input type="text" 
                    className="form-control" 
                    defaultValue={this.state.items.email}
                    name="email" 
                    onChange={this.changeHandler} 
                    />
                </div>   
            </div>
      <div className="form-row">
          <div className="form-group col-md-12">
              <label>Avatar</label>
              <input type="text" 
              className="form-control" 
              defaultValue={this.state.items.avatar}
              name="avatar" 
              onChange={this.changeHandler}  
              />
          </div>
           
        
      </div>
      
       <button type="submit" className="btn btn-success float-right" onClick={this.UpdateUser}>User Updated</button> 
  </form>
        
 
  </div>
            </Fragment>
        );
    }
}

export default EditUser;