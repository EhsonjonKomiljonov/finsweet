import styled from 'styled-components';
import CheckIconBlue from '../../../assets/images/check-icon.svg';
import CheckIconRed from '../../../assets/images/check-icon-red.svg';

export const PricingHeaderBottomItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 446px;
  height: 788px;
  padding: 74px 56px 56px;
  background-image: linear-gradient(180deg, #ffffff 52.08%, #ecedff 100%);
  transition: all 0.3s ease;

  &:hover {
    background-image: linear-gradient(180deg, #ffffff 52.6%, #ffe8e2 100%);

    ul {
      li::before {
        background-image: url(${CheckIconRed});
        transition: all 0.3s ease;
      }
    }

    button {
      background-color: #f24c27;
      color: #fff;
      border: 1px solid #f24c27;
      transition: all .3s ease;
    }
  }

  &:nth-child(1) {
    ul {
      li:nth-child(4),
      li:nth-child(5) {
        display: none;
      }
    }
  }

  &:nth-child(2) {
    ul {
      li:nth-child(5) {
        display: none;
      }
    }
  }
`;

export const PricingHeaderBottomSubtitle = styled.h3`
  margin: 0 0 32px;
  font-weight: 600;
  font-size: 36px;
  line-height: 106.5%;
  letter-spacing: -0.03em;
  color: #000000;
`;

export const PricingHeaderBottomPriceBox = styled.span`
  display: block;
  width: 270px;
`;

export const PricingHeaderBottomPrice = styled.ins`
  font-weight: 600;
  line-height: 106.5%;
  font-size: 96px;
  text-decoration: none;
  letter-spacing: -0.03em;
  color: #0d1317;
`;

export const PricingHeaderBottomPriceSmall = styled.span`
  font-size: 36px;
  line-height: 38px;
  letter-spacing: -0.03em;
`;

export const PricingHeaderBotttomItemText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
`;

export const PricingHeaderBototmItemList = styled.ul`
  margin-top: 32px;
  margin-bottom: auto;
`;

export const PricingHeaderBottomItemListItem = styled.li`
  display: flex;
  align-items: center;

  & + & {
    margin-top: 24px;
  }

  &::before {
    display: block;
    margin-right: 16px;
    width: 20px;
    height: 15px;
    background-image: url(${CheckIconBlue});
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.3s ease;
    content: '';
  }
`;

export const PricingHeaderBottomItemListText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 171%;
  color: #5a5a5a;
`;

export const PricingHeaderBottomItemBtn = styled.button`
  padding: 18px 0;
  font-weight: 500;
  font-size: 24px;
  line-height: 171%;
  background-color: transparent;
  border: 2px solid #232ed1;
  border-radius: 7px;
  color: #232ed1;
  transition: all .3s ease;
  cursor: pointer;
`;
