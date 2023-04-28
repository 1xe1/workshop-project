import { UserData } from "./user.model";

export interface Signin {
    success:    boolean;
    accessToken: string;
    user:       UserData;
}