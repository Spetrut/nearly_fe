import React, {Component} from "react";
import HomeLayout from "./home.layout";
import {_getUserLocation} from '../../services/business/location/location.service'
import {_getPostsFromLocation} from "../../services/http/post.service";

export default class Home extends Component {
    state = {
        location: null,
        errorMessage: null,
        posts: []
    };

    componentDidMount() {
        _getUserLocation().then(res => {
                this.setState(res);
              _getPostsFromLocation(res.location).then(posts=>{
                  this.setState({posts:posts});
              })
            }
        );
    }

    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = this.state.location;
        }
        if (this.props.navigation.state.params && this.props.navigation.state.params.reload) {
            this.props.navigation.state.params.reload = false;
            this.componentDidMount();
        }

        if (this.state.posts.length > 0) {
            return <HomeLayout location={text} posts={this.state.posts}/>
        } else {
            return <HomeLayout location={text}/>
        }
    }
}

