import Joi from "joi";
import { Schema } from "mongoose";

export const commentValidation = Joi.object({
  title: Joi.string().empty().optional().messages({}),
  content: Joi.string().max(500).optional().messages({}),
  product: Joi.string().required().messages({}),
  user: Joi.string().required().messages({}),
});

export const commentUpdateValidate = commentValidation.fork(
  ["title", "content", "product", "user"],
  (Schema = Schema.optional())
);
