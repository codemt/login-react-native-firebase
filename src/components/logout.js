import React, { Component } from 'react'
import { Screen , ScrollView , ImageBackground , Tile , Overlay , NavigationBar , Title , Caption , Icon , Button , Text , Heading , Subtitle } from '@shoutem/ui';
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
       <Screen>
       <NavigationBar
         title="Logout"
         
         styleName="inline"
         leftComponent={<Icon name="sidebar" onPress={() => this.props.navigation.openDrawer()}  />}
       />
       <ScrollView>
       <ImageBackground
           styleName="large-portrait"
           source={{ uri: 'https://image.dhgate.com/0x0/f2/albu/g5/M01/99/30/rBVaJFlMxFmAFdHQAAk40j2lezE365.jpg' }}
         >
          <Tile styleName="text-centric">
          
            <Overlay><Heading></Heading></Overlay>
            <Title styleName="md-gutter-top">Leave us a feedback -  mvtechnologies@gmail.com</Title>
            <Subtitle styleName="line-through sm-gutter-top"></Subtitle>
            <Heading></Heading>
            <Button styleName="dark md-gutter-top"  light style={{alignSelf:'center'}} onPress={this.logout}><Icon name="exit-to-app" /><Text>LOGOUT </Text></Button>
            </Tile>
        </ImageBackground>
         
       </ScrollView>
      
     </Screen>
    )
  }
}
export default Logout;
{/* <ImageBackground
           styleName="large-portrait"
           source={{ uri: 'https://shaadiwish.com/blog/wp-content/uploads/2017/10/3-4.jpg' }}
         >
           <Tile>
             <Overlay>
               <Title styleName="md-gutter-bottom">Monty Singh</Title>
               <Caption>Alice Johnson was born in Utah, Texas and she is a lawyer by profession.</Caption>
               <Button light style={{alignSelf:'center'}} onPress={this.logout} ><Text> Logout </Text></Button>
             </Overlay>
           </Tile>
         </ImageBackground> */}