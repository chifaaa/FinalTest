import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import {Link} from 'react-router-dom'





class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts : []
    }
  }





  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      
       
        console.log('resdata :', res.data)
        const alias=res.data.filter(it => it.userId ==params.id)
        this.setState({
          posts: alias
        })
        console.log('filtered list :', this.state.posts)
        console.log('paramsid :', params.id)
    })
    .catch(err => {
        // an error happened
        console.log('OOPS! an error occured')
    })

  }
  
  render() {

    return (
  
<div className='listPost'>

{this.state.posts.map(el =>
<span className='post'>

  <h1>{el.title}</h1>
  <h4>{el.body}</h4>
  <br/>
  <Link to ={`/comment/${el.id}`}>  
    <img 
      className="fit-picture"
      src='https://cdn0.iconfinder.com/data/icons/free-daily-icon-set/512/Comments-512.png'     
      alt="Comments"
    >
    </img> 
  </Link>
</span>)}
</div>






      
    );
  }
}


export default Posts;



