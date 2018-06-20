import React, { Component } from 'react'
import { Dimensions } from 'react-native';
var window = Dimensions.get('window');
import { Screen , ScrollView , ImageBackground , Tile ,View,Divider, Overlay , NavigationBar ,Lightbox,Image, Title , Caption , Icon, Subtitle, ListView } from '@shoutem/ui';
 class FoodMenu extends Component {
    constructor(props) {
        super(props);
        this.renderRow = this.renderRow.bind(this);
        this.state = {
          restaurants: [
            {
              "name": "Green Salads",
              "image": { "url": "http://s1.1zoom.net/prev2/549/Salads_Vegetables_Olive_Cheese_Plate_548329_300x200.jpg" },
            },
            {
              "name": "Red Wine",
              "image": { "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRELGblXV3SFCgWK-L0I_vY66sGG4P-n5bNE_y-fVOgNNbZVBqzpw" },
            },
            {
              "name": "Grilled Chicken",
              "image": { "url": "https://search.chow.com/thumbnail/1280/800/www.chowstatic.com/assets/recipe_photos/25679_korean_grilled_chicken.jpg" },
            },
            {
              "name": "DEVILED EGGS",
              "image": { "url": "http://images.ctfassets.net/lufu0clouua1/6R8jsWr6vuWGSsAMIc0quA/0fbbb1d0f510695ffde650e3c084e355/PLATTER_WEB__deviled-eggs_2576_V2_rfc.jpg" },
            }
          ],
        }
      }
      
      renderRow(restaurant) {
        return (
          <View>
            <ImageBackground
              styleName="large-banner"
              source={{ uri: restaurant.image.url }}
            >
              <Tile>
                <Title styleName="md-gutter-bottom">{restaurant.name}</Title>
                <Subtitle styleName="sm-gutter-horizontal">{restaurant.address}</Subtitle>
              </Tile>
            </ImageBackground>
            <Divider styleName="line" />
          </View>
        );
      }
      
      render() {
        const restaurants = this.state.restaurants;
      
        return (
          <Screen>
            <NavigationBar
              title="Food Menu"
              styleName="inline"
              leftComponent={<Icon name="sidebar" onPress={() => this.props.navigation.openDrawer()}  />}
            />
            <ListView
              data={restaurants}
              renderRow={this.renderRow}
            />
          </Screen>
        );
      }
}
export default FoodMenu;