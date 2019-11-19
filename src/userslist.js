
import UserCard from './usercard.js'
import React, {Component} from 'react';
import axios from 'axios';



const url = 'https://jsonplaceholder.typicode.com/users'



axios.get(url)
    .then(res => {

        for (const element of res.data) {
          console.log(element.name);
        }
    })
    .catch(err => {
        // an error happened
        console.log('OOPS! an error occured')
    })




class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users : []
    }
  }

  componentDidMount() {
    axios.get(url)
    .then(res => {
      console.log('res :', res)

        this.setState({
          users: res.data
        })
    })
    .catch(err => {

        console.log('OOPS! an error occured')
    })

  }

  render() {
    return (





<div className="users-list">
        {
          this.state.users.map((item) => {
            return (
         <UserCard  user={item} />
            )
          })
        }
</div>



)}}
    
export default UsersList 