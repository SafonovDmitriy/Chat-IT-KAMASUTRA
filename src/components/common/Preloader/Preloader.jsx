import React from 'react';
import { preloaderGIF } from '../../../assets/images/preloader.gif'
import s from './Preloader.module.css'


let Preloader = (props) => {

    return  <div> 123 <img alt="" className={s.preloader} src={preloaderGIF} /></div>
}


export default Preloader
