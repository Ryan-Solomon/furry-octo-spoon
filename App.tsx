import React from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import styled from 'styled-components/native';

export default function App() {
  return (
    <Container>
      <Title>What would you like to focus on?</Title>
      <TextInput />
    </Container>
  );
}

const Container = styled.View`
  padding: 40px 20px;
  background-color: #333;
  flex: 1;
`;

const Title = styled.Text`
  font-size: 20px;
  margin-bottom: 10px;
  color: #fff;
`;
