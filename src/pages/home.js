
import Carousel from 'react-bootstrap/Carousel'
export default function Home() {
    
let photos=[
'https://images.unsplash.com/photo-1533327325824-76bc4e62d560?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
'https://images.unsplash.com/photo-1553635331-3296745611d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1049&q=80',
'https://images.unsplash.com/photo-1429511154996-f753b4dfbf87?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
    'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80',
    'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=666&q=80',
    'https://images.unsplash.com/photo-1526243741027-444d633d7365?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80'
]

    return(
        <>

<div className="row">
<div className='container-fluid' >
<Carousel>

 {photos.map((pic)=>{


return(

 <Carousel.Item style={{ width:'100%' , height:'700px' }}>
    <img
      className="d-block w-100"
      src={pic}
      alt="First slide"
      
    />
    <Carousel.Caption style={{backgroundColor:'rgba(52, 52, 53, 0.5)'}} >
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>

)



 })} 
 
  
 
</Carousel>
</div>
</div>

<div className="jumbotron jumbotron-fluid m-5">
  <div className="container">
    <h1 className="display-4">Book Finder App</h1>
    <p className="lead">Find your favorite book and enjoy it.</p>
  </div>
</div>







        </>
    )
}