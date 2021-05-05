import React from 'react';
import PropTypes from 'prop-types';
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle
} from 'reactstrap';
import gravestone from '../../assets/gravestone.png';

export default function GraveStone({ deadStudent }) {
  return (
    <div>
    <div>
      <Card
        className='customCard'
        color='transparent'
        inverse
      >
        <CardImg
        src={gravestone}
        alt="Gravestone" />
        <CardImgOverlay>
          <CardTitle tag="h5">
            {deadStudent.firstName}<br/>
            {deadStudent.lastName}
          </CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  </div>
  );
}

GraveStone.propTypes = {
  deadStudent: PropTypes.object,
  color: PropTypes.string
};
