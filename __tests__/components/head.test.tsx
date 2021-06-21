/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { Head } from '../../components/Head';

// call mocking
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: function MockHead({
      children,
    }: {
      children: Array<React.ReactElement>;
    }) {
      return <>{children}</>;
    },
  };
});

// actual teting
describe('Head Components', () => {
  it('must have title text', () => {
    // setup
    const { container } = render(<Head title='Test Head' />);

    // result
    const title = container.getElementsByTagName('title');

    // assertion
    expect(title[0].text).toEqual('Test Head');
  });
});
