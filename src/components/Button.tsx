import { FC } from 'react';
import styled from 'styled-components/native';

type Props = {
  textColor?: string;
  buttonRadius?: string;
  backgroundColor?: string;
  textSize?: string;
};

export const Button: FC<Partial<Props>> = ({
  backgroundColor = '#333',
  buttonRadius = '10px',
  textSize = '14px',
  textColor = '#fff',
}) => {
  return (
    <Container>
      <StyledButton
        backgroundColor={backgroundColor}
        buttonRadius={buttonRadius}
      >
        <ButtonText textSize={textSize} textColor={textColor}>
          Button
        </ButtonText>
      </StyledButton>
    </Container>
  );
};

const Container = styled.View``;

type ButtonProps = {
  backgroundColor: string;
  buttonRadius: string;
};

const StyledButton = styled.TouchableOpacity<ButtonProps>`
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ buttonRadius }) => buttonRadius};
`;

type ButtonTextProps = {
  textSize: string;
  textColor: string;
};

const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${({ textSize }) => textSize};
  color: ${({ textColor }) => textColor};
`;
