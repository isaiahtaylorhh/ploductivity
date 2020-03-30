/*
 * followed option 2 of https://github.com/react-native-community/async-storage/blob/LEGACY/docs/Jest-integration.md
 */

const jest = require('jest');

const mockAsyncStorage = require('@react-native-community/async-storage/jest/async-storage-mock');

jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
