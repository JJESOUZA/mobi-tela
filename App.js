import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import Button from './src/componentes/Button';


const PlaceholderImage = require('./assets/livros1.png');
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <StatusBar style="auto" />
      <Text style={styles.imagetitulo}>
        EduHub

      </Text>

      <Text style={styles.imagetitulo2}>
       LOGIN
      </Text>

      <View style={styles.ContainerInput}> 
        <TextInput style={styles.Input} > 
        <Text style=  {{ fontWeight: 100,}}> DIGITA SEU ED/EMAIL
        </Text>
        </TextInput>
      </View>

      <View style={styles.ContainerInput2}>
        <TextInput style={styles.Input2} >
        <Text style={{ fontWeight: 100, }}> DIGITA SUA SENHA
        </Text>
        </TextInput> 
      </View>

      <Button label=" ENTRAR" />
      
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: '#FDD331',
    alignItems: 'center',
  },

  imageContainer: {
    paddingTop: 50,
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 530,
    
  },

  imagetitulo: {
    fontSize: 30,
    color: '#00bbf9',
    height: 70,
    
  },

  imagetitulo2: {
    fontSize: 20,
    color: '#FF6700',
    height: 30,
    
  },


  ContainerInput: {
    height: 50,
      },

  Input: {
    width: 250,
    height: 40,
    backgroundColor: 'white',
    
  },

  Input2: {
    width: 250,
    height: 40,
    backgroundColor: 'white',
  },

  
  

});