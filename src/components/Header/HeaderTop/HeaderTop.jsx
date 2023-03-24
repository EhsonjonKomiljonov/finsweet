import React from 'react';
import {
  SiteHeaderList,
  SiteHeaderNavBar,
  SiteHeaderLogo,
  SiteHeaderLogoLink,
  SiteHeaderItem,
  SiteHeaderLinks,
  SiteHeaderBtn,
  SiteHeaderTop,
  SiteHeaderTopInner,
} from './headerTop.styles';
import Logo from '../../../assets/images/logo.svg';
import { Container } from '../../../Container';

export const HeaderTop = () => {
  return (
    <SiteHeaderTop>
      <Container>
        <SiteHeaderTopInner>
          <SiteHeaderLogoLink to="/">
            <SiteHeaderLogo src={Logo} alt="Logo" />
          </SiteHeaderLogoLink>
          <SiteHeaderNavBar>
            <SiteHeaderList>
              <SiteHeaderItem>
                <SiteHeaderLinks to="/">Home</SiteHeaderLinks>
              </SiteHeaderItem>
              <SiteHeaderItem>
                <SiteHeaderLinks
                  style={({ isActive }) =>
                    isActive ? { color: '#232ED1' } : {}
                  }
                  to="/product"
                >
                  Product
                </SiteHeaderLinks>
              </SiteHeaderItem>
              <SiteHeaderItem>
                <SiteHeaderLinks
                  style={({ isActive }) =>
                    isActive ? { color: '#232ED1' } : {}
                  }
                  to="/pricing"
                >
                  Pricing
                </SiteHeaderLinks>
              </SiteHeaderItem>
              <SiteHeaderItem>
                <SiteHeaderLinks
                  style={({ isActive }) =>
                    isActive ? { color: '#232ED1' } : {}
                  }
                  to="/about"
                >
                  About Us
                </SiteHeaderLinks>
              </SiteHeaderItem>
              <SiteHeaderItem>
                <SiteHeaderLinks
                  style={({ isActive }) =>
                    isActive ? { color: '#232ED1' } : {}
                  }
                  to="/contact"
                >
                  Contact
                </SiteHeaderLinks>
              </SiteHeaderItem>
              <SiteHeaderItem>
                <SiteHeaderLinks
                  style={({ isActive }) =>
                    isActive ? { color: '#232ED1' } : {}
                  }
                  to="/blog"
                >
                  Blog
                </SiteHeaderLinks>
              </SiteHeaderItem>
            </SiteHeaderList>
          </SiteHeaderNavBar>
          <SiteHeaderBtn to="/">Clone Project</SiteHeaderBtn>
        </SiteHeaderTopInner>
      </Container>
    </SiteHeaderTop>
  );
};
