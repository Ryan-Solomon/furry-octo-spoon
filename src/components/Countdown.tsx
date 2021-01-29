import React, { FC } from 'react';
import styled from 'styled-components/native';

type Props = {
  startTime: number;
  isCountingDown: boolean;
};

export const Countdown: FC<Props> = ({ startTime, isCountingDown }) => {
  return <Container></Container>;
};

const Container = styled.View``;

const Time = styled.Text`
  font-size: 20px;
  color: #fff;
`;
