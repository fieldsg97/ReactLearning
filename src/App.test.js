import React from "react";
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';
import userEvent from "@testing-library/user-event";

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Light Mode/i);
  expect(linkElement).toBeInTheDocument();
});

test('button click changes state and shows a message', async () => {
  // Render the component
  render(<App />);

  // Find the button by its text content
  const button = screen.getByText('Light Mode');

  // Simulate a button click
  // fireEvent.click(button);
  // userEvent.click(screen.getByText('Light Mode'))

  await userEvent.click(screen.getByTestId('themeButton'))


  // Assert that the state has changed
  const message = screen.getByText('Dark Mode');
  await expect(message).toBeInTheDocument();

});

test('Should Load grid and button', async () => {
  // Render the component
  render(<App />);

  expect(screen.getByRole('button')).toBeInTheDocument();
  expect(screen.getByText('Make')).toBeVisible();
  expect(screen.getByText('Model')).toBeInTheDocument();
  expect(screen.getByText('Price')).toBeInTheDocument();

})
