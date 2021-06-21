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

import '@testing-library/jest-dom/extend-expect';
