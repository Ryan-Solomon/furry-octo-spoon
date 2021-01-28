import React from 'react';
import { FC } from 'react';
import styled from 'styled-components/native';

type Props = {
  onPress: () => void;
  textColor: string;
  buttonRadius: string;
  borderColor: string;
  backgroundColor: string;
  textSize: string;
  text: string;
  height: string;
  width: string;
};

export const Button: FC<Partial<Props>> = ({
  backgroundColor = '#333',
  buttonRadius = '20px',
  borderColor = '#fff',
  textSize = '14px',
  textColor = '#fff',
  text = 'button',
  height = '50px',
  width = '50px',
  onPress,
}) => {
  return (
    <Container>
      <StyledButton
        onPress={onPress}
        height={height}
        width={width}
        backgroundColor={backgroundColor}
        buttonRadius={buttonRadius}
        borderColor={borderColor}
      >
        <ButtonText textSize={textSize} textColor={textColor}>
          {text}
        </ButtonText>
      </StyledButton>
    </Container>
  );
};

const Container = styled.View``;

type ButtonProps = {
  backgroundColor: string;
  borderColor: string;
  buttonRadius: string;
  height: string;
  width: string;
};

const StyledButton = styled.TouchableOpacity<ButtonProps>`
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ buttonRadius }) => buttonRadius};
  border-color: ${({ borderColor }) => borderColor};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-width: 1px;
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

type ButtonTextProps = {
  textSize: string;
  textColor: string;
};

const ButtonText = styled.Text<ButtonTextProps>`
  font-size: ${({ textSize }) => textSize};
  color: ${({ textColor }) => textColor};
`;
