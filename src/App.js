import { StyleSheet, Text, View, Button } from 'react-native';
// import MyButton from './components/MyButton';
import Counter from './components/Counter';


const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* <Text
        style={{
          fontSize: 30,
          marginBottom: 10
        }}
      >
        My Button Component
      </Text>
      <MyButton title="Button" onPress={() => alert('props')} />
      <MyButton title="Button" onPress={() => alert('children')}>Children props</MyButton>
      <MyButton onPress={() => alert('default')} /> */}

      <Counter />
    </View>
  );
};

export default App;