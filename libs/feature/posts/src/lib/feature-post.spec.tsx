import { render } from '@testing-library/react';

import FeaturePost from './feature-post';

describe('FeaturePost', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeaturePost />);
    expect(baseElement).toBeTruthy();
  });
});
