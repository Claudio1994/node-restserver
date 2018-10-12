import React, { Component } from 'react';

class Login extends Component{

    constructor(){
        super();
        this.state = {
            email: '',
            password: '',
            res: {}
        }
        this.ComprobarCredenciales = this.ComprobarCredenciales.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    ComprobarCredenciales(e){

        e.preventDefault();

        fetch('/login', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'applicacion/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            this.setState({email: '', password: '', res: data});
        })
        .catch(err => console.error(err));

        
    }

    render(){
        let alert;
        if(this.state.res["ok"]){
            alert = <div className="alert alert-success text-center" role="alert">
                Estás logeado
            </div>
        }else if(this.state.res["ok"]===false){
             alert = <div className="alert alert-danger" role="alert">
                Usuario o contraseña incorrecto!
            </div>
        }

        return(
            <div className="content mt-5">
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4 bg-light p-4">
                        { alert }
                        <form onSubmit={this.ComprobarCredenciales}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" id="email" value={this.state.email} onChange={this.handleChange} name="email" className="form-control" />       
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" id="nombre" value={this.state.password} onChange={this.handleChange} name="password"  className="form-control"/>       
                            </div>
                            <div className="text-center">
                                <input type="submit" value="Send" className="btn btn-primary"/>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Login;