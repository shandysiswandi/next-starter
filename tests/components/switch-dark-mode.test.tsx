/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';
import { useEffect } from 'react';
import { SwitchDarkMode } from '../../src/Components/SwitchDarkMode';

let localStorageMock: { [key: string]: string } = {};

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });

  global.Storage.prototype.getItem = jest.fn(
    (key: string) => localStorageMock[key]
  );
  global.Storage.prototype.setItem = jest.fn((key: string, value: string) => {
    localStorageMock[key] = value;
  });
});

beforeEach(() => {
  localStorageMock = {};
});

describe('SwitchDarkMode Components', () => {
  test('it must be clickable', async () => {
    // setup
    const { container } = render(
      <ThemeProvider storageKey='next-theme' attribute='class'>
        <SwitchDarkMode />
      </ThemeProvider>
    );

    // get element div that can be click
    const divClickable = container.getElementsByClassName('w-10 h-10 p-2')[0];

    // click div then theme change to dark
    fireEvent.click(divClickable);
    const svgDark = await waitFor(
      () => container.getElementsByClassName('darknest')[0]
    );

    // click div then theme change to light
    fireEvent.click(divClickable);
    const svgLight = await waitFor(
      () => container.getElementsByClassName('lightnest')[0]
    );

    // assertion
    expect(svgDark).toHaveClass('w-5 h-5 darknest');
    expect(svgLight).toHaveClass('w-5 h-5 lightnest transform -rotate-90');
  });

  test('is must be localstorage key=next-theme', () => {
    render(
      <ThemeProvider storageKey='next-theme' attribute='class'>
        <SwitchDarkMode />
      </ThemeProvider>
    );

    expect(global.Storage.prototype.getItem).toHaveBeenCalledWith('next-theme');
  });
});
