import React, {Component} from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList
} from 'react-native';
import Pessoa from './src/components/Pessoas';

class App extends Component{
  
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {
          id:'1',
          nome:'Joao',
          idade: 50,
          email: 'joao@gmail.com'
        },
        {
          id:'6',
          nome:'Paulo',
          idade: 50,
          email: 'joao@gmail.com'
        },
        {
          id:'3',
          nome:'jorge',
          idade: 22,
          email: 'joao@gmail.com'
        },
        {
          id:'2',
          nome:'Andrews',
          idade: 5,
          email: 'joao@gmail.com'
        },
      ]
    };
  }  
  
  render() {
    return (
      <View style={styles.container}>
        <FlatList 
          data={this.state.feed}
          keyExtractor={(item)=> item.id}
          renderItem={ ({item}) => <Pessoa data={item}/>}
        />
      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    marginTop:25
  }
})

export default App;