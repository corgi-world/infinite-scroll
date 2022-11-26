export interface IUser {
  id: string;
  nickname: string;
}

export interface IUserResponse {
  userList?: IUser[];
}
