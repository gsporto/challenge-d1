/* eslint-disable no-undef */

import { cleanup, render, screen } from '@testing-library/react';
import { BadgeCircular } from 'components/BadgeCircular';

import AppProvider from 'hooks';

describe('Testing BadgeCircular', () => {
  beforeEach(() => {
    render(
      <AppProvider>
        <BadgeCircular size={22}>a</BadgeCircular>
      </AppProvider>,
    );
  });

  it('should render badgeText', () => {
    const buttonText = screen.getByText('a');

    expect(buttonText).toBeInTheDocument();
  });
  afterEach(cleanup);
});
