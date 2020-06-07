
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';


export const withAuthRedirect = (Component) => {

  class RedirectComponent extends React.Component {

    render() {

      if (!this.props.isAuth) {
        return <Redirect to="/login/" />
      }
      return <Component{...this.props} />
    }
  }
  let mapStateToProps = (state) => {

    return {
      isAuth: state.auth.isAuth
    }
  }

  return connect(mapStateToProps)(RedirectComponent)
}



export const profileСhange = (Component) => {

  class RedirectComponent extends React.Component {

    render() {
      
      if (this.props.isAuth) {
        return <Redirect to={`/profile/${this.props.activeIDUser}`} />
      }
      return <Component{...this.props} />
    }
  }
  let mapStateToProps = (state) => {

    return {
      isAuth: state.auth.isAuth,
      activeIDUser: state.auth.activeIDUser
    }
  }
  return compose(
    connect(mapStateToProps),
    
  )
    (RedirectComponent)
}