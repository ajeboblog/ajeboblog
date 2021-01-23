import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import Close from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { createStructuredSelector } from 'reselect';
import { makeSelectErrors, makeSelectOne } from '../selectors';
import * as mapDispatchToProps from '../actions';

class Index extends React.Component {

    state = {
      cats: [{ name: "", duration: ""}]
      
    }


    addCat = (e) => {
      e.preventDefault() 
      this.setState((prevState) => ({
        cats: [...prevState.cats, {name: "", duration: ""}],
      }));
    }

    onRemove = (e, idx) => {
      e.preventDefault() 
      this.setState((prevState) => ({
        cats: [...prevState.cats],
      }));
    }
    
    onRemove = (idx) => {
      console.log(idx)
  }

    


render(){
  const { one, setOneValue, error } = this.props;

  const handleName = (e) => {
    e.persist();
    setOneValue({ key: 'name', value: e.target.value });
  }

  const handleName2 = (e) => {
    e.persist();
    setOneValue({ key: 'artwork', value: e.target.value });
  }

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
    
    {this.state.cats.map((val, idx) => { 
         let  catId = `cats-${idx}`;
         let durationId = `durations-${idx}`  
        return (
          <div key={idx}>


                <label htmlFor={catId}>{`Song #${idx + 1}`}</label>
                 <div className="wrap-input100 validate-input m-b-20">
                 <input
                onChange={handleName}
                value={( one && one.name) || ''}
                className="input100"
                type="text"
                name={catId}
                data-id={idx}
                id={catId}
                autoFocus  
                placeholder="Enter Song Name"
                 />
                 <span className="focus-input100"></span>
                </div>

            
            <label htmlFor={durationId}>Duration</label>
            <div className="wrap-input100 validate-input m-b-20">
                 <input
                onChange={handleName2}
                value={( one && one.name) || ''}
                className="input100"
                type="text"
                name={durationId}
                data-id={idx}
                id={durationId}
                autoFocus  
                placeholder="Enter Duration"
                 />
                 <span className="focus-input100"></span>
                </div>

          <br/>
          <Fab
            color="dark"
            aria-label="Add"
            round="true"
            onClick={this.onRemove(idx)}
            elevation={0}
             >
            <Close/>
             </Fab>
            <br/><br/>
</div>
  )
})
}
</>
)
}
}

Index.propTypes = {
  
  setOneValue: PropTypes.func.isRequired,
  errors: PropTypes.string,
  one: PropTypes.string
};

const mapStateToProps = createStructuredSelector({
  one: makeSelectOne(),
  errors: makeSelectErrors(),

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Index);
