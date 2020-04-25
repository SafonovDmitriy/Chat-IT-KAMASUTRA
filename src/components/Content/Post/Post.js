import React from 'react';
import s from './Post.module.css'
import { FaRegThumbsUp } from 'react-icons/fa';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.liker = false;
    }
    render() {
        return <div className={s.wrapper}>

            <img className={s.avatar} alt="" src={this.props.ProfileDate[this.props.posts.autor].avatar} />
            <p className={s.post}> {this.props.posts.post} </p>
            <div className={s.buttonlike}>
                <FaRegThumbsUp className={this.liker === true ? s.ico : ''} onClick={() => this.props.likeForPostActiveCreator(this.props.posts.id)
                } />
            </div>


            <p className={s.countLike}> Count Like:{this.props.posts.likes.length} </p>
        </div>
    }

}
   
    

export default Post;