import React from "react";
import styled from "styled-components";
import User from "@/components/User";
import { useFetchUserList } from "@/queries/user";
import IntersectObserver from "@/components/IntersectObserver";
import type { IUser } from "@/types/user";

export default function Home() {
  const { isFetching, data, hasNextPage, fetchNextPage } = useFetchUserList();

  const handleIntersection = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  const renderUserList = () => {
    if (data && data.pages) {
      const userList = data.pages.reduce<IUser[]>((prev, { userList }) => {
        if (userList) prev.push(...userList);
        return prev;
      }, []);

      return userList.map(({ id, nickname }) => (
        <User key={id} id={id} nickname={nickname} />
      ));
    }
  };

  return (
    <Wrapper>
      {renderUserList()}
      {hasNextPage && <IntersectObserver handleIntersection={handleIntersection} />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 400px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  gap: 10px;
`;
