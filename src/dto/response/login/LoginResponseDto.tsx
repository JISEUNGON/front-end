export type LoginResponseDto = { 
    id : number;
    accessToken : string;
    refreshToken : string;
    nickname : string;
    email : string;
    profileImg : string;
    phoneNum : string;
    gender : boolean;
    userType : number;
    univEmail : string;
    isExistedUser : boolean;
}