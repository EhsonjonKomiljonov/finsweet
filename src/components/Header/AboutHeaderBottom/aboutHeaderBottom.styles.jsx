import styled from 'styled-components';
import AboutHeaderBottomBgi from '../../../assets/images/about-header-bgi.png';

export const AboutHeaderBottomStyle = styled.div`
  margin-bottom: 128px;
  padding: 72px 0 130px;

  &::after {
    position: absolute;
    top: 220px;
    right: calc(50% - 550px);
    width: 208px;
    height: 278px;
    background-image: url(${AboutHeaderBottomBgi});
    background-repeat: no-repeat;
    background-position: center;
    content: '';
  }
`;

export const AboutHeaderBottomContent = styled.div`
  width: 463px;
  margin-right: auto;
`;

export const AboutHeaderBottomTitle = styled.h2`
  margin: 0 0 24px;
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: -0.03em;
  color: #0d1317;
`;

export const AboutHeaderBottomText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
`;
