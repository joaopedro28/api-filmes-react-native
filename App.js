import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView
} from 'react-native';

class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      buttonStart: 'Start',
      last: null
    };
    this.active=null

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
  }  
  stop(){    
    if(this.active != null) {
      clearInterval(this.active)
    }
    this.setState({
      last: this.state.timer,
      timer: 0 , 
      buttonStart: 'Start'        
    })
  }
  start() {
    if(this.active != null) {
      clearInterval(this.active);
      this.active = null
      this.setState({buttonStart: 'Start'})
    }else {
      this.active = setInterval(()=> {
        this.setState({timer: this.state.timer + 0.1})
      }, 100)
      this.setState({buttonStart: 'Pause'})
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./src/img/cronometro.png')}
          style={styles.cronometro}
        />
        <Text style={styles.timer}>{this.state.timer.toFixed(1)}</Text>
        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.button} onPress={this.start}>
            <Text style={styles.btnTexto}>{this.state.buttonStart}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={this.stop}>
            <Text style={styles.btnTexto}>Stop</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.areaUltima}>
          <Text style={styles.textotempo}>{this.state.last > 0 ? 'Último tempo ' + this.state.last.toFixed(2) + 's' : ''} </Text>
        </View>
      </View>
    );
  }  
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#00aeef'
  },
  timer:{
    marginTop:-160,
    color: '#fff',
    fontSize:65,
    fontWeight:'bold'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    height:30,
    backgroundColor:'#fff',
    borderRadius: 25,
    margin:15
  },
  btnArea:{
    justifyContent:'center',
    flex:1,
    alignItems:'center',
    flexDirection:'row'
  },
  img: {
    width: 250,
    height: 250
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef',
    padding:16
  },
  textotempo:{
    fontSize:25 ,
    fontStyle:'italic',
    color:'#fff'
  }
})

export default App;