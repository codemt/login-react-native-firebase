import React, { Component } from 'react'
import { Dimensions } from 'react-native';
var window = Dimensions.get('window');
import { Screen , ScrollView , ImageBackground , Tile , Card ,  Subtitle, Image, View, Button , Overlay , NavigationBar , Title , Caption , Icon } from '@shoutem/ui';
 class Venue extends Component {
  render() {
    return (
        <Screen>
        <NavigationBar
          title="Venue"
          styleName="inline"
          leftComponent={<Icon name="sidebar" onPress={() => this.props.navigation.openDrawer()}  />}
        />
        <ScrollView>
          <ImageBackground
            style={{ height:window.height}}
            source={{ uri: 'http://datasummit.org/uploads/shocking-castle-wedding-venues-fairytale-in-america-venuelust-of-barn-california-styles-and-inspiration_FILES_18742.jpg' }}
          >
            <Tile>
              <Overlay>
                <Title styleName="md-gutter-bottom">Gaspar Brasserie</Title>
                <Caption>185 Sutter St, San Francisco, CA 94109</Caption>
              </Overlay>
            </Tile>
          </ImageBackground>
        </ScrollView>
      </Screen>
    )
  }
}
export default Venue;