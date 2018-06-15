import React, { Component } from 'react'
import { Text,View ,Image} from 'react-native';
import { Container, Header, Content, Form, Item, Input , Button } from 'native-base';
import fire from '../config/fire';
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
        <Image
            style={{alignSelf:'center',marginTop:100}}
          source={require('../images/logo1.jpeg')}
        />
          <Form style={{marginTop:50}}>
            <Item>
              <Input   value={this.state.email} onChangeText={email => this.setState({ email })}  ref="email" type="email" placeholder="Email" />
            </Item>
            <Item>
              <Input  value={this.state.password} onChangeText={password => this.setState({ password })} ref="password" type="password" placeholder="Password" />
            </Item>
            <Button light style={{alignSelf:'center'}} onPress={this.login} ><Text> Login </Text></Button>
          </Form >
         
        </Content>
       
      </Container>
    )
  }
}
export default Login;
