import { StyleSheet, Text, View } from 'react-native';
import React, { FC,useEffect, useState } from 'react';

const Playing:FC = () => {

  return (
    <View style={styles.container}>
      <Text>Playing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal:24,
    flex: 1,
    backgroundColor: '#242A32',
  },
});

export default Playing;