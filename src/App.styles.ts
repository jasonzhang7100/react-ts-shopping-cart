import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
  margin-top: 40px;
`;

export const StyledButton = styled(IconButton)`
  position: fixed;
  right: 20px;
  top: 20px;
  z-index: 100;
`;
