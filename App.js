import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
export default function App() {return (<View style={styles.container}><Text>Scyen Expo — Hello 👋</Text><StatusBar style="light"/></View>);} 
const styles = StyleSheet.create({container:{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#111'}});
