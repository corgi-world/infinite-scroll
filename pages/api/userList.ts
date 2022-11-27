import type { NextApiRequest, NextApiResponse } from "next";
import client from "@/prisma/client";
import type { IUserResponse } from "@/types/user";

const TAKE_COUNT = 5;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<IUserResponse>
) {
  const { id } = req.query;

  const isFirstPage = !!id;
  const pageCondition = {
    skip: 1,
    cursor: {
      id: id as string,
    },
  };

  const userList = await client.user.findMany({
    /*
    where: { },
    orderBy: { }
    */
    take: TAKE_COUNT,
    ...(isFirstPage && pageCondition),
  });

  const length = userList.length;
  res.status(200).json({ userList: 0 < length ? userList : undefined });
}
