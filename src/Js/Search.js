// Imports
import React from "react";

// Import React Scrit Libraray to load Google object

import "../Css/Search.css";
/* global google */

class Search extends React.Component {
  // Define Constructor
  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }
  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(
      this.autocompleteInput.current,
      { types: ["geocode"] }
    );

    this.autocomplete.addListener("place_changed", this.handlePlaceChanged);
  }

  async handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    await this.props.onPlaceLoaded(document.getElementById("search").value);
  }

  render() {
    return (
      <div>
        <div className="search">
          <input
            id="search"
            type="search"
            placeholder="Search here..."
            required
            ref={this.autocompleteInput}
          />
          <button type="submit" onClick={() => this.handlePlaceChanged()}>
            Search
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
