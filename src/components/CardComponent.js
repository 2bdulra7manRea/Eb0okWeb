import Button from 'react-bootstrap/Button';
export default function CardComponent({Book }) {
    



return(
<>
<div className="card mb-3 m-3 shadow p-3 mb-5 bg-white rounded" style={{width:"400px"}}>
  <div className="row no-gutters">
  <img className="card-img-top" style={{height:'200px'}} src={Book.volumeInfo.imageLinks?Book.volumeInfo.imageLinks.thumbnail:''} alt="Card image cap"></img>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{Book.volumeInfo.title}</h5>
        <p className="card-text">author : {Book.volumeInfo.authors}</p>
      <a type="button" href={Book.volumeInfo.infoLink} className="btn btn-outline-info">Info</a>
      </div>
    </div>
  </div>
</div>

</>
);
}