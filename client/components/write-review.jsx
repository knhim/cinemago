import React from 'react';
import StarRatingComponent from 'react-star-rating-component';

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      movieId: null,
      rating: 1,
      content: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleText = this.handleText.bind(this);
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({ rating: nextValue });
  }

  handleSubmit(event) {
    event.preventDefault();

    fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: this.state.content, rating: this.state.rating })
    })
      .then(response => response.json())
      .then(review => this.setState({ content: review }));
  }

  handleText(event) {
    this.setState({ content: event.target.value });
  }

  render() {
    let posterURL;
    if (this.props.poster_path !== null) {
      posterURL = `https://image.tmdb.org/t/p/w500${this.props.poster_path}`;
    } else {
      posterURL = '../images/image_placeholder.png';
    }

    return (

      <form onSubmit={this.handleSubmit} className="container">

        <h2>Write a Review</h2>

        <div className="movieReviewCard">
          <div className="row">
            <div className="col">
              <img src={posterURL} className="card-img" styles=""></img>
            </div>
            <div className="col">
              <h6 className="card-title">MovieTitle{this.props.movieTitle}</h6>
              <h6 className="card-subtitle">Rating:{this.props.rating}</h6>
              <h6 className="card-subtitle">Release Year:{this.props.releaseYear}</h6>
              <p className="card-text">{'something'}</p>
            </div>
          </div>
        </div>
        <br></br>

        <StarRatingComponent
          name="rate1"
          starCount={5}
          value={this.state.rating}
          style={{ justifyContent: 'center' }}
          onStarClick={this.onStarClick.bind(this)}
        />
        <br></br>
        <textarea
          placeholder="Write a review here"
          name="review"
          id="review"
          cols="30"
          rows="10"
          style={{ color: 'lightgrey', width: '40%' }}
          onChange={this.handleText}>
        </textarea>
        <br></br>
        <div className="button-container">
          <button className="btn btn-secondary">Cancel</button>
          <button className="btn btn-primary">Submit</button>
        </div>

      </form>

    );
  }
}
export default WriteReview;
