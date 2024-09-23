import React from "react";

const NewsItem = (props) => {
  return (
    <>
      <div className="my-3">
        <div className="card">
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              position: "absolute",
              right: "0",
            }}
          >
            <span
              className="badge rounded-pill bg-danger"
              style={{ left: "90%", zIndex: "1" }}
            >
              {props.source ? props.source : "Unknown"}
            </span>
          </div>
          <img
            src={
              !props.imageUrl
                ? "https://kubrick.htvapps.com/vidthumb/55720b7c-536f-4bfb-a750-b09d3d0a75e9/e6ead139-97cd-4e1c-b389-af334ac521f4.jpg"
                : props.imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {props.author ? props.author : "Unknown"} on{" "}
                {new Date(props.date).toGMTString()}
              </small>
            </p>
            <a
              href={props.newsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
