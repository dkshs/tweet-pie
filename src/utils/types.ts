export interface UserProps {
  image: string;
  username: string;
  name: string;
}

export interface PostProps {
  id: string;
  user: UserProps;
  content: string;
}
