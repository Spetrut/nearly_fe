import React from "react";
import ProfileLayout from "./profile.layout";
import {_pickImage, getCameraRollPermissionAsync} from "../../services/business/image.service";
import {uploadProfilePicture,getUserById} from "../../services/http/profile.service";
import {_getPostsFromUser} from "../../services/http/post.service";

export default class Profile extends React.Component {

    state = {
        user:{
            email: "",
            username: "",
            avatar:null,
            uid:null
        },
        posts:[],
        loading:false
    };


    componentDidMount() {
        getUserById().then(res=>{
            this.setState({user:res});
        });
        _getPostsFromUser().then(posts=>{
            this.setState({posts:posts});
        });
    }


    pickImage = async () => {
        getCameraRollPermissionAsync();
        let result = await _pickImage();
        this.setState({ loading: true });

        uploadProfilePicture({localUri: result.image}).then(()=>{
            getUserById().then(res=>{
                this.setState({ loading: false });
                this.setState({user:res});
            });
        })
    };



    render(){
        return(<ProfileLayout
                              posts={this.state.posts}
                              user={this.state.user}
                              pickImage={this.pickImage}
                              loading={this.state.loading}/>);
    }
}
