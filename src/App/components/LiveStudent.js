import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardTitle
} from 'reactstrap';

export default function LiveStudent({ liveStudent }) {
  return (
    <div>
          <Card body color='warning'>
            <CardBody>
              <CardTitle tag="h5">
                {liveStudent.firstName}
                {liveStudent.lastName}
              </CardTitle>
            </CardBody>
            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
            </CardBody>
          </Card>
        </div>
  );
}

LiveStudent.propTypes = {
  liveStudent: PropTypes.object,
  color: PropTypes.string
};
