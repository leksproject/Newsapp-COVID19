import React, {Component} from 'react'
import NewsData from './NewsData'
import Error from './Error'
import '../App.css';


class News extends Component {

    constructor(props)
    {
        super(props);
       this.state = {
          news : [],
          error : false
       };
    }

    componentDidMount(){
        console.log("ComponentDIDMount",this.props);
        const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=fc98dfdb9bc145118b85f2d32fde3771`;

        fetch(url)
            .then((response) =>{
                if(response.ok){
                    response = response.clone().json();
                console.log("Response is ok",response);
         
            }
                return response;
            }
            )

            // .then((data) => {
            //     console.log("Data",data.articles);
            // })
            .then((data) => {
                console.log("Data", Array.from(data.articles));
                 this.setState({
                    news : Array.from(data.articles)
                
                })
               
            })
            .catch((error) =>{ console.log(error)
                this.setState ({
                    error : true
                })
            }
                );
    }

    renderItems(){
        if(!this.state.error){
        console.log("renderItems", this.state.news);
        return this.state.news.map((item) =>
        <NewsData key={item.url} item={item} />
        )
    }
    else{
        return <Error/>
    }
    }

    render() 
    {
        return(
            <div className="container">
           <div className = "row">
                {this.renderItems()}
                </div>
                </div>
        )
    }
}

export default News;