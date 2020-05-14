import React from 'react';
import { connect } from "react-redux";
import Grid from '@material-ui/core/Grid';
import Button from '../components/shared/Button';
import AutoComplete from '../components/shared/AutoCompleteTextField'

import { getSearchedData } from '../actions/listAction';


function SearchBox(props) {
  const [state, setState] = React.useState({});

  const handleKing = (value) => {
    setState({ ...state, king: value });
  }
  const handleType = (value) => {
    setState({ ...state, type: value });
  }
  const handleLocation = (value) => {
    setState({ ...state, location: value });
  }

  const handleSubmit = () => {
    props.getSearchedData(state);
  }
  const { list } = props.listData
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} container direction="row">
      <Grid item xs={12} sm={4} md={4} lg={3}>
        <AutoComplete
        label="Search By king"
          inputValue={state.king}
          setInputValue={handleKing}
          optionList={list.options.kings} />
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={3}>
        <AutoComplete
        label="Battle type"
          inputValue={state.type}
          setInputValue={handleType}
          optionList={list.options.battle_type} />
      </Grid>
      <Grid item xs={12} sm={4} md={3} lg={3}>
        <AutoComplete
          label="Location"
          inputValue={state.location}
          setInputValue={handleLocation}
          optionList={list.options.location} />
      </Grid>
    <Grid>
      <Button variant='outlined' label='Search' onSubmit={handleSubmit} color='secondary' />
    </Grid>
      
    </Grid>
  )
}

const mapStateToProps = (state) => {
  return {
    searchedData: state.ListReducer.searchedData,
    listData: state.ListReducer
  }
}

export default connect(
  mapStateToProps,
  { getSearchedData }
)(SearchBox);

