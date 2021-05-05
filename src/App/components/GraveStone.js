import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody, CardTitle
} from 'reactstrap';

export default function GraveStone({ deadStudent }) {
  return (
    <div>
          <Card body color='warning'>
            <CardBody>
              <CardTitle tag="h5">
                {deadStudent.firstName} {deadStudent.lastName}
              </CardTitle>
            </CardBody>
            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
            </CardBody>
          </Card>
        </div>
  );
}

GraveStone.propTypes = {
  deadStudent: PropTypes.object,
  color: PropTypes.string
};
