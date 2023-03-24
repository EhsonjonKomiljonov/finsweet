import styled from 'styled-components';

export const QuestionsDropDownStyle = styled.details`
  &[open] > summary::before {
    color: #0010ff;
    transition: all .3s ease;
  }
`;

export const QuestionsDropDownTitle = styled.summary`
  font-weight: 500;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  list-style-type: none;
  cursor: pointer;
`;

export const QuestionsDropDownText = styled.p`
  margin-top: 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
`;
