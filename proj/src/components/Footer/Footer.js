import React from 'react'
import Footer from './components/footer'
import Icon from './components/icons'


export default function FooterContainer() {
    return (
        <>
        <div style={{paddingTop: "400px"}} />
        <svg className="wave-qsoVIt" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" preserveAspectRatio="none"><path className="wavePath-22lfEN" d="M826.337463,25.5396311 C670.970254,58.655965 603.696181,68.7870267 447.802481,35.1443383 C293.342778,1.81111414 137.33377,1.81111414 0,1.81111414 L0,150 L1920,150 L1920,1.81111414 C1739.53523,-16.6853983 1679.86404,73.1607868 1389.7826,37.4859505 C1099.70117,1.81111414 981.704672,-7.57670281 826.337463,25.5396311 Z" fill="currentColor"></path></svg>
        <Footer>
            
            <Footer.Wrapper>
            <Footer.Row>
                {/* <Footer.Column>
                <Footer.Title>About Me</Footer.Title>
                    <Footer.Link href="#">Story</Footer.Link>

                </Footer.Column> */}

                <Footer.Column>
                <Footer.Title>Contact Me</Footer.Title>
                    <Footer.Link href="#">epictaig@gmail.com</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="https://www.snapchat.com/add/aliahmad2a"><Icon className="fab fa-snapchat" />aliahmad2a</Footer.Link>
                    <Footer.Link href="https://www.instagram.com/ali_alfadhli1/"><Icon className="fab fa-instagram" />ali_alfadhli1</Footer.Link>
                    <Footer.Link href="https://github.com/Ali-9005"><Icon className="fab fa-github" />Ali-9005</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            </Footer.Wrapper>

        </Footer>
        </>
    )
}