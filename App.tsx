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

import {
  Header,
  Text,
  Card,
  CardItem,
  Button,
  Right,
  Body,
  Left,
} from 'native-base';
import {useStorage} from './utils/storage';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/MaterialIcons';

interface Plod {
  goal: number;
  units: string;
}

const Stack = createStackNavigator();

const App = () => {
  const [plods] = useStorage<Plod[]>('plods', [{goal: 23, units: 'test'}]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={() => {
            return (
              <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                  <Header>
                    <Left />
                    <Body>
                      <Text>Ploductivity</Text>
                    </Body>
                    <Right>
                      <Button style={styles.headerButton}>
                        <Icon name="done" />
                      </Button>
                    </Right>
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
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerButton: {
    // margin: 30,
    // padding: 30,
    height: 35,
    width: 35,
  },
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
