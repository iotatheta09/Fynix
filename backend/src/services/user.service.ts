import User from "../models/user.model";

import { NotFoundException } from "../utils/app-error";
import { UpdateUserType } from "../validators/user.validator";

export const findByIdUserService = async (userId: string) => {
  const user = await User.findById(userId).select("+password");
  return user?.omitpassword();
};

export const updateUserService = async (
  userId: string,
  body: UpdateUserType,
  profilePic?: Express.Multer.File
) => {
  const user = await User.findById(userId).select("+password");
  if (!user) throw new NotFoundException("User not found");

  if (profilePic) {
    user.profilePicture = profilePic.path;
  }

  user.set({
    name: body.name,
  });

  await user.save();

  return user.omitpassword();
};