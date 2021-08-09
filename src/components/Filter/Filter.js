import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";
import {changeFilter} from '../../redux/actions'
import { connect } from 'react-redux';

const Filter = ({value, onChange}) => (

  <label className={s.label_filter}>
    Find contacts by name<input type="text"
      value={value} onChange={onChange}></input>
        </label>
 
);


const mapStateToProps = state => ({
  value: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(changeFilter(e.target.value))
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter)

/* Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}; */