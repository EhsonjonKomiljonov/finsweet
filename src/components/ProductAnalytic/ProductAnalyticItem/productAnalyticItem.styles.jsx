import styled from 'styled-components';

export const ProductAnalyticItemStyle = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:nth-child(1) {
    ul {
      display: none;
    }
  }
`;

export const ProductAnalyticItemImg = styled.img``;

export const ProductAnalyticItemContent = styled.div`
  width: 512px;
`;

export const ProductAnalyticItemFeaturesText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #232ed1;
`;

export const ProductAnalyticItemTitle = styled.h3`
  margin: 16px 0 24px;
  font-weight: 600;
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.03em;
  color: #0d1317;
`;

export const ProductAnalyticItemDesc = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
`;

export const ProductAnalyticItemList = styled.ul`
  margin-top: 20px;
  margin-left: 20px;
  list-style: disc;
`;

export const ProductAnalyticItemListItem = styled.li``;

export const ProductAnalyticItemListText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #5b5b5b;
`;
