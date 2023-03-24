import React from 'react';
import { Container } from '../../Container';
import { QuestionsDropDown } from '../QuestionsDropDown/QuestionsDropDown';
import { QuestionsInner, QuestionsSection, QuestionsTitle } from './questions.styles';
import questionsDropDownData from '../../db/questionsDropDownData';

export const Questions = () => {
  return (
    <QuestionsSection>
      <Container>
        <QuestionsInner>
          <QuestionsTitle>FAQ</QuestionsTitle>
          {questionsDropDownData.map((item) => (
            <QuestionsDropDown obj={item} />
          ))}
        </QuestionsInner>
      </Container>
    </QuestionsSection>
  );
};
