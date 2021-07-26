/* eslint-disable no-undef */

import { cleanup, render, screen } from '@testing-library/react';
import App from 'App';

describe('Testing Dashboard Page', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('should render Sidenav', () => {
    const sidenav = screen.getByTestId('sidenav-container');

    expect(sidenav).toBeInTheDocument();
  });

  it('should render DashboardHeader', () => {
    const dashboardHeader = screen.getByTestId('dashboard-header-container');

    expect(dashboardHeader).toBeInTheDocument();
  });

  it('should render DashboardFilter', () => {
    const dashboardFilter = screen.getByTestId('dashboard-filter-container');

    expect(dashboardFilter).toBeInTheDocument();
  });

  it('should render DashboardTable', () => {
    const dashboardTable = screen.getByTestId('dashboard-table-container');

    expect(dashboardTable).toBeInTheDocument();
  });

  afterEach(cleanup);
});
