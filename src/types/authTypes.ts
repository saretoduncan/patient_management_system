export type TLoginReq = {
  username: string;
  password: string;
};
type TNextOfKeen = {
  id: string;
  first_name: string;
  last_Name: string;
  email: string;
  phoneNumber: string;
  relationship: string;
  profile_id: string;
  createdAt: string;
  updateAt: string;
};

type TProfile = {
  id: string;
  first_name: string;
  middle_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  work_email: string;
  national_id_no: string;
  job_title: string;
  user_id: string;
  createdAt: string;
  updateAt: string;
  next_of_keen: TNextOfKeen;
};

type TAccessLevel = {
  id: string;
  access_level: string;
};

export type TLoginResponse = TUser&{
  
  accessToken: string;
};
export type TUser ={
  id: string;
  username: string;
  createdAt: string;
  updateAt: string;
  profile: TProfile;
  access_levels: TAccessLevel[];
}