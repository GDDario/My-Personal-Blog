import { User } from "src/app/models/user.model";
import { Comment } from "../../app/models/comment.model";

export const mockComments: Comment[] = [
  new Comment({
    id: 3,
    user: new User({ picture: "default-user-icon.png", username: "JHNDOE", }),
    likes: 3,
    content: "Another sample comment 1",
    date: new Date(),
  }),
  new Comment({
    id: 4,
    user: new User({ picture: "default-user-icon.png", username: "JHNDOE", }),
    likes: 7,
    content: "Another sample comment 2",
    date: new Date(),
  }),
  new Comment({
    id: 5,
    user: new User({ picture: "default-user-icon.png", username: "JHNDOE", }),
    likes: 1,
    content: "Yet another sample comment 1",
    date: new Date(),
  }),
  new Comment({
    id: 6,
    user: new User({ picture: "default-user-icon.png", username: "JHNDOE", }),
    likes: 4,
    content: "Yet another sample comment 2",
    date: new Date(),
  }),
  new Comment({
    id: 7,
    user: new User({ picture: "default-user-icon.png", username: "JHNDOE", }),
    likes: 2,
    content: "One more sample comment 1",
    date: new Date(),
  }),
  new Comment({
    id: 8,
    user: new User({ picture: "default-user-icon.png", username: "JHNDOE", }),
    likes: 8,
    content: "One more sample comment 2",
    date: new Date(),
  }),
  new Comment({
    id: 9,
    user: new User({ picture: "default-user-icon.png", username: "JHNDOE", }),
    likes: 6,
    content: "Final sample comment 1",
    date: new Date(),
  }),
  new Comment({
    id: 10,
    user: new User({ picture: "default-user-icon.png", username: "JHNDOE", }),
    likes: 5,
    content: "Final sample comment 2",
    date: new Date(),
  }),
];
