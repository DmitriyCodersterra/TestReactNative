/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, flexDirection: 'column',alignContent:'flex-start'}}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 147,height: 84, backgroundColor: '#f2f2f2'}} >
              <View style={styles.Rectangle2}>
                <Text style={styles.N}>
                  10
                </Text>
              </View>
            </View>
            <View style={{width: 118,height: 84, backgroundColor: '#f2f2f2'}}>
              <View style={styles.Rectangle3}>
                  <Text style={styles.Notifications}>
                    Notifications
                  </Text>
              </View>
            </View>
            <View style={{width: 155,height: 84, backgroundColor: '#f2f2f2'}} >

            </View>
          </View>

          <View style={{height: 1, flexDirection: 'row'}}/>

          <View style={{height:45, flex: 1, flexDirection: 'row',}}>
            <View style={{width: 44,height: 45}} >
              <View style={styles.Mask}>
                <Image
                    style={{width: 26, height: 26}}
                    source={{uri: 'http://www.advancecoachingandconsulting.com/wp-content/uploads/image/contact.jpg'}}
                />
              </View>
            </View>
            <View style={{width: 306,height: 45, flexDirection:'column'}} >
              <View style={{flexDirection:'row'}}>
                <View style={styles.CommentIcon}>
                  <Image
                      style={{width: 26, height: 26}}
                      source={{uri: 'http://www.advancecoachingandconsulting.com/wp-content/uploads/image/contact.jpg'}}
                  />
                </View>
              </View>
            </View>
            <View style={{width: 140,height: 45}} >
              <View style={styles.Datetime}>
                <Text>
                  Just now
                </Text>
              </View>
            </View>
          </View>

          <View style={{height: 1, flexDirection: 'row'}}/>

          <View style={{height:45, flex: 1, flexDirection: 'row',}}>
            <View style={{width: 44,height: 45}} >
              <View style={styles.Mask}>
                <Image
                    style={{width: 26, height: 26}}
                    source={{uri: 'http://www.advancecoachingandconsulting.com/wp-content/uploads/image/contact.jpg'}}
                />
              </View>
            </View>
          </View>

          <View style={{height: 1, flexDirection: 'row'}}/>

          <View style={{height:45, flex: 1, flexDirection: 'row',}}>
            <View style={{width: 44,height: 45}} >
              <View style={styles.Mask}>
                <Image
                    style={{width: 28, height: 28}}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                />
              </View>
            </View>
          </View>

          <View style={{height: 1,backgroundColor:"#cccccb"}}/>

          <View style={{height:45, flex: 1, flexDirection: 'row',}}>
            <View style={{width: 44,height: 45}} >
              <View style={styles.Mask}>
                <Image
                    style={{width: 28, height: 28}}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
                />
              </View>
            </View>
          </View>


        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  AppBarFill:{
    height: 84,
    backgroundColor: '#f2f2f2',
  },
  N:{
    // width: 14,
    // height: 26,
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    color: '#ffffff',

  },
  Rectangle3:{

  },
  Rectangle2:{
    width: 28,
    height: 13.8,
    borderRadius: 15,
    marginLeft:116,
    marginTop:35,
    justifyContent: 'center',
    backgroundColor:"#00b193"
  },
  Notifications:{
    marginTop:30,
    fontSize: 19,
    alignItems: 'center',
    color:'#555554',
    fontWeight: '600',
  },

  Mask:{
    width: 27.6,
    height: 13.8,
    backgroundColor: '#ffffff'
  },

  Datetime:{
  // width: 51,
  // height: 14,
  letterSpacing: 0,
  color: '#cccccb',
  marginRight:18,
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
