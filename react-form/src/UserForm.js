import React, { PureComponent } from 'react';
import styled from 'styled-components'

class Phone extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" value={this.props.phones[0].number} />
                <select className="custom-select">
                    <option value="home">Домашній</option>
                    <option value="mobile">Мобільний</option>
                </select>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Видалити</button>
                </div>
            </div>
        );
    }
}
const Input = styled.input`
    background:${props => props.valid===""  ? "white" : props.valid ? "#C2E0C6" : "#F9D0C4"}`

export default class UserForm extends PureComponent {
    constructor(props) {
        super(props);
        this.user = this.props.user;
        this.state = {
            name: this.props.user.name,
            email: this.props.user.email,
            password: this.props.user.password,
            isValidName: "",
            isValidEmail: "",
            isValidPassword: "",
        }
        this.rules = {
            name: /^[a-щА-щЬьЮюЯяІіЄєҐґЇї]+\s+[a-щА-щЬьЮюЯяІіЄєҐґЇї]+\s+[a-щА-щЬьЮюЯяІіЄєҐґЇї]+$/,
            email: /^([^\W]+[a-zA-Z0-9.-]*)[^\W]@[^\W]([a-zA-Z0-9.-]*)\.([a-zA-Z0-9.-]*[^\W])$/,
            password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z0-9]{8,}/
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }
    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }
    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        for (let key in this.rules) {
            if (!this.rules[key].test(this.state[key])) {
                switch(key){
                    case "name":  this.setState({isValidName :false}); 
                    case "email":  this.setState({isValidEmail :false});
                    case "password":  this.setState({isValidPassword :false});
                }
               
            } else {
                switch(key){
                    case "name":  this.setState({isValidName :true}); 
                    case "email":  this.setState({isValidEmail :true});
                    case "password":  this.setState({isValidPassword :true});
                }
            }

        }

    }
    render() {
        return (
            <div className="container p-5">
                <form className="user-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>П.І.Б.</label>
                        <Input type="text" name="full_name" className="form-control" value={this.state.name} onChange={this.handleNameChange} valid={this.state.isValidName} />
                        <small className="form-text text-muted">Обовʼязково прізвище, імʼя та по батькові. Тільки літерами українскього алфавіту</small>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <Input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange} valid={this.state.isValidEmail}/>
                        <small className="form-text text-muted">Адреса електронної пошти</small>
                    </div>
                    <div className="form-group">
                        <label>Пароль</label>
                        <Input type="password" name="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} valid={this.state.isValidPassword} />
                        <small className="form-text text-muted">Мінімум 8 літер. Обовʼязково повинні бути великі та малі літери англійського алфавіту та числа</small>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        );
    }

}
