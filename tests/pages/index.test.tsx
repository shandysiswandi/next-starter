/**
 * @jest-environment jsdom
 */

import { render, screen, fireEvent } from '@testing-library/react';
import Index, { getStaticProps } from '../../pages/index';

describe('Index Page', () => {
  test('should call getStaticProps', async () => {
    const props = {
      locales: ['en', 'id'],
      locale: 'en',
      defaultLocale: 'en',
    };
    const staticProps = await getStaticProps(props);

    expect(staticProps).toHaveProperty('props');
    expect(staticProps.props).toHaveProperty('_nextI18Next');
    expect(staticProps.props._nextI18Next).toHaveProperty('initialLocale');
    expect(staticProps.props._nextI18Next.initialLocale).toEqual(props.locale);
  });

  test('h1 text: Welcome to PAPA', () => {
    // setup
    const { container } = render(<Index />);

    // result
    const h1 = screen.getByRole('heading', { name: 'welcome' });

    // form search
    const formSearch = container.getElementsByTagName('form')[0];
    fireEvent.submit(formSearch);

    // btn language
    const btnLang = container.getElementsByTagName('button')[0];
    fireEvent.click(btnLang);

    // click away list language dropdown
    const divCA = container.getElementsByClassName('fixed inset-0 z-10')[0];
    fireEvent.click(divCA);

    // assertion
    expect(h1).toBeInTheDocument();
    expect(formSearch).toBeInTheDocument();
    expect(btnLang).toBeInTheDocument();
    // expect(titleMenu).toBeInTheDocument();
    // expect(menuHome).toHaveAttribute('href', '/');
    // expect(premiumHome).toHaveAttribute('href', '/');
    // expect(aboutHome).toHaveAttribute('href', '/');
    // expect(screen.getByText(/Starter/i)).toBeInTheDocument();
  });
});
