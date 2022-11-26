import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface IProps {
  handleIntersection: () => void;
}

export default function IntersectObserver({ handleIntersection }: IProps) {
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

  return <Wrapper ref={target} />;
}

const Wrapper = styled.div`
  height: 100px;
  background-color: black;
`;
