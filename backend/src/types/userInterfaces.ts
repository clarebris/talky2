export interface updatUser {
    _id: string;
    username: string;
    email: string;
    profileImage: string;
    fullName: string;
  }
  export interface user extends updatUser {
    password: string;
  }
  
  export interface checkDetailsUser {
    _id: string;
    username: string;
    email: string;
    profileImage: string;
    fullName: string;
  }