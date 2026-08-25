import React from 'react';
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Halo Halo! Selamat Datang!!!<br />
        </SectionTitle>
        <SectionText center>
          Halo, nama saya Edwin Jordan William dari kelas<span style={{ color: '#ff0000', fontWeight: 700, fontFamily: 'sans-serif' }}>🔥X.E 1🔥</span>Saya adalah seorang pecinta Informatika (dan Matemaika ofc) yang menyukai hal-hal yang berkaitan dengan teknologi modern.
        </SectionText>
        <img
          src="/images/profile.jpeg"
          alt="Portfolio preview"
          style={{
            width: '360px',
            height: 'auto',
            borderRadius: '17px',
            marginTop: '-12px',
            marginBottom: '60px',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block'
          }}
        />
      </LeftSection>
    </Section>
  </>
);
export default Hero;