import React from 'react';
import { reduxForm, Field } from 'redux-form';
import s from './Login.module.css'
import { requiredFuild } from './../../utils/validators/validators';
import { Input, CheckBox } from '../common/FormsControls/FormsControls';
import { connect } from 'react-redux';
import { log } from '../../redux/Reducers/auth-reducer';
import { profileСhange } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';



const Login = (props) => {


    const onSubmit = (formData) => {

        return (formData.login && formData.password) ?
            props.log(formData.login, formData.password, formData.remember) : undefined

    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} {...props} />
    </div>

}


const LoginForm = (props) => {



    return <form onSubmit={props.handleSubmit} className={s.form}>
        <div><Field validate={[requiredFuild]} placeholder="Login" name={"login"} component={Input} /></div>
        <div><Field validate={[requiredFuild]} type="password" placeholder="Password" name={"password"} component={Input} /></div>
        <div><Field name={"remember"} component={CheckBox} customText="Remember you?" /></div>
        {props.logError ? <div className={s.commonErrorBox}> <span >{props.logError}</span> </div> : undefined}
        <div><button >Login</button></div>


    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let mapStateToProps = (state) => {
    return {
        logError: state.auth.error,
        activeIDUser: state.auth.activeIDUser
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        log: (login, password, remember) => dispatch(log(login, password, remember))
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    profileСhange
)(Login);

