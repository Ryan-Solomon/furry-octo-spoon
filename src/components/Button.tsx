import styled from 'styled-components/native';

export const Button = () => {
  return (
    <Container>
      <StyledButton>
        <ButtonText>Button</ButtonText>
      </StyledButton>
    </Container>
  );
};

const Container = styled.View``;

const StyledButton = styled.TouchableOpacity``;

const ButtonText = styled.Text``;
