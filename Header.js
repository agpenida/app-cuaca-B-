import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>PRAKIRAAN CUACA</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#2E8B57',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingTop: 10,
      position: 'relative',

    },
    textStyle: {
      fontSize: 20,
      color: 'black',
      textAlign: 'center'
    }
}
export default Header;
