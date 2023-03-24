import React from 'react';
import { BlueButtonStyle } from './blueButton.styles';

export const BlueButton = ({ text, to }) => {
  return <BlueButtonStyle to={to ? to : '/'}>{text}</BlueButtonStyle>;
};
