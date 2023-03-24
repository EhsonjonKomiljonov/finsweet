import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const SiteHeaderTop = styled.div``;

export const SiteHeaderTopInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SiteHeaderLogoLink = styled(Link)``;

export const SiteHeaderLogo = styled.img``;

export const SiteHeaderNavBar = styled.nav`
  margin-right: auto;
  margin-left: 64px;
`;

export const SiteHeaderList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SiteHeaderItem = styled.li`
  & + & {
    margin-left: 32px;
  }
`;

export const SiteHeaderLinks = styled(NavLink)`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #5b5b5b;
  transition: all 0.2s ease-in-out;

  &.active {
    color: #232ed1;
  }

  &:hover {
    color: #686fcc;
  }
`;

export const SiteHeaderBtn = styled(Link)`
  padding: 17px 32px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  border: 2px solid #232ed166;
  border-radius: 5px;
  color: #0d1317;
  transition: all 0.2s ease-out;

  &:hover {
    background-color: #232ed166;
    color: #fff;
  }
`;
