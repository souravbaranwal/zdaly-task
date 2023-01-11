import {color, space, typography, flexbox, layout} from 'styled-system';
import styled from 'styled-components';

export const Typography = styled.Text`
  ${typography}
  ${color}
  ${space}  
  ${flexbox}
  ${layout}
`;

Typography.defaultProps = {
  fontSize: 14,
  fontFamily: 'Poppins400',
  color: 'black',
};
