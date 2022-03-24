import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
  let {title, description, imageUrl, url} = this.props;
    return (
      <div>
        <div className="card">
          <img src={!imageUrl?"https://images.news18.com/ibnlive/uploads/2016/04/ironman.jpg?im=FitAndFill,width=1200,height=675": imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{!description?"Description not provided by the source": description}...</p>
            <a href={url} target="_blank" rel='noreferrer' className="btn btn-sm btn-primary">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
