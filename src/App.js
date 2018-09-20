import React from 'react'
import {
    Wrapper,
    Title,
    Button
} from './AppStyles'

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <Title>Hello React Parcel Build</Title>
        <br />
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Wrapper>
    );
  }
}

export default App