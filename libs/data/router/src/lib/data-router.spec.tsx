import { render } from '@testing-library/react';

import DataRouter from './data-router';

describe('DataRouter', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataRouter />);
    expect(baseElement).toBeTruthy();
  });
});
