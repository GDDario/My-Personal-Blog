export interface UserInterface {
  id: number;
  username: string;
  email: string;
  about: string;
  picture: string;
  favoriteTopics: string[];
  registerDate: Date;
  postsRead: number;
  commentsMade: number;
}
