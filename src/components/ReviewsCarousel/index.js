import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {count: 0}

  OnClickLeftArrow = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  OnClickRightArrow = () => {
    const {count} = this.state
    if (count < 3) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {count} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[count]

    return (
      <div className="bg-container">
        <h1 className="title">Reviews</h1>
        <div className="carousel-container">
          <div className="carousel-card">
            <img src={imgUrl} className="img" alt={username} />
            <p className="name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="description">{description}</p>
          </div>

          <button
            className="button"
            type="button"
            onClick={this.OnClickLeftArrow}
            data-testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow-img"
            />
          </button>

          <button
            className="button"
            type="button"
            onClick={this.OnClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow-img right-arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
