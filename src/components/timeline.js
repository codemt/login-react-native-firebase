import React, { Component } from 'react'
import { Dimensions } from 'react-native';
var window = Dimensions.get('window');
import { Screen , ScrollView , ImageBackground , Tile , Overlay , NavigationBar , Title , Caption , Icon } from '@shoutem/ui';
 class TimeLine extends Component {
  render() {
    return (
      <Screen>
      <NavigationBar
        title="The Groom"
        
        styleName="inline"
        leftComponent={<Icon name="sidebar" onPress={() => this.props.navigation.openDrawer()}  />}
      />
      <ScrollView>
        <ImageBackground
          style={{width:window.width, height:window.height}}
          source={{ uri: 'https://shaadiwish.com/blog/wp-content/uploads/2017/10/3-4.jpg' }}
        >
          <Tile>
            <Overlay>
              <Title styleName="md-gutter-bottom">Monty Singh</Title>
              <Caption>Alice Johnson was born in Utah, Texas and she is a lawyer by profession.</Caption>
            </Overlay>
          </Tile>
        </ImageBackground>
      </ScrollView>
    </Screen>
    )
  }
}
export default TimeLine;