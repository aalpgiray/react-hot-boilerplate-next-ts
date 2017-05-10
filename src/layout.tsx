import * as React from 'react';
import { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Layout extends Component<{}, {}> {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            {this.props.children}
          </Col>
        </Row>
      </Container>
    )
  }
}
