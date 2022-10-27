import '@testing-library/jest-dom'
import {render, screen, fireEvent} from '@testing-library/react';

import Form from './index';

describe('Form Component', () => {

  it('should make an API call', () => {    
    
    let handleApiCall = jest.fn();

    render(<Form handleApiCall={handleApiCall}/>);
    
    let button = screen.getByText('GO!');
    expect(button).toBeInTheDocument();
    
    fireEvent.click(button);
    expect(handleApiCall).toHaveBeenCalled();
  });

  it('calls API function with the expected parameters', () => {
    let expectedParams = {
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
      data: 'some test json',
    };

    let handleApiCall = jest.fn();
    render(<Form handleApiCall={handleApiCall}/>);

    let getSpan = screen.getByText('GET');
    let textarea = screen.getByTestId('form-textarea');
    let inputUrl = screen.getByTestId('inputUrl')

    fireEvent.click(getSpan);
    fireEvent.change(inputUrl, {target: {value: 'https://pokeapi.co/api/v2/pokemon'}})
    fireEvent.change(textarea, {target: {value: 'some test json'}});
    
    let button = screen.getByText('GO!');
    fireEvent.click(button);
    
    
    expect(handleApiCall).toHaveBeenCalledWith(expectedParams);
  })
})

