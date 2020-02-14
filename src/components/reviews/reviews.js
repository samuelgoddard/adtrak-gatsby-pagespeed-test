import React from "react"
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ReviewsIcon from "../../images/reviews.inline.svg";

class Reviews extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: [],
      isLoading: true,
    };
  }

  fetchReviews() {
    axios.get(`https://api.reviews.co.uk/merchant/reviews?per_page=10&order=desc&store=adtrak-llp`)
    
    .then(res => 
      this.setState({
        reviews: res.data.reviews,
        stats: res.data.stats,
        isLoading: false
      })
    )
    .catch((err) => {
      console.log(err + ': Error accessing Reviews API');
    });
  }

  componentDidMount() {
    this.fetchReviews();
  }
  
  render() {
    return (
      <>
        {!this.state.isLoading ? (
          <a href="https://www.reviews.co.uk/company-reviews/store/adtrak-llp" target="_blank" rel="noopener noreferrer" className="inline-block text-center no-underline hover:opacity-75 focus:opacity-75">
            <div>
              <span className="text-base text-sm">Rated <strong>{this.state.stats.average_rating}</strong></span>
            </div>

            <div>
              {[...Array(Math.round(this.state.stats.average_rating))].map((e, i) => (
                <FontAwesomeIcon key={i} className="text-primary text-lg mr-1" icon="star" />
              ))}
            </div>

            <div className="mb-1">
              <span className="text-base text-sm">Read our <strong>{this.state.stats.total_reviews}</strong> reviews</span>
            </div>
            
            <div className="w-40">
              <ReviewsIcon />
            </div>
          </a>
        ) : (
          <p>Loading Reviews&hellip;</p>
        )}
      </>
    );
  }
}

export default Reviews;