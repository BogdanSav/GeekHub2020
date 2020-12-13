import React, { PureComponent } from 'react';
import styled from 'styled-components'


const Input = styled.input`
    background:${props => props.valid === "" ? "white" : props.valid ? "#C2E0C6" : "#F9D0C4"}`

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
            phones: this.props.user.phones,
            isValidPhone: Array(this.props.user.phones.length).fill(''),
            phoneForms : '',
        }
        this.rules = {
            name: /^[a-щА-щЬьЮюЯяІіЄєҐґЇї]+\s+[a-щА-щЬьЮюЯяІіЄєҐґЇї]+\s+[a-щА-щЬьЮюЯяІіЄєҐґЇї]+$/,
            email: /^([^\W]+[a-zA-Z0-9.-]*)[^\W]@[^\W]([a-zA-Z0-9.-]*)\.([a-zA-Z0-9.-]*[^\W])$/,
            password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z0-9]{8,}/,

        };
        this.phoneRules = {
            home: /^[^0\D]\d{5}$/,
            mobile: /(^[0]\d{9}$)|(^[3]\d{11}$)/
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.deletePhone= this.deletePhone.bind(this);
        this.addPhone=this.addPhone.bind(this);
        console.log(this.state.isValidPhone);
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
    handlePhoneChange(event) {
      
        let phones = [...this.state.phones];
        console.log(phones);
        phones[event.target.id].number = event.target.value;
        this.setState({ phones });

    }
    handleSelectChange(event) {
        let phones = [...this.state.phones];
        console.log(phones);
        phones[event.target.getAttribute('ind')].type = event.target.value;
        this.setState({ phones });

    }
    addPhone(event){
        event.preventDefault();
        let isValidPhone = [...this.state.isValidPhone];
        let phones = [...this.state.phones];
        phones.push({number:"", type: "home"});
        isValidPhone.push("");
        this.setState({phones,isValidPhone});
    }
    deletePhone(event){
        let phones = [...this.state.phones];
        // console.log(phoneForms);
        phones.splice(event.target.getAttribute('index'),1);
        this.setState({phones});

    }

    handleSubmit(event) {
        event.preventDefault();
        for (let key in this.rules) {
            if (!this.rules[key].test(this.state[key])) {
                switch (key) {
                    case "name": this.setState({ isValidName: false });
                    case "email": this.setState({ isValidEmail: false });
                    case "password": this.setState({ isValidPassword: false });
                }

            } else {
                switch (key) {
                    case "name": this.setState({ isValidName: true });
                    case "email": this.setState({ isValidEmail: true });
                    case "password": this.setState({ isValidPassword: true });
                }
            }
        }
        let isValidPhone = [...this.state.isValidPhone];
        this.state.phones.forEach((phone, index) => {
            if (this.phoneRules[phone.type].test(phone.number)) {
                isValidPhone[index] = true;
            } else isValidPhone[index] = false;

        });
        this.setState({ isValidPhone });

    }
    render() {
        return (
            <div className="container p-5">
                <form className="user-form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>П.І.Б.</label>
                        <Input key="full-name" type="text" name="full_name" className="form-control" value={this.state.name} onChange={this.handleNameChange} valid={this.state.isValidName} />
                        <small className="form-text text-muted">Обовʼязково прізвище, імʼя та по батькові. Тільки літерами українскього алфавіту</small>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <Input key="email" type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleEmailChange} valid={this.state.isValidEmail} />
                        <small className="form-text text-muted">Адреса електронної пошти</small>
                    </div>
                    <div className="form-group">
                        <label>Пароль</label>
                        <Input key="password" type="password" name="password" className="form-control" value={this.state.password} onChange={this.handlePasswordChange} valid={this.state.isValidPassword} />
                        <small className="form-text text-muted">Мінімум 8 літер. Обовʼязково повинні бути великі та малі літери англійського алфавіту та числа</small>
                    </div>
                    <label>Phones</label>
                    {this.state.phoneForms=this.state.phones.map((phone, index) => (
                        <div className="input-group mb-3" key= {index}>
                            <Input type="text" className="form-control" value={phone.number} id={index} onChange={this.handlePhoneChange} valid={this.state.isValidPhone[index]} />
                            <select className="custom-select" value={phone.type} ind={index} onChange={this.handleSelectChange} >
                                <option value="home">Домашній</option>
                                <option value="mobile">Мобільний</option>
                            </select>
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary" type="button" index={index} onClick={this.deletePhone}>Видалити</button>
                            </div>
                        </div>
                    ))}
                    <button className="add-phone" onClick={this.addPhone}>Додати телефон</button>
                        
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        );
    }

}
