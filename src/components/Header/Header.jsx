import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import s from './Header.module.css';



class Header extends React.Component {
  state = {
    avaBox: false
  }
  avaCheck = () => {
    this.setState({ ...this.state, avaBox: !this.state.avaBox })
  }
  logOut = () => {
    this.setState({ ...this.state, avaBox: !this.state.avaBox })
    this.props.logOut();
    return <Redirect to="/login/" />
  }

  render() {


    return <div className={s.wrapper}>
      <img className={s.logo} alt="" src="https://volkland.com.ua/sites/all/themes/volkland/logo.png" />

      <div className={s.headerMenu}><ul>
        <a href="/#1"><li>Item1</li></a>
        <a href="/#2"><li>Item2</li></a>
        <a href="/#3"><li>Item3</li></a>
        <a href="/#4"><li>Item4</li></a>
        <a href="/#5"><li>Item5</li></a>
      </ul></div>





      <div>
        {
          <div className={this.state.avaBox ? s.loginMenu : s.nonLoginMenu}>

            <ul >
              <li onClick={this.logOut}>EXIT</li>
            </ul>


          </div>}
      </div>
      <div>
        {this.props.isAuth === false ? <NavLink to="/login/">Login</NavLink> :
          <div className={s.loginPict}>
            <img onClick={this.avaCheck} alt="" src={this.props.avatar} />
          </div>}
      </div>


    </div>

  }
};
export default Header