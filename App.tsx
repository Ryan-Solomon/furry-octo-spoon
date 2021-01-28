import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Button } from './src/components/Button';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [focusSubject, setFocusSubject] = useState('');
  return (
    <Container>
      {focusSubject ? (
        <>
          <Title>{focusSubject}</Title>
          <Button
            onPress={() => setFocusSubject('')}
            textSize='24px'
            text='Focus on something else'
            buttonRadius='50px'
            width='auto'
          />
        </>
      ) : (
        <>
          <Title>What would you like to focus on?</Title>
          <InputContainer>
            <TextInput
              value={inputText}
              onChangeText={(text) => setInputText(text)}
            />
            <Button
              onPress={() => {
                setFocusSubject(inputText);
                setInputText('');
              }}
              textSize='24px'
              text='+'
              buttonRadius='50px'
            />
          </InputContainer>
        </>
      )}
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

const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextInput = styled.TextInput`
  height: 50px;
  width: 80%;
  background: #fff;
  margin-right: 10px;
  padding: 10px;
`;
