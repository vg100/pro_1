import React from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar } from 'react-native';

const DashBoard = () => {
  return (
    <ScrollView style={styles.container}>
      <StatusBar  translucent={true} style={{width:'420px', height:'50px', paddingTpo:21, backgroundColor:'#EEF3FF'}}/>
      <View style={{ width:'185px', height:'53px', top:'75px', left:'20px'}}>
        <Text style={{fontSize: 24, marginTop:10, fontWeight:'bold', color:'#000'}}>Hello Mr. Hook</Text>
      </View>
      
      <View style={{flex:1, flexDirection:'row'}}>
         <View style={{margin :8, backgroundColor:'' }}>
          <View style={{ height: 244, width: 171, borderRadius: 20, borderColor: 'lightgrey', borderWidth: 1, top:149, left:20}}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Details</Text>
            <Text></Text>
          </View>
        </View>

        <View style={{margin :8}}>
          <View style={{ height: 244, width: 171, marginTop:149, marginLeft:211, borderRadius: 4, borderColor: 'lightgrey', borderWidth: 1 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Report</Text>
            <Text></Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default DashBoard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  }
});

