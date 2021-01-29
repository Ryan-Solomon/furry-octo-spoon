import React, { FC, useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';

type Props = {
  startTime: number;
  isCountingDown: boolean;
};

export const Countdown: FC<Props> = ({ startTime, isCountingDown }) => {
  const [time, setTime] = useState(startTime);
  const timeIntervalId = useRef<number>();

  useEffect(() => {
    if (time <= 0) return;
    timeIntervalId.current = setTimeout(() => {
      setTime((t) => t - 1);
    }, 1000);
    return () => clearTimeout(timeIntervalId.current);
  }, [isCountingDown]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds}`;
  };

  return (
    <Container>
      <Time>{formatTime(time)}</Time>
    </Container>
  );
};

const Container = styled.View``;

const Time = styled.Text`
  font-size: 20px;
  color: #fff;
`;
