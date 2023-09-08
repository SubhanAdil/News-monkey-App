import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "3",
    category: "general",
  };
  PropTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  /* articles =[
      {
          "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
      },
      {
          "source": {
              "id": "espn-cric-info",
              "name": "ESPN Cric Info"
          },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
      }, {
        "source": {
            "id": "espn-cric-info",
            "name": "ESPN Cric Info"
        },
        "author": null,
        "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
        "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
        "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
        "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
        "publishedAt": "2020-04-27T11:41:47Z",
        "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    }
  ]*/
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    } - NewsMonkey `;
  }

  async updateNews() {

    this.props.setProgress(10);
    console.log("cdm");
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=457e0e83d89d4a09989dce392ac93835&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    this.props.setProgress(50);
    await fetch(url)
    
      .then((res) => res.json())
      .then((json) => {
        this.props.setProgress(80);
        this.setState({
          articles: json.articles, //totalResults:fetch.totalResults
          loading: false,
          totalResults: fetch.totalResults,
        });
      });
    this.props.setProgress(100);
      
  }
  async componentDidMount() {
    //  console.log("cdm");
    //  let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=457e0e83d89d4a09989dce392ac93835&page=1&pageSize=${this.props.pageSize}`;
    //  this.setState({loading:true});
    //await fetch(url).then((res) => res.json())
    //.then((json) => {
    //    this.setState({
    //        articles: json.articles, //totalResults:fetch.totalResults
    //        loading:false
    //    });
    //});
    this.updateNews();
  }
  handlePrevClick = async () => {
    // console.log("previous");
    // let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=457e0e83d89d4a09989dce392ac93835&page=${this.state.page -1}`;
    // this.setState({loading:true});
    // await fetch(url).then((res) => res.json())
    //.then((json) => {
    //    this.setState({
    //        articles: json.articles,
    //        loading:false
    //                 });
    // });
    // console.log("next");
    // this.setState({
    //  page : this.state.page - 1
    //})
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  handleNextClick = async () => {
    //  let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&//apiKey=457e0e83d89d4a09989dce392ac93835&page=${this.state.page -1 }&pageSize=${this.props.pageSize}`;
    //  this.setState({loading:true});
    //   await fetch(url).then((res) => res.json())
    //  .then((json) => {
    //      this.setState({
    //          articles: json.articles,
    //          loading:false
    //      });
    //  });
    //
    //  console.log("next");
    //  this.setState({
    //    page : this.state.page + 1
    //
    //  })
    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };


   fetchMoreData = async () => {
    this.setState({page:this.state.page+1});
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=457e0e83d89d4a09989dce392ac93835&page=${this.state.page}&pageSize=${this.props.pageSize}`;
     fetch(url)
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          articles:this.state.articles.concat( json.articles), //totalResults:fetch.totalResults       
          totalResults: fetch.totalResults,
        });
      });
  };


  render() {
    return (
      <  >
        <h1 className="text-center my-5" style={{ margin: "35px 0px" }}>
          NewsMonkey--TOp{" "}
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1)}{" "}
          Headlines{" "}
        </h1>
          {this.state.loading &&<Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />}
        >
 <div className="container">
          <div className="row">
            {
              /*!this.state.loading &&*/ this.state.articles.map((element) => {
                return (
                  <div className="col md-3" key={element.url}>
                    <Newsitem
                      imgurl={element.urlToImage}
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      more="more detail"
                      imgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                      mine={this.props.mine}
                    />{" "}
                  </div>
                );
              })
            }
          </div>
          </div>
        </InfiniteScroll>
        {/*
        <div className="container d-flex justify-content-center ">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary mx-2"
            onClick={this.handlePrevClick}
          >
            {" "}
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
            }
            type="button"
            className="btn btn-primary mx-2"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>

        <div>hello your name is {this.props.GGG}</div>
        */}
      </>
          
    );
  }
}

export default News;
