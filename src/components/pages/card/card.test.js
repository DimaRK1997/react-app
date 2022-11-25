import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('test one card', () => {
  it('render one card', () => {
    const cat = {
      id: 'n1',
      length: 'length',
      origin: 'Southeast Asia',
      image_link: 'https://api-ninjas.com/images/cats/abyssinian.jpg',
      min_weight: 1,
      max_weight: 1,
      min_life_expectancy: 2,
      max_life_expectancy: 2,
      name: 'Abyssinian',
    };

    render(<Card key={cat.id} cat={cat} />);

    expect(screen.getByAltText('photo')).toBeInTheDocument();
    expect(screen.getByText('Weight: from 1 to 1')).toBeInTheDocument();
    expect(screen.getByText('Lifetime: from 2 to 2')).toBeInTheDocument();
    expect(screen.getAllByAltText('photo')).toHaveLength(1);
    expect(screen.getByRole('button', { name: 'Add to' }));
  });
});
