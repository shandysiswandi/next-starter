// This file will be run after environment and before testing.
// You can setup whatever you need to run anything before test in this file.

// note:
// 1. always add comment on top of your unit-test file, comment example in below.
// 2. cannot use absolute path, you have to import using relative path, example below

// example number 1
/**
 * @jest-environment jsdom
 */

// example number 2
// good : import a from '../pages/api/user'
// bad  : import b from 'pages/api/user'

// Theory:
// There are three step in testing
// 1. Arrange   : original state app
// 2. Act       : something happend (event, click, or anything)
// 3. Assert    : make your expectation is same with actual new state app
// example :
// Arrange  -> component button state is 1
// Act      -> someone click button and the state change to 2
// Assert   -> your expect is state 2, then test will correct, otherwise the test will fail

import '@testing-library/jest-dom/extend-expect';
import { Fragment } from 'react';

// __MOCKING__
jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str: string) => str,
      i18n: {
        changeLanguage: () => new Promise(() => {}),
      },
    };
  },
}));

// __MOCKING__
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: function MockHead({
      children,
    }: {
      children: Array<React.ReactElement>;
    }) {
      return children;
    },
  };
});
