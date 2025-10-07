import joi from "joi";

export const validateRequest = (schema, target = "body") => {
  return (req, res, next) => {
    const { value, error } = schema.validate(req[target], {
      abortEarly: false,
      stripUnKnown: true,
    });

    if (error) {
      return res.status(400).json({
        error: "Lỗi Kiểu dữ liệu",
        details: error.details.map((err) => err.message),
      });
    }

    req[target] = value;
    next();
  };
};
