import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ArrowRight from '../../../assets/images/arrow-right.svg';

export const BlogHeaderBottomStyle = styled.div`
  padding: 72px 0 120px;
`;

export const BlogHeaderBottomInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BlogHeaderBottomContent = styled.div`
  width: 671px;
`;

export const BlogHeaderBottomBlogTime = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 171%;
  color: #232ed1;
`;

export const BlogHeaderBottomTitle = styled.h2`
  margin: 16px 0 24px;
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: -0.03em;
  color: #0d1317;
`;

export const BlogHeaderBottomText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
`;

export const BlogHeaderBottomLink = styled(Link)`
  position: relative;
  display: inline-block;
  margin-top: 32px;
  font-weight: 500;
  font-size: 18px;
  line-height: 171%;
  color: #1a1a1a;

  &::after {
    position: absolute;
    top: 8px;
    right: -30px;
    width: 17px;
    height: 15px;
    background-image: url(${ArrowRight});
    background-repeat: no-repeat;
    background-position: center;
    content: '';
  }
`;
