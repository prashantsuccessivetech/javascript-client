import styled, { css } from 'styled-components';

const Select = styled.select`
width: 100%;
padding: 1%;
border-radius: 5px;
${(props) => props.error
  && css`
  border: 1px solid red;
  `};
`;
export { Select };