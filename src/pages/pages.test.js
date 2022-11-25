import { render, screen } from '@testing-library/react';

import { Home } from '../pages/pageHome/pageHome';

describe('test card', () => {
  it('render five card', () => {
    render(<Home />);

    expect(screen.getAllByAltText('photo')).toHaveLength(5);
    expect(screen.getAllByText('Add to')).toHaveLength(5);
    expect(screen.getAllByText('Read more 🡢')).toHaveLength(5);
  });
});
