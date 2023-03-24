import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BlueButtonStyle = styled(NavLink)`
  display: inline-block;
  margin-right: 48px;
  padding: 16px 30px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  background-color: #232ed1;
  border-radius: 5px;
  border: 2px solid transparent;
  transition: all 0.2s ease;

  &:hover {
    background-color: transparent;
    border: 2px solid #232ed1;
    color: #232ed1;
  }
`;
