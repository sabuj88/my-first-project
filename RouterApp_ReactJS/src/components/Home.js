import React,{Component} from 'react'
import axios from 'axios'
// import Rainbow from '../hoc/Rainbow' 
class Home extends Component{

componentDidMount(){
  axios.get('https://jsonplaceholder.typicode.com/posts').then(res=>{
  console.log(res)

})
}
    render()
        {
            return(
                <div className= 'container'>
                    <h4 className='center'>Home</h4>
                    <p>
            Why do we use it?
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                  </p>
                </div>
            
                )
        }
}

export default Home