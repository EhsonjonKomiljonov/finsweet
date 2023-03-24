import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import HeaderBottomBgi from '../../../assets/images/header-bgi.png';

export const SiteHeaderBottom = styled.div`
  padding-top: 182px;
  padding-bottom: 237px;
  background-image: url(${HeaderBottomBgi});
  background-repeat: no-repeat;
  background-position: bottom -150px right calc(50% - 500px);
`;

export const SiteHeaderBottomInner = styled.div`
  width: 100%;
  max-width: 585px;
  margin-right: auto;
`;

export const SiteHeaderBottomTitle = styled.h1`
  font-weight: 600;
  font-size: 64px;
  line-height: 68px;
  letter-spacing: -0.03em;
  color: #0d1317;
`;

export const SiteHeaderBottomTextBox = styled.span`
  width: 100%;
  max-width: 513px;
`;

export const SiteHeaderBottomText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
`;

export const SiteHeaderBottomBtnBox = styled.div`
  margin-top: 48px;
`;

export const SiteHeaderBottomLink = styled(NavLink)`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #5b5b5b;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: #626ad6;
  }
`;
