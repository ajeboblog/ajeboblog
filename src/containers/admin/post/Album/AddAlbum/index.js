import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { push } from 'connected-next-router';
import injectSaga from '../../../../../utils/injectSaga';
import injectReducer from '../../../../../utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import {
  makeSelectOne,
  makeSelectCategory,
  makeSelectLoading,
  makeSelectErrors,
} from './selectors';




import Artist from './components/Artist';
import Album from './components/Album'
import Artwork from './components/Artwork'
import Category from './components/Category'
import International from './components/Internation';
import Hero from './components/Hero';
import Year from './components/Year';
import Download from './components/Download';
import Published from './components/Published'
import TrackList from './components/TrackList'

import * as mapDispatchToProps from './actions';


class AddEdit extends React.PureComponent {
  static propTypes = {
    loadOneRequest: PropTypes.func.isRequired,
    addEditRequest: PropTypes.func.isRequired,
    setOneValue: PropTypes.func.isRequired,
    one: PropTypes.object.isRequired,
  };



  componentDidMount() {
		this.props.clearOne();
		this.props.clearErrors();
	  }

    

  handleSave = e => {
    e.preventDefault();
    this.props.addEditRequest();
    
  };


  render() {
   
    const {
      one,
      loading,
      errors,
    } = this.props;
    
    
   
    return loading && loading == true ? (
    <>
    </>
    ) :
     (
    <>
<div className="container-login100">
		<div className="wrap-login100 p-l-55 p-r-55 p-t-80 p-b-30">
		
			<form onSubmit={this.handleSave} className="login100-form validate-form">
				<span className="login100-form-title p-b-37">
				Add Album
				</span>

        <Album/>
        <Artist/>
        <Year/>
        <Artwork/>
        <Category/>
        <TrackList/>
        <Download/>
        <Hero/>
        <International/>
        <Published/>

        <br/>

				<div className="container-login100-form-btn">
					<button  className="login100-form-btn">
                       Add Album
					</button>
				</div>	

			</form>

			
		</div>
		</div>
        

    </>
    );
  }
}

const withReducer = injectReducer({ key: 'blogManagePage', reducer });
const withSaga = injectSaga({ key: 'blogManagePage', saga });

const mapStateToProps = createStructuredSelector({
  one: makeSelectOne(),
  errors: makeSelectErrors(),
});

const withConnect = connect(
  mapStateToProps,
  { ...mapDispatchToProps, push },
);

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AddEdit);
