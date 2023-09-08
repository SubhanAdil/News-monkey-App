import React, { Component } from "react";

export class Newsitem extends Component {
  render() {
    let { title, description, imgUrl, more, newsUrl, author, date, source,mine} =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div style={{display:"flex", justifyContent:'flex-end',  position:'absolute',right:'0'}}>
        <span className={` badge rounded-pill bg-${mine} `}>
                {source}
              </span>
        </div>
          <img
            src={
              !imgUrl
                ? "https://vmndims.kayosports.com.au/api/v2/img/64def3bde4b08f600bbccc6a-1692578750740?location=hero-default&imwidth=2560"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}{" "}       
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted">
                By {!author ? "Unknown" : author} ON {date}
              </small>{" "}
            </p>
            <a rel="noreferrer" href={newsUrl} className="btn btn-dark btn-sm">
              {more}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
