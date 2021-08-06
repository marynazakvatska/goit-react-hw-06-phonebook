import React from "react";
import PropTypes from "prop-types";
import s from "./Filter.module.css";
import contactsActions from '../../redux/actions';
import { connect } from 'react-redux';

const Filter = ({value, onChange}) => (

  <label className={s.label_filter}>
    Find contacts by name<input type="text"
      value={value} onChange={onChange}></input>
        </label>
 
);


const mapStateToProps = state => ({value: state.contacts.filter})

const mapDispatchToProps = dispatch => ({
  onChange: (e) => dispatch(contactsActions.changeFilter(e.target.value))
})

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default connect (mapStateToProps, mapDispatchToProps)(Filter)