import Joi from "joi";

export const createPostSchema = Joi.object({
  // _id: Joi.string().required(),
  caption: Joi.string().required(),
  created_at: Joi.string(),
  postImage : Joi.string().optional(),
  created_by_user_id:Joi.string().required()

});