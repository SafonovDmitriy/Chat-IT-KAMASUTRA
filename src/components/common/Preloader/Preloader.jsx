import React from 'react';
import  preloaderGIF  from '../../../assets/images/preloader.gif'
import s from './Preloader.module.css'


const Preloader = (props) => {

    return  <img alt="" className={s.preloader} src={preloaderGIF} />
}


export default Preloader
