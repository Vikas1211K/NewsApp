import React from 'react';

function NewsItem(props) {
        let {title,discription, imgURL, newsURL, source, author, date} = props;
        return <div>
            <div className="card" >
            <h5 className='text-center'> {source} </h5>
                <img src={imgURL?imgURL:"https://media.istockphoto.com/photos/abstract-digital-news-concept-picture-id1290904409?b=1&k=20&m=1290904409&s=170667a&w=0&h=6khncht98kwYG-l7bdeWfBNs_GGcG1pDqzLb6ZXhh7I="} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text"><small className="text-muted">By : {author?author:"Unknown"} <br/> On : {new Date(date).toLocaleString()} </small></p>
                        <a href={newsURL} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
                    </div>
            </div>
        </div>;
}
export default NewsItem;
