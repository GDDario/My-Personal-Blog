export interface RequestCommentInterface {
  id: number;
  likes: number;
  content: string;
  date: Date;
  editedDate: Date;
  currentUserLiked: boolean;
  answers: RequestCommentInterface[];
  user: {
    id: number;
    username: string;
    fullName: string;
    email: string;
    picture: string
    registerDate: Date;
    postsRead: number;
    commentsMade: number;
    role: {
      id: number;
      name: string;
    };
  };
}
