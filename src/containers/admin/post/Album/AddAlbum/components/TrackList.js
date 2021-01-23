import React from 'react'
import CatInputs from './Cats'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';


class TrackList extends React.Component {

  state = {
    cats: [{ name: "", duration: "", artist: "", artwork: "", this_week: "", last_week: "" }]
    
  }

 /* handleChange = (e) => {
    if (["name", "duration"].includes(e.target.className) )
     {
      let cats = [...this.state.cats]
      cats[e.target.dataset.id][e.target.className] = e.target.value
      this.setState({ cats }, () => console.log(this.state.cats))
    } else {
      this.setState({ [e.target.name]: e.target.value})
    }
  }
*/

addCat = (e) => {
  e.preventDefault() 
  this.setState((prevState) => ({
    cats: [...prevState.cats, {name: "", duration: "", 
    artist: "", artwork: "", this_week: "", last_week: ""}],
  }));
}





  render(){

    let { cats } = this.state
    

  return (
    <>

<div className="login100-form-special1 p-b-10">
     List*
    </div>
     

      <Fab
            color="dark"
            aria-label="Add"
            round="true"
            onClick={this.addCat}
            elevation={0}
             >
            <AddIcon />
             </Fab>
          <br/><br/>
      <CatInputs cats={cats}/>
      <br/>

    </>
  )
}
}


export default TrackList;