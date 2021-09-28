import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="container my-2">
      {/* <div className="card" style={{ width: "18rem", marginLeft: "-20px" }}> */}
      <div className="card" style={{ width: "18rem" }}>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          {/* <span className="badge rounded-pill bg-info text-dark">{source}</span> */}
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-primary">
            {source}
          </span>
          <p className="card-text">{description}</p>
          <p className="card-text">
            <small className="text-muted">
              By <b>{author}</b> on <b>{new Date(date).toGMTString()}</b>
            </small>
          </p>
          <a
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark "
            rel="noreferrer"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
