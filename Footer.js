import React from 'react';
import {
  Text,
  View
} from 'react-native';

const Footer = (props) => {
  const { textStyle, backFooter } = styles;
  return (
    <View style={backFooter}>
      <Text style={textStyle}>Igusti Agung Adi Penida Kusuma</Text>
    </View>
  );
};
const styles = {
    backFooter: {
      backgroundColor: '#2E8B57',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      paddingBottom: 10,
      position: 'relative',
    },
    textStyle: {
      fontSize: 12,
      color: 'black',
      textAlign: 'center'
    }
}
export default Footer;
