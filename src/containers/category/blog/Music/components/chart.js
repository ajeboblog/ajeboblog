import React, {Component} from 'react'

export default class Chart extends Component {

state = {
    data: [
        
            { id: 1, intentName: "Recent" },
            { id: 2, intentName:"Trending" },
            { id: 3, intentName: "International" }
        
    ], 
    activeIndex: 0,
   
};




intentFunct = idx => {
    this.setState({ activeIndex: idx });
    console.log(`IDX:`,idx)
    console.log(`ActiveIndex`, activeIndex)
};


List(info) {
  
    return (

        <div class="tab-content" id="songsListContent">
          <div class="tab-pane fade show active" id="trending" role="tabpanel" aria-labelledby="trending-tab">
            <div class="custom-list">
                <div class="custom-list--item">
                    <div class="text-dark custom-card--inline">
                        <div class="custom-card--inline-img">
                        <img src="../assets/images/cover/small/1.jpg" alt="" class="card-img--radius-sm"/>
                        </div>
                        <div class="custom-card--inline-desc">
                        <p class="text-truncate mb-0">Trending</p>
                        <p class="text-truncate text-muted font-sm">Arebica Luna</p>
                    </div>
                </div>
                                               
                </div>
            </div>
        </div>
    </div>  
    )
}






handleList(data) {
    const { activeIndex } = this.state;

    return (

<ul class="nav nav-tabs line-tabs line-tabs-primary text-uppercase mb-4" id="songsList" role="tablist">

    { data && Array.isArray(data) && data.map((d, idx) => (

<li class="nav-item">
<a className={ activeIndex === idx ? "nav-link active" : "nav-link" } id="recent-tab" data-toggle="tab" href="#recent" role="tab" aria-controls="recent" aria-selected={ activeIndex === idx ? "true" : "false" } 
id={d.id}
onClick={() => this.intentFunct(idx)}
>{d.intentName}</a>
</li>

    ))}
</ul>
    )
}



    render(){
        const { data } = this.state;
       

    return (
        <div>
            <div class="container">
<div class="d-flex flex-wrap align-items-end">
                <div class="flex-grow-1">
                    <h4>Music</h4>
                    <p>Listen top chart</p>
                </div>
                <hr/>
                
                </div>
<br/>
            <div class="section col-12">
            <div>{this.handleList(data)}</div>
           

</div></div>
        </div>
    )                                                                                                                              
                                                                   
}
}