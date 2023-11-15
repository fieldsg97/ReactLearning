import React from "react";
import { render, fireEvent } from '@testing-library/react';
import ButtonComponent from './ButtonComponent';
import '@testing-library/jest-dom';


/*
Ask about difference between Jest testing file and React Testing Library jsx file
Ask how to run diagnostics file that shows coverage percents and all that
*/

test('button click changes state and shows a message', () => {
    // Render the component
    const { getByText } = render(<ButtonComponent />);
  
    // Find the button by its text content
    const button = getByText('Light Mode');
  
    // Simulate a button click
    fireEvent.click(button);
  
    // Assert that the state has changed
    const message = getByText('Dark Mode');
    expect(message).toBeInTheDocument();
  });