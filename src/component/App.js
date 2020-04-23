import React,{Component} from 'react';
import './App.css';
import News from './News/News'
import AddNews from './News/AddNews'
import Selector from './News/Selector'

const techCompanies = [
  { label: "US", value: 1 },
  { label: "India", value: 2 },
  { label: "France", value: 3 },
  { label: "Spain", value: 4 },
  { label: "Amazon", value: 5 },
  { label: "Alphabet", value: 6 },
];

class App extends Component {


  constructor(props){
    super(props);
    this.state = {
      news1 : {
        type : 'top-headlines',
        query : 'language=en&sources=bbc-news'
    },
    news2 : {
     type : 'top-headlines',
     query : 'domains=www.cdc.gov&COVID-19&language=en'
 },
 news3 : {
  type : 'top-headlines',
  query : 'COVID-19&language=en'
},

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


    
    
    
    }

     handleChange(event){

     }

     handleSubmit(event){

     }
    

      
      
      
   

  
  render()
  {
    // const Selector = () =>{
    //   console.log("In selector");
    //   return(

    //     <div>
    //       <h4>Im here</h4>
        
    //     <div className="container">
    //       <div className="row">
    //         <h4>I'm here</h4>
    //         {/* <div className = "col md 4"> */}
    //           <label>Select Country</label>
    //           <select options={'US','India'}/>
    //         {/* </div> */}
    //       </div>

    //     </div>
    //     </div>
    //   );
    // }

    return(
      <div className="container-fluid">        
        <div className="navbar-fixed">
          
      
            <div className="nav-wrapper indigo center">
              <h3>Latest News</h3>
            
            <nav >
          {/* <ul>
            <li><a href="#">One</a></li>
            <li><a href="#">Two</a></li>
            <li><a href="#">Three</a></li>
          </ul> */}
            <Selector/>
           
             <a href="#!" className='bran-logo '>News feed</a> 
             {/* <h1>News feed on COVID-19</h1> */}       

           
          
          </nav>
          </div>
          </div>
      
                        
        <div className='row'>
        <div className='col s8'>
           <News news={this.state.news1}/>
           
           <News news={this.state.news2}/></div>
         </div>

        <div className='col s4'>
        <AddNews news={this.state.news3}/>
        </div>
      

      {/* <div className='row'>
        <div className='col s8'>
           <News news={this.state.news1}/>
            <News news={this.state.news2}/>
        </div>
        
        <div className='col s4'>
        <AddNews news={this.state.news3}/>
        </div> */}

       
       
      </div>
     
   
    
    );
}
}

export default App;
