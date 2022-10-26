import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '@testing-library/react';
import Results from './index';

describe('Result Component', () => {
  it('should render data', () => {
    let data = {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    };

    render(<Results data={data} />);
    let preText = screen.getByTestId('preText');
    expect(preText).toHaveTextContent('bulbasaur');
  })
})