import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface IProps {
  handleIntersection: () => void;
}

export default function Observer({ handleIntersection }: IProps) {
  const target = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        if (entry.isIntersecting) {
          handleIntersection();
        }
      },
      { threshold: 1 }
    );

    if (target.current) {
      observer.observe(target.current);
    }

    return () => observer.disconnect();
  }, []);

  return <Wrapper ref={target}>이게 보이면? 다음 데이터를!</Wrapper>;
}

const Wrapper = styled.div`
  height: 150px;
  background-color: lightgray;
  display: flex;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  padding-top: 20px;
`;
