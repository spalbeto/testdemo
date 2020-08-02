import React, { Component  } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link } from 'react-router-dom';
import './styles.css';
import Paginador from './Paginador';


toast.configure();
class Users extends Component{

  
    constructor(props) {
        super(props)
        

        this.state = {
            id: 0,
            hasError: true,
            error: "",
            items: [],
            paginador : {
                offset: 0,
                actual: 1
            },
        }
    }

        //SET TIME FOR CHARGE METHOD SHOWUSERS 
        getData(){
            setTimeout(() => {
            this.ShowUsers()
            }, .5)
        }
      
      
      
      
      //CONSUMING API REST FOR SHOW THE USERS AND COPY AND PASATE IN ITEMS 
      
      ShowUsers = e =>{ 
          
        axios.get(`https://reqres.in/api/users`)
            .then(response => {
                const items = response.data.data;
                console.log(response);
                this.setState({items});
                console.log("los datos son;")
                console.log(items)
            
            })  
        .catch(error => {
          console.log(error)
        })

      }
        //CHARGED METHOD TO OPEN WINDOWS OR UPDATE WEB SITE
        componentDidMount() {
            this.getData()
        }

        //DELETE USER BY ID 
        DeleteUser = (e) => {

        axios.delete(`https://reqres.in/api/users${this.state.id}`)
        .then(response => {
            const items = response.data;
        
            this.setState(items);
            toast.info('Se agrego al carrito')
        
        })  
        .catch(error => {
            console.log(error)
        })
        
        }
    render() {
      

       
        return(
           
            <React.Fragment>
            <div className="container">                        
            <table className="table-auto shadow-md mt-10 w-full w-lg" >
                                    
                        <tbody className="mt-10 w-full w-lg">
                              {this.state.items.map((item, key) => (                                                
                                    <tr>
                                        <td className="border px-4 py-2"><img  src={item.avatar} alt={item.first_name} className=" w-150 h-16 object-contain"></img></td>
                                        <td className="border px-4 py-2">{item.first_name}</td> 
                                        <td className="border px-4 py-2">{item.last_name}</td> 
                                        <td className="border px-4 py-2">{item.email}</td>      
                                        <td className="border px-4 py-2"> 
                                            <Link  to={{pathname: `/user/edit/${item.id}`, detail: item.id }} className="btn btn-success d-block d-md-inline-block">
                                                       Edit User
                                            </Link>
                                        </td>   
                                        <td className="border px-4 py-2"> <button type="button" className="btn btn-danger d-block d-md-inline-block mr-2"
                                                onClick={   () => {
                                                            if(window.confirm('Seguro que deseas eliminar este usuario?')){
                                                               this.DeleteUser()
                                                            }
                                                    }}  
                                                         >&times; Delete User</button>  </td> 
                                                                          
                                                        
                                    </tr>      
                                ))} 
                                                                               
                                        </tbody>
                                         </table>
                                         
          </div>
          <Paginador
                             actual={this.state.paginador.actual}
                             total={2}
                             limite= {this.limite}
                             paginaAnterior={this.paginaAnterior}
                             paginaSiguiente={this.paginaSiguiente}
                         />
          </React.Fragment>
        )
    
    }

    
}


export default Users;