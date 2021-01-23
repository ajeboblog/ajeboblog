import React from 'react';
import PropTypes from 'prop-types';
import { Form, Field } from 'react-final-form'
import arrayMutators from 'final-form-arrays'
import { FieldArray } from 'react-final-form-arrays'
import { connect } from 'react-redux';
import validator from 'validator';
import FormControl from '@material-ui/core/FormControl';
import Close from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { createStructuredSelector } from 'reselect';
import { makeSelectErrors, makeSelectOne } from '../selectors';
import * as mapDispatchToProps from '../actions';


const TrackList = props => {
  const { one, setOneValue, error, user } = props;

  const handleSave = e => {
    e.preventDefault();
    this.props.addEditRequest();
    
  };


  const slugify = text => {
    return text
      .toString()
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with -
      .replace(/[^\w\-]+/g, '') // Remove all non-word chars
      .replace(/\-\-+/g, '-') // Replace multiple - with single -
      .replace(/^-+/, '') // Trim - from start of text
      .replace(/-+$/, ''); // Trim - from end of text
  };
  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    setOneValue({ key: 'images', value: imageList });
  };
  const handleName = (e) => {
    e.persist();
    setOneValue({ key: 'artwork', value: e.target.value });
  }

  const hasError = Boolean(error);


  return (
<>
<div className="login100-form-special1 p-b-10">
          Tracks*
    </div>
    
  <Form
     onSubmit={handleSave}

     mutators={{
      // potentially other mutators could be merged here
      ...arrayMutators
    }}

    render={({ handleSubmit, pristine, invalid }) => (

      <form onSubmit={handleSubmit}  onChange={handleName}>
        <FieldArray name='track'>
        {({ fields }) => (
            <div>
               <Fab
            color="dark"
            aria-label="Add"
            round="true"
            onClick={( )=> fields.push({ firstName: '', lastName: '' })}
            elevation={0}
             >
            <AddIcon />
             </Fab>
          <br/><br/>

             
              {fields.map((name, index) => (
                <div key={name}>
                 


                 
                <label>{`Song #${index + 1}`}</label>
                 <div className="wrap-input100 validate-input m-b-20">
                 <input
               
                value={( one && one.name) || ''}
                className="input100"
                type="text"
                autoFocus  
                placeholder="Enter Song Name"
                 />
                 <span className="focus-input100"></span>
                </div>

                <br/>
          <Fab
            color="dark"
            aria-label="Add"
            round="true"
            onClick={() => fields.remove(index)}
            elevation={0}
             >
            <Close/>
             </Fab>
            <br/><br/>

          </div>
               
              ))}
             
            </div>
          )}
        </FieldArray>
      </form>
    )}
  />

</>
  );
};

TrackList.propTypes = {
  
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
)(TrackList);
