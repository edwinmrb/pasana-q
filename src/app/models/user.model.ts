export interface IUser {
  fullName?: string;
  password?: string;
  email?: string;
}

export class User implements IUser {
  constructor(
    public fullName?: string,
    public password?: string,
    public email?: string,
  ) {
  }
}


