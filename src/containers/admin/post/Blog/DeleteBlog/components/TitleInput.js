import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectErrors, makeSelectOne } from '../selectors';
import * as mapDispatchToProps from '../actions';

const TitleInput = props => {
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
  const handleChange = name => e => {
    e.persist();
    setOneValue({ key: name, value: e.target.value });
    if (name === 'title') {
      const slug = slugify(event.target.value);
      setOneValue({ key: 'slug_url', value: slug });
    }
  }

  const hasError = Boolean(error);


  return (
<>
<div className="login100-form-special1 p-b-10">
    Title*
    </div>
    <div className="wrap-input100 validate-input m-b-20" data-validate="Enter title">
					<textarea
        error={hasError.toString()}
        onChange={handleChange('title')}
        value={( one && one.title) || ''}
        className="input100title"
        type="text"
        autoFocus  placeholder="Enter title"
      />
					<span className="focus-input100"></span>
			 {error && <div id="component-error-text">{error}</div>}
    </div>

   
</>
  );
};

TitleInput.propTypes = {
  
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
)(TitleInput);