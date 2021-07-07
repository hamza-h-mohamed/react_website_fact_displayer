import React from 'react';
import { FooterContainer, FooterWrapper, FooterLinksContainer, 
    FooterLinkWrapper, WebsiteRights } from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <WebsiteRights>2021 FunFact.com</WebsiteRights>
                    </FooterLinkWrapper>
                </FooterLinksContainer>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
