import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        />
        <Text>
          This app was written in React-Native.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      backgroundColor: 'rgb(240,240,240)',
    },
    thumbnail: {
      width: 100,
      height: 100,
      marginRight: 5,
      backgroundColor: 'black',
    },
    rightContainer: {
      flex: 1,
      padding: 5,
      height: 100,
    },
    title: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 3,
    },
    subtitle: {
      fontSize: 12,
    },
    separator: {
      height: 1,
      backgroundColor: 'rgb(200,200,200)',
    },
    listView: {
      backgroundColor: 'rgb(240,240,240)',
    },
    loading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

export default About;