import React, { Component } from 'react'
import { Container, Header, Content, Card, CardItem, Text, Body , Button } from 'native-base';
import fire from '../config/fire';
 class Logout extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }
  render() {
    return (
        <Container>
        <Content>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                
                <Button light style={{alignSelf:'center'}} onPress={this.logout} ><Text> Logout </Text></Button>
                
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
         </Card>
        </Content>
      </Container>
    )
  }
}
export default Logout;