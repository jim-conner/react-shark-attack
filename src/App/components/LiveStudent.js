import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle
} from 'reactstrap';
import blueSharkBait from '../../assets/blueSharkBait.png';

export default function LiveStudent({ liveStudent }) {
  return (
    <div>
      <div>
        <Card
          className='customCard'
          color='transparent'
          inverse
        >
          <CardImg
          src={blueSharkBait}
          alt="Gravestone" />
          <CardImgOverlay>
            <CardTitle tag="h5">
              {liveStudent.firstName}<br/>
              {liveStudent.lastName}
            </CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    </div>
  );
}

LiveStudent.propTypes = {
  liveStudent: PropTypes.object,
  color: PropTypes.string
};
