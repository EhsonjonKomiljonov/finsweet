import React from 'react';
import {
  QuestionsDropDownText,
  QuestionsDropDownTitle,
  QuestionsDropDownStyle,
} from './questionsDropDown.styles';

export const QuestionsDropDown = ({ obj }) => {
  const { title, text } = obj;
  return (
    <>
      <QuestionsDropDownStyle>
        <QuestionsDropDownTitle>{title}</QuestionsDropDownTitle>
        <QuestionsDropDownText>{text}</QuestionsDropDownText>
      </QuestionsDropDownStyle>
    </>
  );
};
