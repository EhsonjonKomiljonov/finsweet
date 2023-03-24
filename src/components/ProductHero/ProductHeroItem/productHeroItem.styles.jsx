import styled from 'styled-components';

export const ProductHeroItemStyle = styled.li`
  position: relative;
  width: 373px;
  padding-top: 132px;
  &::before {
    position: absolute;
    top: 0;
    width: 32px;
    height: 32px;
    padding: 38px 38px;
    background-image: ${(props) => props.img},
      linear-gradient(
        180deg,
        rgba(35, 46, 209, 0.03) 0%,
        rgba(35, 46, 209, 0.15) 100%
      );
    background-repeat: no-repeat, repeat;
    background-position: center;
    border-radius: 12px;
    content: '';
  }
`;

export const ProductHeroItemTitle = styled.h3`
  margin: 0 0 16px;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  color: #000000;
`;

export const ProductHeroItemText = styled.p`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
`;
