import styled from 'styled-components/native';
import { theme } from '../theme';

const ButtonContainer = styled.TouchableOpacity`
  background-color: ${({ title, theme }) => title === 'Hanbit' ? theme.blue : theme.purple};
  border-radius: 10px;
  padding: 15px 40px;
  margin: 10px 0px;
  justify-content: center;
`;

const Title = styled.Text`
  color: ${({theme}) => theme.text};
  font-size: 20px;
  font-weight: 600;
`;

const Button = ({ title }) => {
  return (
    <ButtonContainer title={title}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
};

export default Button;
