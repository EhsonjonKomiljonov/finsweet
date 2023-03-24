import styled from 'styled-components';

export const FooterStyle = styled.footer`
  position: relative;
  margin-top: 154px;
  padding: 292px 0 0;
  background-color: #eff0f8;
`;

export const FooterInner = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterTop = styled.div``;

export const FooterTopInner = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterSocialsList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const FooterSocialsItem = styled.li`
  & + & {
    margin-left: 20px;
  }
`;

export const FooterSocialsLink = styled.a``;

export const FooterSocialsImg = styled.img``;

export const FooterContentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 845px;
`;

export const FooterContactLink = styled.a`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
`;

export const FooterBody = styled.div`
  margin-top: 120px;
`;

export const FooterBodyInner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterAddress = styled.address`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 141%;
  letter-spacing: -0.03em;
  color: #5b5b5b;
`;

export const FooterForm = styled.form`
  display: flex;
  justify-content: space-between;
  width: 845px;
  padding: 11px 12px 11px 32px;
  background-color: #fff;
  border-radius: 5px;
`;

export const FooterInput = styled.input`
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: #5b5b5b;
  opacity: 0.75;
  border: 0;
  outline: none;

  &:focus ~ label::after {
    width: 225px;
    transition: all 0.3s ease;
  }

  transition: all 0.3s ease;

  &::placeholder {
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
    color: #5b5b5b;
    opacity: 0.75;
  }
`;

export const FooterLabel = styled.label`
  position: relative;

  &::after {
    position: absolute;
    top: 50px;
    left: -362px;
    width: 0;
    height: 1px;
    background-color: #5b5b5b;
    transition: all 0.3s ease;
    content: '';
  }
`;

export const FooterFormBtn = styled.button`
  padding: 20px 35px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-transform: capitalize;
  color: #ffffff;
  background-color: #f24c27;
  border: 0;
  border-radius: 5px;
`;

export const FooterBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  padding: 21px 0;
  background-color: #232ed1;
`;

export const FooterBottomSmallContent = styled.small`
  font-weight: 500;
  font-size: 18px;
  line-height: 141%;
  letter-spacing: -0.03em;
  color: #ffffff;
`;
