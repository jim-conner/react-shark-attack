import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardText, CardBody, CardTitle
} from 'reactstrap';

export default function LiveStudent({ student }) {
  return (
    <div>
          <Card body color='warning'>
            <CardBody>
              <CardTitle tag="h5">
                {student.firstName} {student.lastName}
              </CardTitle>
            </CardBody>
            <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardText>Some quick example text to build on the card title and make up the bulk of the card`&apos;`s content.</CardText>
            </CardBody>
          </Card>
        </div>

  );
}

LiveStudent.propTypes = {
  student: PropTypes.object.isRequired,
  color: PropTypes.string,
};
