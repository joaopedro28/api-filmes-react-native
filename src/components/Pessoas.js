import React, {Component} from 'react';
import { 
    StyleSheet, 
    Text, 
    View, 
} from 'react-native';

class Pessoa extends Component {
    render() {
    return (
        <View style={styles.areapessoa}>
            <Text style={styles.pessoa}>Nome: {this.props.data.nome} </Text>
            <Text style={styles.pessoa}>Idade: {this.props.data.idade} </Text>
            <Text style={styles.pessoa}>Email: {this.props.data.email} </Text>
        </View>
        );
    }  
}

const styles = StyleSheet.create({
    areapessoa: {
        backgroundColor: 'darkblue',
        height:250,
        marginBottom:15,
        padding:10  
    },
    pessoa:{
        color: '#fff',
        fontSize:20
    }
})
export default Pessoa;