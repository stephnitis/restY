import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '@testing-library/react';

import Form from './index';

describe('Form Component', () => {
  it('should make an API call', () => {    
    // let input = screen.getByTestId('api-input');
    let handleApiCall = jest.fn();

    render(<Form handleApiCall={handleApiCall}/>);
    fireEvent.change({target: {value: 'https://pokeapi.co/api/v2/pokemon'}})
    let button = screen.getByText('GO!');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(handleApiCall).toHaveBeenCalled();
  })
})