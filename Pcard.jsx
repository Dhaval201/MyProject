import React from 'react'

function Pcard(props) {
    return (
        <div className="col-md-4 p-3">
        <div className="card" >
  <img className="card-img-top" src={props.img} alt={props.alt}  />
  <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <a href="/#" class="btn btn-primary">{props.button}</a>
  </div>
        </div>
    </div>
            
    )
}

export default Pcard;




