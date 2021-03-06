/**
 * @jest-environment jsdom
 */

import { render } from '@testing-library/react';
import { Favicon } from '../../src/Components/Favicon';

describe('Favicon Components', () => {
  test('must have icons link & meta', () => {
    // setup
    const { container } = render(<Favicon />);

    // result
    const tagLinkIcon = container.querySelectorAll('link').length;
    const tagMeta = container.querySelectorAll('meta').length;

    // assertion
    expect(tagLinkIcon).toEqual(5);
    expect(tagMeta).toEqual(2);
  });
});
