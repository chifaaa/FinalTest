import React,{Component} from 'react';
import axios from 'axios'
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { comments:[] }
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`)
            .then(res => {
                this.setState({
                    comments: res.data,

                })
            })

    }

    render() { 
        return ( 
            <div className='listComment'>
                {this.state.comments.map(el =>
            <span className='comment'>

                <h2>{el.name}</h2>
                <h5>{el.body}</h5>
                
            </span>)}
            </div>
         );
    }
}
 
export default Comment;