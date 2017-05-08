import * as React from 'react';
import { Component } from 'react';
import { Container } from 'reactstrap';

export default class Layout extends Component<{}, {}> {
  render() {
    return (
      <Container>
        {this.props.children}
      </Container>
    )
  }
}
