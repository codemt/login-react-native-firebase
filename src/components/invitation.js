import React, { Component } from 'react'
import {  Dimensions} from 'react-native';
var window = Dimensions.get('window');
import { Screen , ScrollView , ImageBackground , Tile , Overlay , NavigationBar , Title , Caption , Icon } from '@shoutem/ui';
 class Invitation extends Component {
  render() {
    return (
      <Screen>
      <NavigationBar
        title="Invitation"
        
        styleName="inline"
        leftComponent={<Icon name="sidebar" onPress={() => this.props.navigation.openDrawer()}  />}
      />
      <ScrollView>
        <ImageBackground
          style={{width:window.width, height:window.height}}
          source={{ uri: 'https://fthmb.tqn.com/p7m7ISN7eOguwsCc7_bpDfpCRnw=/2099x1429/filters:fill(auto,1)/married-588592153df78c2ccdf11fde.jpg' }}
        >
          <Tile>
            <Overlay>
              <Title styleName="md-gutter-bottom">Alice Weds Monty</Title>
              <Caption>You are Cordially Invited to the Wedding Event of Alice Stevens and Mary Langdon.</Caption>
            </Overlay>
          </Tile>
        </ImageBackground>
      </ScrollView>
    </Screen>
    )
  }
}
export default Invitation;