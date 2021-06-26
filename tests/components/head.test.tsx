/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { Head } from '../../src/Components/Head';

// actual teting
describe('Head Components', () => {
  test('must have title text', () => {
    // setup
    const { container } = render(<Head title='Test Head' />);

    // result
    const title = container.getElementsByTagName('title');

    // assertion
    expect(title[0].text).toEqual('Test Head');
  });
});
