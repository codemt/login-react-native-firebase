import React, { Component } from 'react'
import { Text,View ,Image,Dimensions} from 'react-native';
import { Container, Header, Content, Form, Item, Input  } from 'native-base';
import { Screen , ScrollView , ImageBackground , Tile , Overlay , NavigationBar , Title , Caption , Icon , Button } from '@shoutem/ui';
import fire from '../config/fire';
var window = Dimensions.get('window');
class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
          email: '',
          password: ''
        };
      }
      
      login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).catch((error) => {
            console.log(error);
            alert(error);
          });
          console.log('logged in..');
      }
    
      signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
        .catch((error) => {
            console.log(error);
            alert(error);
          })
      }
  render() {
    return (
        <Container>
        <Content>
        <ImageBackground
          style={{width:window.width, height:window.height}}
          source={{ uri: 'https://fthmb.tqn.com/p7m7ISN7eOguwsCc7_bpDfpCRnw=/2099x1429/filters:fill(auto,1)/married-588592153df78c2ccdf11fde.jpg' }}
        >
          <Tile style={{color:'white'}}>
            <Overlay style={{marginTop:200,width:500}}>
            <Form>
            <Item style={{width:300}}>
              <Input  style={{color:'white'}} value={this.state.email} onChangeText={email => this.setState({ email })}  ref="email" type="email" placeholder="Email" />
            </Item>
            <Item>
              <Input style={{color:'white'}} value={this.state.password} onChangeText={password => this.setState({ password })} ref="password" type="password" placeholder="Password" />
            </Item>
            <Button styleName="dark md-gutter-top"  light style={{alignSelf:'center',height:50,width:100}} onPress={this.login} ><Icon name="exit-to-app" /><Text>Login </Text></Button>
          </Form>
              
            </Overlay>
          </Tile>
        </ImageBackground>
          
         
        </Content>
       
      </Container>
    )
  }
}
export default Login;
