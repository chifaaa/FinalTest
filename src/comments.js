import React,{Component} from 'react';
import axios from 'axios'
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = { comments:[] }
    }
    componentDidMount() {
        const { match: { params } } = this.props;
        axios.get('https://jsonplaceholder.typicode.com/comments')

            .then(res => {
                console.log('resdata :', res.data)
                const alias=res.data.filter(it => it.postId ==params.id)
                
        this.setState({
          comments: alias
        })
        console.log('state :', this.state.comments)
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
