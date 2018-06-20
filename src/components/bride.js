import React, { Component } from 'react'
import { Dimensions } from 'react-native';
var window = Dimensions.get('window');
import { Screen , ScrollView , ImageBackground , Tile , Overlay , NavigationBar , Title , Caption , Icon } from '@shoutem/ui';
 class Bride extends Component {
  render() {
    return (
      <Screen>
      <NavigationBar
        title="The Bride"
        
        styleName="inline"
        leftComponent={<Icon name="sidebar" onPress={() => this.props.navigation.openDrawer()}  />}
      />
      <ScrollView>
        <ImageBackground
          style={{width:window.width, height:window.height}}
          source={{ uri: 'http://cdn-img.instyle.com/sites/default/files/styles/684xflex/public/images/2016/01/011216-what-to-wear-bridal-lead.jpg?itok=RBDEVyl8' }}
        >
          <Tile>
            <Overlay>
              <Title styleName="md-gutter-bottom">Alice Johnson</Title>
              <Caption>Alice Johnson was born in Utah, Texas and she is a lawyer by profession.</Caption>
            </Overlay>
          </Tile>
        </ImageBackground>
      </ScrollView>
    </Screen>
    )
  }
}
export default Bride;