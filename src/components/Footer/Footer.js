import React from 'react';

import { Colophon, FooterEmail, FooterWrapper } from './FooterStyles';

const Footer = () => (
  <FooterWrapper>
    <Colophon>
      © {new Date().getFullYear()} Prashish Paudel
    </Colophon>
    <FooterEmail href="mailto:prashishpaudel@gmail.com">
      prashishpaudel@gmail.com ↗
    </FooterEmail>
  </FooterWrapper>
);

export default Footer;
