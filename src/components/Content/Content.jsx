// import React from 'react';
// import s from './Content.module.css'
// import Profile from '../Profile/Profile';
// import NewPost from './NewPost/NewPost';
// import Post from './Post/Post';

// class Content extends React.Component {
    
//     render() {
//         return <div className={s.wrapper}>
//             <img className={s.back} alt="" src="https://www.mayak.zp.ua/images/stories/smi/zp-dk-zavodskiy.jpg" />
//             <Profile className={s.Profile}
//                 id={this.props.activeIDUser}
//                 ProfileDate={this.props.ProfileDate}
//             />
//             <NewPost className={s.NewPost}
//                 addPostActionCreator={this.props.addPostActionCreator}
//                 updatePostTextActionCreator={this.props.updatePostTextActionCreator}
//             />
//             <div className={s.Post}>
//                 {this.props.arrPost.map(posts => <Post
//                     posts={posts}
//                     ProfileDate={this.props.ProfileDate}
//                     likeForPostActiveCreator={this.props.likeForPostActiveCreator}
//                 />)
//                 }

//             </div>
//         </div>
//     }

// }
// export default Content;