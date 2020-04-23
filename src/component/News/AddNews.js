import React, {Component} from 'react'
import Singleside from './Singleside'
import axios from 'axios'
import Error from './Error'

class AddNews extends Component {

    constructor(props)
    {
        super(props);
       this.state = {
          sidenews : [],
        error : false
       };
    }

    componentDidMount(){
        const url = `http://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=fc98dfdb9bc145118b85f2d32fde3771`;

        // axios.post(url,{
        //     data: {
        //         news: {
        //             title : 'test',
        //             description : 'New Post '
        //         }
        //     }
        // })
        axios.get(url)
        .then((response) => {
            this.setState({
                sidenews:response.data.articles
            })
        })
        .catch((error) =>{ console.log(error);
            this.setState({
                error:true
            }
            );

            }
        );

    }

    renderItems(){
        console.log("AddNews", this.state.news);
        return this.state.sidenews.map((item) =>
        <Singleside key={item.url} item={item} />
        )
    }

    render() 
    {
        return(
           <div className = "row">
                {this.renderItems()}
                </div>
        )
    }
}

export default AddNews;