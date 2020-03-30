/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  StatusBar,
} from 'react-native';

import {Header, Text, Card, CardItem} from 'native-base';
import {useStorage} from './utils/storage';

interface Plod {
  goal: number;
  units: string;
}

const App = () => {
  const [plods] = useStorage<Plod[]>('plods', [{goal: 23, units: 'test'}]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header>
          <Text>Ploductivity</Text>
        </Header>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            {plods.map((plod) => {
              return (
                <Card key={`${plod.units}_${plod.goal}`}>
                  <CardItem header>
                    <Text>{plod.goal}</Text>
                  </CardItem>
                  <CardItem>
                    <Text>{plod.units}</Text>
                  </CardItem>
                </Card>
              );
            })}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    // backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    // backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    // color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    // color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    // color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
