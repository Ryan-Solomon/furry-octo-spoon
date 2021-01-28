import { FC } from 'react';
import styled from 'styled-components/native';

type Props = {
  buttonColor?: string;
  textColor?: string;
  buttonRadius?: string;
  backgroundColor?: string;
  size?: string;
};

export const Button: FC<Props> = ({
  backgroundColor,
  buttonColor,
  buttonRadius,
  children,
  size,
  textColor,
}) => {
  return (
    <Container>
      <StyledButton>
        <ButtonText size={size} textColor={textColor}>
          Button
        </ButtonText>
      </StyledButton>
    </Container>
  );
};

const Container = styled.View``;

const StyledButton = styled.TouchableOpacity``;

const ButtonText = styled.Text``;
