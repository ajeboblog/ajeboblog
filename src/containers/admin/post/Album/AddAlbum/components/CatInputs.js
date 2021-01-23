import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectErrors, makeSelectOne } from '../selectors';
import * as mapDispatchToProps from '../actions';
import FormControl from '@material-ui/core/FormControl';
import Close from '@material-ui/icons/Close';
import Fab from '@material-ui/core/Fab';


const CatInputs = (props) => {

    const { one, setOneValue, error } = props;

    const handleChange = name => e => {
        e.persist();
        setOneValue({ key: name, value: e.target.value });
      }

    const handleDropDownChange = name => e => {
        e.persist();
        setOneValue({ key: name, value: e.target.value });
      }

   /* const onRemove = (idx) => {
        console.log(idx)
    }

    */

    return (
       props.cats.map((val, idx) => {
           
           return (
             <div key={idx}>


                 <label htmlFor={catId}>{`Song #${idx + 1}`}</label>
                 <div className="wrap-input100 validate-input m-b-20">
                 <input
                 type="text"
                 onChange={handleChange('name')}
                 value={( one && one.track.name) || props.cats[idx].name}
                 className="name"
                 placeHolder="Enter Song Name"
                 />
                 <span className="focus-input100"></span>
                </div>


             
                <label htmlFor={durationId}>Duration</label>
                <div className="wrap-input100 validate-input m-b-20">
                 <input
                 type="text"
                 name={durationId}
                 data-id={idx}
                 id={durationId}
                 onChange={handleChange('duration')}
                 value={( one && one.track.duration) || props.cats[idx].duration}
                 className="input100"
                 placeHolder="Enter Duration"
             />
             <span className="focus-input100"></span>
            </div>


                <label htmlFor={catId}>Artist Name</label>
                 <div className="wrap-input100 validate-input m-b-20">
                 <input
                 type="text"
                 name={catId}
                 data-id={idx}
                 id={catId}
                 value={( one && one.track.artist ) || props.cats[idx].artist}
                 onChange={handleChange('artist')}
                 className="input100"
                 placeHolder="Enter Artist Name"
                 />
                 <span className="focus-input100"></span>
                </div>



                <label htmlFor={catId}>Artwork Name</label>
                 <div className="wrap-input100 validate-input m-b-20">
                 <input
                 type="text"
                 name={catId}
                 data-id={idx}
                 id={catId}
                 value={( one && one.track.artwork) || props.cats[idx].artwork}
                 onChange={handleChange('artwork')}
                 className="input100"
                 placeHolder="Enter Artwork Name"
                 />
                 <span className="focus-input100"></span>
                </div>



            <div className="login100-form-special1 p-b-10">
                This Week*
            </div>
            <div className="wrap-input100 validate-input m-b-20">
                    

            { <FormControl>
            <select
              className="input100"
              value={( one && one.track.this_week) || ''}
              onChange={handleDropDownChange('this_week')}
              
            >
              <option value="none" >
                0
              </option>
              <option value="1" >
                1
              </option>
              <option value="2">
                2
              </option>
              <option value="3" >
                3
              </option>
              <option value="4">
                4
              </option>
              <option value="5">
                5
              </option>
              <option value="6" >
                6
              </option>
              <option value="7">
                7
              </option>
              <option value="8" >
                8
              </option>
              <option value="9">
                9
              </option>
              <option value="10">
                10
              </option>

            </select>
            </FormControl> }
          </div>


          <div className="login100-form-special1 p-b-10">
          Last Week*
    </div>
    <div className="wrap-input100 validate-input m-b-20">
            

            { <FormControl>
            <select
              class="input100"
              value= {( one && one.track.last_week ) ||''}
              onChange={handleDropDownChange('last_week')}
            >
              <option value="none" >
                0
              </option>
              <option value="1" >
                1
              </option>
              <option value="2">
                2
              </option>
              <option value="3" >
                3
              </option>
              <option value="4">
                4
              </option>
              <option value="5">
                5
              </option>
              <option value="6" >
                6
              </option>
              <option value="7">
                7
              </option>
              <option value="8" >
                8
              </option>
              <option value="9">
                9
              </option>
              <option value="10">
                10
              </option>

            </select>
            </FormControl> }
          </div>
<br/>
<Fab
            color="dark"
            aria-label="Add"
            round="true"
            onClick={() => onRemove(idx)}
            elevation={0}
             >
            <Close/>
             </Fab>
            <br/><br/>
             </div>
           )
       })
    )
}

CatInputs.propTypes = {
  
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
  )(CatInputs);
