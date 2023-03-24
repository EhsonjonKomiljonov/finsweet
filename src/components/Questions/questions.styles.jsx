import styled from 'styled-components';

export const QuestionsSection = styled.section`
  padding: 0 0 128px;
`;

export const QuestionsInner = styled.div`
  width: 100%;
  max-width: 934px;
  margin: 0 auto;

  & > details:nth-child(2) {
    padding: 0 0 45px !important;
  }

  & > details:nth-child(3),
  details:nth-child(4),
  details:nth-child(5) {
    padding: 45px 0;
    border-top: 1px solid #eaeaea;
  }

  & > details:nth-child(6) {
    padding: 45px 0 0;
    border-top: 1px solid #eaeaea;
  }

  & > details > summary::before {
    font-weight: 500;
    font-size: 24px;
    line-height: 171%;
    color: #5b5b5b;
    transition: all .3s ease;
  }

  & > details:nth-child(2) > summary::before {
    margin-right: 40px;
    content: '01';
  }

  & > details:nth-child(3) > summary::before {
    margin-right: 40px;
    content: '02';
  }

  & > details:nth-child(4) > summary::before {
    margin-right: 40px;
    content: '03';
  }

  & > details:nth-child(5) > summary::before {
    margin-right: 40px;
    content: '04';
  }

  & > details:nth-child(6) > summary::before {
    margin-right: 40px;
    content: '05';
  }
`;

export const QuestionsTitle = styled.h2`
  margin-bottom: 98px;
  font-weight: 600;
  font-size: 48px;
  line-height: 106.5%;
  letter-spacing: -0.03em;
  color: #0d1317;
`;
