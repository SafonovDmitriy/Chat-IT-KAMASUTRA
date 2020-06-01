import React from 'react';
import { reduxForm, Field } from 'redux-form';
import s from './Login.module.css'
import { requiredFuild } from './../../utils/validators/validators';
import { Input, CheckBox } from '../common/FormsControls/FormsControls';
import { log } from './../../redux/Reducers/auth-reducer';

const Login = (props) => {
    const onSubmit = (formData) => {
     
        return (formData.login && formData.password) ?
            log(formData.login, formData.password, formData.remember) : undefined
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>

}


const LoginForm = (props) => {


    return <form onSubmit={props.handleSubmit} className={s.form}>
        <div><Field validate={[requiredFuild]} placeholder="Login" name={"login"} component={Input} /></div>
        <div><Field validate={[requiredFuild]} type="password" placeholder="Password" name={"password"} component={Input} /></div>
        <div><Field name={"remember"} component={CheckBox} customText="Remember you?" /></div>
        <div><button >Login</button></div>


    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;