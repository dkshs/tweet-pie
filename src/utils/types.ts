export interface UserProps {
  image: string;
  username: string;
  name: string;
}

export interface PostProps {
  user: UserProps;
  content: string;
}
