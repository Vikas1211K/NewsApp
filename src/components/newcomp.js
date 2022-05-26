import React, { useEffect, useState } from 'react';
import NewsItem from './newsitem';
import Spinner from './spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



function NewComp(props) {

    const [articles, setarticles] = useState([]);
    const [loading, setloading] = useState(false);
    const [page, setpage] = useState(1);
    const [totalResults, settotalResults] = useState(0);
    document.title = `NewsJunky- ${props.category} `;
    
    // async UpdateNews(){
    //     // async updateNews(){
    //     //     const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${state.page}&pageSize=${props.pageSize}`;
    //     //     setState({ loading: true });
    //     //     let data = await fetch(url);
    //     //     let parsedData = await data.json()
    //     //     setState({
    //     //     articles: parsedData.articles,
    //     //     totalResults: parsedData.totalResults,
    //     //     loading: false
    //     //     })
    //     //     }

    // }
    const fetchMoreData = async () => {
        setloading(true);
        setpage(page+1)

        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=${page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        setloading(false);
        setarticles(articles.concat(parsedData.articles));
    };

   useEffect( async() => {
        setloading( true );
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pageSize=${props.pageSize}&page=1`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        setloading( false )
        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
    }, [props.category]);

    // handleNext = async () => {
    //     setState({ loading: true })
    //     console.log("next")
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${state.page + 1}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     setState({
    //         loading: false,
    //         page: state.page + 1,
    //         articles: parsedData.articles,
    //     })
    //     // console.log(state.page)
    //     // setState({
    //     //     page: state.page + 1,
    //     // })
    //     // console.log(state.page)
    //     // UpdateNews();
    // }

    // handlePrev = async () => {
    //     setState({ loading: true })
    //     console.log("Prev");
    //     let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pageSize=${props.pageSize}&page=${state.page - 1}`;
    //     let data = await fetch(url);
    //     let parsedData = await data.json()
    //     setState({
    //         loading: false,
    //         page: state.page - 1,
    //         articles: parsedData.articles,
    //         maxPage: Math.ceil(totalResults / 10)
    //     })
    //     // setState({page: state.page - 1});
    //     // console.log(state.page)
    //     // UpdateNews();
    // }
        return <div>
            <h1 className="d-flex justify-content-center">New_junky's Top Feeds</h1>
            {/* {state.loading && <Spinner />} */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                // loader={<Spinner />}
            >
                <div className='container my-3 d-flex justify-content-around'>
                    <div className='row'>
                        {articles.map((element) => {
                            return <div className='col-md-4 my-3' key={element.url}>
                                <NewsItem title={element.title} discription={element.description} imgURL={element.urlToImage} newsURL={element.url} source={element.source.name} author={element.author} date={element.publishedAt} />
                            </div>
                        })}
                        {loading && <Spinner />}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className='container d-flex justify-content-between'>
                <button disabled={state.page <= 1} type="button" className="btn btn-primary" onClick={handlePrev}>&larr; Previous</button>
                <button disabled={state.page + 1 > Math.ceil(state.totalResults / props.pageSize)} type="button" className="btn btn-primary" onClick={handleNext}>Next &rarr;</button>
            </div> */}
        </div>;

}

NewComp.defaultProps = {
    country: 'in',
    pageSize: 15,
    category: 'general',

}

NewComp.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default NewComp;
