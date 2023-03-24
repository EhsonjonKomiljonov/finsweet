import React from 'react'
import { Container } from '../../Container'
import HappyCustomerImg1 from '../../assets/images/happy-customer.png'
import { HappyCusomerSection, HappyCustomerImg, HappyCustomerInner, HappyCustomertitle } from './happyCustomer.styles'

export const HappyCustomers = () => {
  return (
    <HappyCusomerSection>
      <Container>
        <HappyCustomerInner>
          <HappyCustomertitle className='visually-hidden' >Happy Customer</HappyCustomertitle>
          <HappyCustomerImg src={HappyCustomerImg1} alt="" />
        </HappyCustomerInner>
      </Container>
    </HappyCusomerSection>
  )
}
