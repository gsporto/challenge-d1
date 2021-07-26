/* eslint-disable no-undef */

import { cleanup, render, screen } from '@testing-library/react';
import { Button } from 'components/Form/Button';
import AppProvider from 'hooks';

describe('Testing Button', () => {
  beforeEach(() => {
    render(
      <AppProvider>
        <Button>teste</Button>
      </AppProvider>,
    );
  });

  it('should render buttonText', () => {
    const buttonText = screen.getByText('teste');

    expect(buttonText).toBeInTheDocument();
  });
  afterEach(cleanup);
});
