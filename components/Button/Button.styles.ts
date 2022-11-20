import styled from 'styled-components/native';

interface ContainerProps {
  disabled?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  align-items: center;
  background: ${({ disabled }) => (disabled ? '#99999980' : '#2066fc')};
  border-radius: 48px;
  justify-content: center;
  padding: 14px 24px;
`;
