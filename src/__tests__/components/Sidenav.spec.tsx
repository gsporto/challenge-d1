/* eslint-disable no-undef */

import { cleanup, render, screen } from '@testing-library/react';
import { ChartIcon } from 'assets/icons';
import { SidenavIcon } from 'components/SidenavIcon';

describe('Testing Sidenav', () => {
  beforeEach(() => {
    render(<SidenavIcon Icon={ChartIcon} tooltip="teste" />);
  });

  it('should render tooltip', () => {
    const tooltip = screen.getByText('teste');

    expect(tooltip).toBeInTheDocument();
  });

  it('should render icon', () => {
    const icon = screen.getByText('chart-pie.svg');

    expect(icon).toBeInTheDocument();
  });

  afterEach(cleanup);
});
