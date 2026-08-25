import styled from 'styled-components';
//well yeh, codepen
export const LeftSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    margin: 0 auto;
  }
`;
