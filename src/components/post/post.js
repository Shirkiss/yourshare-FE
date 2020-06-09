import React, {Component} from 'react';
import './post.css';

class Post extends Component {
    render() {
        return <article className="post-body">
            <header className="post-header">
                <div className="post-author-name">
                    <p>{this.props.post.username}</p>
                </div>
            </header>
            <div>
                <p>{this.props.post.link}</p>
            </div>
        </article>;
    }
}

export default Post;


// username: 'William',
//     type: 'purchase',
//     company: 'asos',
//     link: 'https://www.asos.com/puma/puma-essentials-white-cropped-logo-t-shirt/prd/12076500?colourwayid=16359945&SearchQuery=&cid=4167',
//     comments: [
