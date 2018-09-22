import React, {Component} from 'react';
import {View , TextInput , Text ,Button ,Alert} from 'react-native';
import styles from './styles'


 class Home extends Component{
  
  state = { username: "", password: "" }
  
  checkLogin(){
      const {username, password } = this.state
      if(username =='Petch' && password == '1234' ) {
          this.props.navigation.navigate('dashboard')
      } else {
          Alert.alert('ผิดนะ','ลองอีกครั้ง', [{
              text: 'Okay'
          }])
      }
      
  }
  
  
  render() {
      const { heading, input ,parent} =styles
    return (
      <View style={parent}>
        <Text style={heading}>HELLO</Text>
        <TextInput style={input} placeholder="Username" onChangeText={text => this.setState({username :text })}/>
         <TextInput style={input} secureTextEntry={true} placeholder="Password" onChangeText={text => this.setState({password:text })} />

        <Button title={"Login"} onPress={_ => this.checkLogin()}/>
      </View>
    );
  }
}
export default Home
