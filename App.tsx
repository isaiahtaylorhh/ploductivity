/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

import {Button} from 'native-base';

//https://gist.github.com/EduVencovsky/dbaff299f7de6fe94538086c137f21d3
const useStorage = (key: string, initialValue: number): [number, Function] => {
  const [hasLoad, setHasLoad] = useState(false);
  const [data, setData] = useState(initialValue);

  const set = async (newData: number) => {
    setData(newData);
    return newData === null
      ? AsyncStorage.removeItem(key)
      : AsyncStorage.setItem(key, JSON.stringify(newData));
  };

  useEffect(() => {
    setHasLoad(false);
  }, [key]);

  useEffect(() => {
    if (!hasLoad) {
      AsyncStorage.getItem(key).then((res) => {
        if (res === null) {
          AsyncStorage.setItem(key, JSON.stringify(data));
          setData(data);
        } else {
          setData(JSON.parse(res));
        }
        setHasLoad(true);
      });
    }
  }, [key, hasLoad, data]);

  return [data, set];
};

const App = () => {
  const [count, setCount] = useStorage('count', 0);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <Button
              onPress={() => {
                setCount(count + 1);
              }}>
              <Text>{count}</Text>
            </Button>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Step One</Text>
              <Text style={styles.sectionDescription}>
                Edit <Text style={styles.highlight}>App.tsx</Text> to change
                this screen and then come back to see your edits.
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>See Your Changes</Text>
              <Text style={styles.sectionDescription} />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Debug</Text>
              <Text style={styles.sectionDescription} />
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>
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
