import IAdmin from "./IAdmin";
import IUser from "./IUser";

export default interface IChat {
    admin: IAdmin;
    user: IUser;
    id: string;
    unreadMsgs:number
  }
  