import { render } from '@testing-library/react';

import AcmerUi from './ui';

describe('AcmerUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AcmerUi />);
    expect(baseElement).toBeTruthy();
  });
});
