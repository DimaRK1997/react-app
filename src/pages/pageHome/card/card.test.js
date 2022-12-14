import { render, screen } from '@testing-library/react';
import { Card } from './card';

describe('test one card', () => {
  it('render one card', () => {
    const cat = {
      id: 'n1',
      length: 'length',
      image: 'https://api-ninjas.com/images/cats/abyssinian.jpg',
      minWeight: 1,
      maxWeight: 1,
      minLife: 2,
      maxLife: 2,
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
