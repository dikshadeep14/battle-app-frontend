import React, { useState, useEffect } from 'react';
import Slider from 'react-animated-slider';
import Grid from '@material-ui/core/Grid';
import 'react-animated-slider/build/horizontal.css';
import { connect } from "react-redux";

import { getSearchedData, getList } from '../actions/listAction';
import SearchBox from './search';
import backGroungImage from '../asset/img/battle_2.jpg';
import logo_1 from '../asset/icon/logo_1.jpg';
import logo_2 from '../asset/icon/logo_3.jpg';
import icon_1 from '../asset/icon/skull.jpg';
import icon_2 from '../asset/icon/heart_rate.jpg';
import icon_3 from '../asset/icon/icon_3.png';

import '../components/index.css';

const Battles = (props) => {
  const { listData, searchedData } = props;

  useEffect(() => props.getList(), []);

  let list = listData ? listData.list : [];
  let searchList = searchedData && searchedData.list;
  let data = searchList ? searchList : list;
  let newsTemplate;
  if (data.length > 0) {
    newsTemplate = data.map((item, index) =>
      <div key={index} className='view_container alignCenter'>
        <div key={index} style={{ background: `url('${backGroungImage}') no-repeat center center`}} className='image_container'>
          <h5 className='title'>Tonight's</h5>
          <h2 className='title'>{item.name}</h2>
          <div style={{ display: '-webkit-inline-box' }}>
            <Grid item xs={6}>
              <h3 className='title underline'>Defender</h3>
              <h5 className='title'>{item.defender_king}</h5>
            </Grid>
            <Grid item xs={6}>
              <h3 className='title underline'>Attacker</h3>
              <h5 className='title'>{item.attacker_king}</h5>
            </Grid>

          </div>
        </div>
        <Grid item container xs={10} md={5} direction='row' className="footer_container" >
          <Grid item xs={6} md={6} container direction='row'>
            <Grid item xs={6} md={3}>
              <img src={logo_1} alt='' className='logo_size' />
            </Grid>

            <Grid item xs={6} md={3} container direction='row' className='alignCenter footer_element'>
              <img src={icon_1} alt='' style={{ width: 30, height: 30 }} />
              <p className='title font_small'>180</p>
            </Grid>

            <Grid item xs={6} md={3} container direction='row' className='alignCenter footer_container'>
              <img src={icon_2} alt='' style={{ width: 30, height: 30 }} />
              <p className='title font_small'>90</p>
            </Grid>

            <Grid item xs={6} md={3} container direction='row' className='alignCenter'>
              <img src={icon_3} alt='' style={{ width: 30, height: 30 }} />
              <p className='title font_small'>90%</p>
            </Grid>

          </Grid>
          <Grid item xs={6} md={6} container direction='row'>
            <Grid item xs={6} md={3} container direction='row' className='alignCenter'>
            <img src={icon_1} alt='' style={{ width: 30, height: 30 }} />
            <p className='title font_small'>70</p>
            </Grid>
            
            <Grid item xs={6} md={3} container direction='row' className='alignCenter'>
            <img src={icon_2} alt='' style={{ width: 30, height: 30 }} />
            <p className='title font_small'>90</p>
            </Grid>
            
            <Grid item xs={6} md={3} container direction='row' className='alignCenter'>
            <img src={icon_3} alt='' style={{ width: 30, height: 30 }} />
            <p className='title font_small'>90%</p>
            </Grid>
            
            <Grid item xs={6} md={3} container direction='row'>
              <img src={logo_2} alt='' className='logo_size' />
            </Grid>
            
          </Grid>
        </Grid>
      </div>
    )
  } else {
    newsTemplate = <p>Please add some cards</p>
  }

  return (
    <div>
      {props.listData && <SearchBox />}
      <div className='slider_container'>
        <Slider>
          {newsTemplate}
        </Slider>
      </div>

    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    searchedData: state.ListReducer.searchedList,
    listData: state.ListReducer.list
  }
}

export default connect(
  mapStateToProps,
  { getSearchedData, getList }
)(Battles);
