import React from 'react';
// import Close from '@material-ui/icons/Close';
import '../container/index.css';

export default function CustomModal(props) {
  return (
    <div
      id='cover-modal'
      style={{ display: props.show ? 'block' : 'none' }}>
      {/* <div className='close-modal'>
        <Close
          onClick={props.showModal}
          style={{ color: 'white', fontSize: 40 }}
        />
      </div> */}
      <div
        className='modal-content'
        style={{ display: props.show ? 'block' : 'none' }}>
        <div className='modal-body'>{props.children}</div>
      </div>
    </div>
  );
}
