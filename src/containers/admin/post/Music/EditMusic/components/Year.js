import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import moment from 'moment'
import { createStructuredSelector } from 'reselect';
import { makeSelectErrors, makeSelectOne } from '../selectors';
import * as mapDispatchToProps from '../actions';

const Year = props => {
  const { one, setOneValue, error } = props;

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
  const handlePublishedOn = name => e => {
    e.persist();
    setOneValue({ key: name, value: e.target.value });
  }

  const hasError = Boolean(error);


  return (
<>
<div className="login100-form-special1 p-b-10">
    Year Released*
    </div>
  <div className="wrap-input100 validate-input m-b-20">
      
      <input
        className="input100"
        id="blog-title"
        type="date"
        value={
          (
            moment((one && one.year)).format("YYYY-MM-DD")) 
        }
        name="year"
        onChange={handlePublishedOn('year')}
      /> 
      <span className="focus-input100"></span>
    </div>
    
</>
  );
};

Year.propTypes = {
  
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
)(Year);
