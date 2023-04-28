export interface UserData {
    _id:      string;
    user_id:  string;
    username: string;
    password: string;
    name:     string;
    role:     string;
    active:   boolean;
}

export interface UserState {
    user?: UserData
    accessToken: string
    isAuthenticated: boolean
    isAuthenticating: boolean
  }