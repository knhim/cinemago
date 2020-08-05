import React from 'react';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, profile: {} };
  }

  componentDidMount() {
    // fetch user profile endpoint
    // uzair - dummy data
    this.setState({
      loading: false,
      profile: { name: 'Uzair', bio: 'I like anime and fast cars. nuff said', imageURL: null }
    });
  }

  render() {
    if (this.state.loading) {
      return <h2>Loading...</h2>;
    } else {
      return <>
        <div className="container">
          <div className="d-flex flex-column justify-content-center">
            <h3 className='text-center'>{this.state.profile.name}</h3>
            <img className='rounded mx-auto d-block' src={(this.state.profile.imageURL === null) ? '../images/image_placeholder.png' : this.state.profile.imageURL}></img>
            <div className=" border border-secondary p-2 w-50 mx-auto m mt-3">
              <p className="font-weight-bold">Bio:</p>
              <p className="text-muted">{this.state.profile.bio}</p>
            </div>
            <div className=" border border-secondary p-2 w-50 mx-auto mt-3">
              <p className="font-weight-bold">Reviews</p>
              <p className="font-weight-bold">Lists</p>
              <p className="font-weight-bold">Settings</p>
            </div>
          </div>
        </div>

      </>;
    }
  }
}

export default UserProfile;