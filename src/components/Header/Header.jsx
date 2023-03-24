import React from 'react';
import { SiteHeader, SiteHeaderInner } from './header.styles';
import { HeaderTop } from './HeaderTop/HeaderTop';

export const Header = ({ HeaderBottom }) => {
  return (
    <SiteHeader>
      <SiteHeaderInner>
        <HeaderTop />
        <HeaderBottom />
      </SiteHeaderInner>
    </SiteHeader>
  );
};
