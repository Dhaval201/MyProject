import React from 'react'



/*function Card(Props) {
    return (
        <div className="col-md-4 p-1">
            <div className="card">
                <img className="card-img-top" width="100%" src={Props.img} alt={Props.alt} />
                <div className="card-body">
                    <h4 className="card-title">{Props.name}</h4>
                    <p className="card-text">{Props.desc}</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>

        </div>
    )
}
*/


function Card({name,desc,alt,img}) {
    return (
        <div className="col-md-4 p-1">
            <div className="card">
                <img className="card-img-top" width="100%" src={img} alt={alt} />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>

        </div>
    )
}


export default Card
