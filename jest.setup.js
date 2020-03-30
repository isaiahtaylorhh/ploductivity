const jest = require('jest');

const mockAsyncStorage = require('@react-native-community/async-storage/jest/async-storage-mock');

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
