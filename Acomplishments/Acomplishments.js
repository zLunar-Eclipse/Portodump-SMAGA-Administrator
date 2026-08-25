import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';
const data = [
  { number: 2, text: 'Penghargaan Tingkat Provinsi [Gold Medalist MTK, Bronze Medalist Inggris]', },
  { number: 2, text: 'Partisipasi OSN-K [IPA & MTK]; Dua-duanya nggak lolos, so close yet so far...', },
  { number: 470, text: 'Jam dihabiskan untuk bermain Terraria', },
  { number: 93.75, text: 'Rerata puncak pada semester terakhir di SMP, Kelas 9 Semester Genap [MTK,Infor peak 98, Mandarin Peak 99],', }
];
const Acomplishments = () => (
  <Section>
    <SectionTitle>Pencapaian Personal</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`~${card.number}~`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);
export default Acomplishments