/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-next-router';
import moment from 'moment';


// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import CheckBox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
// core components
import reducer from '../reducer';
import saga from '../saga';
import { makeSelectOne, makeSelectErrors } from '../selectors';
import * as mapDispatchToProps from '../actions';

import { DATE_FORMAT } from '../../../App/constants';

class UserPersonalInformationPage extends React.PureComponent {
  static propTypes = {
    loadOneRequest: PropTypes.func.isRequired,
    addEditRequest: PropTypes.func.isRequired,
    setOneValue: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.object,
    }),
    classes: PropTypes.object.isRequired,
    one: PropTypes.object.isRequired,
    errors: PropTypes.object,
  };

  componentDidMount() {
    this.props.clearError();
    this.props.loadOneRequest();
  }

  handleChange = name => event => {
    event.persist();
    this.props.setOneValue({ key: name, value: event.target.value });
  };

  handleDateChange = name => date => {
    this.props.setOneValue({
      key: name,
      value: moment(date).format(DATE_FORMAT),
    });
  };

  handleSave = () => {
    this.props.addEditRequest();
  };

  render() {
    const { classes, one, errors } = this.props;
    return (
      <React.Fragment>
        <div className="w-full pb-4">
          <label className="label">
            Name
          </label>

          <FormControl
            className="md:w-1/2"
            error={errors && errors.name && errors.name.length > 0}
          >
            <input
              className="inputbox"
              id="name"
              type="text"
              value={one.name || ''}
              onChange={this.handleChange('name')}
            />
            <FormHelperText id="component-error-text">
              {errors.name}
            </FormHelperText>
          </FormControl>
        </div>

        <div className="w-full pb-4">
          <label className="label">
            Email
          </label>

          <FormControl
            className="md:w-1/2"
            error={errors && errors.email && errors.email.length > 0}
          >
            <input
              className="inputbox"
              id="email"
              type="text"
              value={one.email || ''}
              onChange={this.handleChange('name')}
            />
            <FormHelperText id="component-error-text">
              {errors.email}
            </FormHelperText>
          </FormControl>
        </div>

        <div className="md:w-1/2 pb-4">
          <label className="label">
            Date Of Birth
          </label>

          
        </div>

        <FormControlLabel
          control={
            <CheckBox checked={one.email_verified || false} color="primary" />
          }
          label="Email Verified"
        />

        <div className="w-full pb-2">
          You are one of {one.roles.map(each => `${each.role_title} `)}
        </div>

        <div className="w-full  pb-4">
          Your account created at {moment(one.added_at).format(DATE_FORMAT)}
        </div>

        <button
          className="py-2 px-6 rounded mt-4 text-sm text-white bg-primary uppercase btn-theme"
          onClick={this.handleSave}
        >
          Save
        </button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  one: makeSelectOne(),
  errors: makeSelectErrors(),
});

const withConnect = connect(
  mapStateToProps,
  { ...mapDispatchToProps, push },
);

const styles = theme => ({});

const withStyle = withStyles(styles);

export default compose(
  withConnect,
  withStyle,
)(UserPersonalInformationPage);
