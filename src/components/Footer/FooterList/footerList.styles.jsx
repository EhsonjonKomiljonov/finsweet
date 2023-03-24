import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterListBox = styled.div``;

export const FooterListTitle = styled.strong`
  font-weight: 500;
  font-size: 22px;
  line-height: 28px;
  color: #000000;
`;

export const FooterListStyle = styled.ul`
  margin-top: 48px;
`;

export const FooterItem = styled.li`
  & + & {
    margin-top: 24px;
  }
`;

export const FooterListLink = styled(Link)`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
`;
