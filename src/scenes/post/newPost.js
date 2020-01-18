import * as React from 'react';
import NewPostLayout from "./newPost.layout";
import {_pickImage, _takePhoto, getCameraRollPermissionAsync} from '../../services/business/post/image.service'
import {_getUserLocation} from "../../services/business/location/location.service";
import {_addPost} from "../../services/http/post.service";

export default class NewPost extends React.Component {
    state = {
        description: "",
        image: null,
        location: null,
        validForm: false,
        errorMessage: null,
        loading: false
    };
    componentDidMount() {
        getCameraRollPermissionAsync();
        _getUserLocation().then(res => this.setState(res));
    }

    handlePost = (description) => {
        this.setState({loading: true});
        const post ={ description: description.trim(),location:this.state.location,localUri: this.state.image };
        _addPost(post).then(() => {
            this.setState({ image: null });
            this.setState({ loading: false });
            this.props.navigation.navigate('Home',{ reload:true });
        }).catch(error => {
                this.setState({ loading: false });
                alert(error.message);
            });
    };

    pickImage = async () => {
        let result = await _pickImage();
        this.setState(result);
    };


    takePhoto = async () => {
        let result = await _takePhoto();
        this.setState(result);
    };

    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = this.state.location;
        }
        return (<NewPostLayout
            location={text}
            loading={this.state.loading}
            handlePost={this.handlePost}
            pickImage={this.pickImage}
            takePhoto={this.takePhoto}
            image={this.state.image}/>);
    }


}
