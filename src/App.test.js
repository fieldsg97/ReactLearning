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

test('Should Show Car Table and Theme Changer Button', async () => {
  // Render the component
  render(<App />);

  expect(screen.getByTestId('themeButton')).toBeVisible();

  expect(screen.getByText('Make')).toBeInTheDocument();
  expect(screen.getByText('Model')).toBeInTheDocument();
  expect(screen.getByText('Price')).toBeInTheDocument();
})

test('Should Show Bitcoin Price Tracker Table and Refresh Price Button', async () => {
  render(<App />);

  expect(screen.getByTestId('refreshCryptoButton')).toBeVisible();

  expect(screen.getByText('Bitcoin Price Tracker')).toBeVisible();

  expect(screen.getByText('Currency')).toBeInTheDocument();
  expect(screen.getByText('Rate')).toBeInTheDocument();
  expect(screen.getByText('Description')).toBeInTheDocument();

})


