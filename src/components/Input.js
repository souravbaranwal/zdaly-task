import {flexbox, typography, space, border, color, layout} from 'styled-system';
import styled from 'styled-components';

export const Input = styled.TextInput`
  ${flexbox}
  ${typography}
  ${space}
  ${border}
  ${color}
  ${layout}
`;

Input.defaultProps = {
  fontSize: 14,
  fontFamily: 'Poppins400',
};
