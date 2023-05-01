import React from 'react'

const Newsitem = (props) => {
    let { title, description, urlToImage, url, author, date, source } = props
    return (
        <div>
            <div className="card">
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex: "1", margin: "5px 0" }}>
                    {source}
                </span>
                <img src={urlToImage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title + "..."}   </h5>
                    <p className="card-text">{description + "..."}</p>
                    <p className="card-text"><small className="text-body-secondary">By: {author} On:  {new Date(date).toDateString()}</small></p>
                    <a href={url} className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div >
    )
}

export default Newsitem
