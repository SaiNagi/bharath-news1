import React, { Component } from "react";
import NewsItem from "../NewsItem/NewsItem";
import Spinner from "../Spinner/Spinner";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export class index extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = { articles: [], loading: true, page: 1 };
  }

  handleNext = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&from=2024-02-13&sortBy=popularity&apiKey=4078245c3a6349679c8a072cd3b79889&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;

    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });
  };

  handlePrev = async () => {
    this.setState({ loading: true });
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${
      this.props.category
    }&from=2024-02-13&sortBy=popularity&apiKey=4078245c3a6349679c8a072cd3b79889&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;

    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&from=2024-02-13&sortBy=popularity&apiKey=4078245c3a6349679c8a072cd3b79889&page=1&pageSize=${this.props.pageSize}`;
    console.log(url);
    const data = await fetch(url);
    const parsedData = await data.json();
    this.setState({ articles: parsedData.articles, page: 1, loading: false });
  }

  render() {
    const { articles } = this.state;

    console.log(articles);
    return (
      <div>
        <div className="container">
          <h1 className="text-center">Headlines</h1>
          {this.state.loading && <Spinner />}
          {!this.state.loading && (
            <div className="row">
              {articles.map((element) => (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    newsUrl={element.url}
                    imageUrl={element.urlToImage}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default index;
