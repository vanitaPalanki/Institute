const { validationResult } = require("express-validator");

const HttpError = require("../modals/http-error");
const Institute = require("../modals/user-modal");

const instituteSignup = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invaid inputs passed, please check your data.", 422)
    );
  }

  const {
    UserName,
    Doe,
    InstituteName,
    Email,
    Password,
    UserDesigination,
    Address,
    Contact,
  } = req.body;

  let existingInstitute;
  try {
    existingInstitute = await Institute.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "User exists already, please login instead.",
      422
    );
    return next(error);
  }

  const createInstitute = new Institute({
    UserName,
    student: [],
    //teachers: [],
    batch: [],
    Doe,
    InstituteName,
    Email,
    Password,
    UserDesigination,
    Address,
    Contact,
  });
  await createInstitute.save();
  /*try {
    await createInstitute.save();
  } catch (err) {
    const error = new HttpError("Signing up failde, please try again.", 500);
    return next(error);
  }*/

  res
    .status(201)
    .json({ institute: createInstitute.toObject({ getters: true }) });
};

exports.instituteSignup = instituteSignup;
