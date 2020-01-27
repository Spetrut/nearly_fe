import React, {Component} from "react";
import HomeLayout from "./home.layout";
import {_getUserLocation} from '../../services/business/location.service'
import {_getPostsFromLocation} from "../../services/http/post.service";
import commonStyles from "../common.styles";

export default class Home extends Component {
    state = {
        location: null,
        errorMessage: null,
        posts: [],
        popularColor: commonStyles.colorDarkGrey,
        latestColor: commonStyles.colorWhite
    };

    componentDidMount() {
        _getUserLocation().then(res => {
                this.setState(res);
                _getPostsFromLocation(res.location).then(posts => {
                    this.setState({posts: posts});
                })
            }
        );
    }

    popularButtonPress() {
        this.setState(
            {...this.state, popularColor: commonStyles.colorWhite, latestColor: commonStyles.colorDarkGrey}
        )
    }

    latestButtonPress() {
        this.setState(
            {...this.state, popularColor: commonStyles.colorDarkGrey, latestColor: commonStyles.colorWhite}
        )
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
            return <HomeLayout popularColor={this.state.popularColor} latestColor={this.state.latestColor}
                               location={text} posts={this.state.posts}
                               popularButtonPress={() => this.popularButtonPress()}
                               latestButtonPress={() => this.latestButtonPress()}
            />
        } else {
            return <HomeLayout location={text}/>
        }
    }
}

