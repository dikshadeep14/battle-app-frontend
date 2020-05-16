import React, { useEffect } from 'react';
import Slider from 'react-animated-slider';
import Grid from '@material-ui/core/Grid';
import 'react-animated-slider/build/horizontal.css';
import { connect } from "react-redux";

import { getSearchedData, getList } from '../actions/listAction';
import SearchBox from './search';
import backGroungImage from '../asset/img/battle_2.jpg';
import logo_1 from '../asset/icon/logo_1.PNG';
import logo_2 from '../asset/icon/logo_2.PNG';
import icon_1 from '../asset/icon/icon_1.PNG';
import icon_2 from '../asset/icon/icon_2.PNG';
import icon_3 from '../asset/icon/icon_3.PNG';

import CustomModal from '../components/modal';

import './index.css';

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
    <CustomModal show={true} >
      <Grid item xs={12} md={12} style={{height: '100%' }}>
        <Grid item xs={11} md={7} style={{height: '100%', margin: 'auto'}}>
        <div style={{height: 50, opacity: 0.3}}>
          <div className='title' style={{marginTop: 0, fontSize: 12}}>
            Today's Battle
          </div>          
          <div className='title' style={{marginTop: 10, fontSize: 18}}>battle of the bastards</div>
        </div>
        <div  style={{ background: `url('${backGroungImage}') no-repeat center center`}} className='image_container'>
          <Grid item xs={12} md={12} container direction='row' style={{height: '100%'}} >
            <Grid item xs={6} md={6} style={{ backgroundColor: '#2a3035', opacity: 0.6}}>

            </Grid>
            <Grid item xs={6} md={6} style={{ backgroundColor: '#1d2124', opacity: 0.7}}>

            </Grid>
          </Grid>
        </div>
        <Grid container direction='row' justify="space-between" item xs={11} md={11} style={{height: 50, margin: 'auto'}}>
          <Grid container direction='row' item xs={6} md={6} style={{height: 50, backgroundColor: '#1c2028'}}>
            <div style={{padding: '0px 10px 0px 0px'}}>
              <img src={logo_1} alt='' className='logo_size' />
            </div>

            <div style={{ display: 'flex', padding: '0px 10px 0px 0px', alignItem: 'center', height: 50 }}>
              <img src={icon_1} alt='' style={{ width: 30, height: 30, alignSelf: 'center' }} />
              <p className='title font_small'>180</p>
            </div>

            <div style={{ display: 'flex', padding: '0px 10px 0px 0px', alignItem: 'center', height: 50 }}>
              <img src={icon_2} alt='' style={{ width: 30, height: 30, alignSelf: 'center' }} />
              <p className='title font_small'>90</p>
            </div>

            <div style={{ display: 'flex', padding: '0px 10px 0px 0px', alignItem: 'center', height: 50 }}>
              <img src={icon_3} alt='' style={{ width: 30, height: 30, alignSelf: 'center' }} />
              <p className='title font_small'>40%</p>
            </div>
          </Grid>
          <Grid container direction='row' item xs={6} md={6} style={{height: 50, backgroundColor: '#1c2028'}}>
          <div style={{ display: 'flex', marginLeft: 'auto', alignItem: 'center', height: 50 }}>
              <img src={icon_1} alt='' style={{ width: 30, height: 30, alignSelf: 'center' }} />
              <p className='title font_small'>150</p>
            </div>

            <div style={{ display: 'flex', marginLeft: 'auto', alignItem: 'center', height: 50 }}>
              <img src={icon_2} alt='' style={{ width: 30, height: 30, alignSelf: 'center' }} />
              <p className='title font_small'>50</p>
            </div>

            <div style={{ display: 'flex', marginLeft: 'auto', alignItem: 'center', height: 50 }}>
              <img src={icon_3} alt='' style={{ width: 30, height: 30, alignSelf: 'center' }} />
              <p className='title font_small'>30%</p>
            </div>
            <div style={{marginLeft: 'auto'}}>
              <img src={logo_2} alt='' className='logo_size' />
            </div>
          </Grid>
        </Grid>
        
        </Grid>
        
      </Grid>
      </CustomModal>
    // <Grid item xs={12} md={10} className="container center_grid">
      
    //   {props.listData && <SearchBox />}
    //   <div className='slider_container'>
    //     <Slider>
    //       {newsTemplate}
    //     </Slider>
    //   </div>
    // </Grid>
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
