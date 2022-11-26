import React from "react";
import styled from "styled-components";

interface UserProps {
  id: string;
  nickname: string;
}

export default function User({ id, nickname }: UserProps) {
  return (
    <Wrapper>
      <Text>{id}</Text>
      <Text>{nickname}</Text>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 3px solid gray;
`;

const Text = styled.p`
  font-size: 20px;
  font-weight: 600;
`;
