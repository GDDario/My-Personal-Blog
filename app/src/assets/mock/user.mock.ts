import { User } from "src/app/models/user.model";
export const mockUser: User = new User({
  id: 1,
  username: "JHNDOE",
  email: "jhon@doe.com",
  about: "I a very good person!",
  favoriteTopics: [""],
  registerDate: new Date(),
  postsRead: 35,
  commentsMade: 1,
  picture: "default-user-icon.png"
});

