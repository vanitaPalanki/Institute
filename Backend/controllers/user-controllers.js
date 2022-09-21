const { validationResult } = require("express-validator");

const HttpError = require("../modals/http-error");
const Student = require("../modals/user-modal");
const Institute = require("../modals/institute-modal");
//const Batch = require("../modals/batch-modal");

const studentSignup = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invaid inputs passed, please check your data.", 422)
    );
  }

  const {
    name,
    instituteId,
    //batchId,
    dob,
    email,
    password,
    address,
    regristrationStatus,
    batchName,
    instituteName,
  } = req.body;

  let existingUser;
  try {
    existingUser = await Student.findOne({ email: email });
  } catch (err) {
    const error = new HttpError(
      "User exists already, please login instead.",
      422
    );
    return next(error);
  }

  const createStudent = new Student({
    name,
    instituteId,
    //batchId,
    dob,
    email,
    password,
    address,
    regristrationStatus,
    batchName,
    instituteName,
  });

  let checkInstitute;
  try {
    checkInstitute = await Institute.findById(instituteId);
  } catch (err) {
    const error = new HttpError(
      "student regristration failed please try again later.",
      500
    );
    return next(error);
  }

  if (!checkInstitute) {
    const error = new HttpError(
      "Could not find the institute for the given instituteId.",
      404
    );
    return next(error);
  }

  console.log(checkInstitute);

  /*let checkBatch;
  try {
    checkBatch = await Batch.findById(instituteId);
  } catch (err) {
    const error = new HttpError(
      "student regristration failed please try again later.",
      500
    );
    return next(error);
  }

  if (!checkBatch) {
    const error = new HttpError(
      "Could not find the institute for the given instituteId.",
      404
    );
    return next(error);
  }

  console.log(checkBatch);*/

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await createStudent.save({ session: sess });
    checkInstitute.student.push(createStudent);
    await checkInstitute.save({ session: sess });
    //checkBatch.student.push(createStudent);
    //await checkBatch.save({ session: sess });
    await session.commitTransaction();
  } catch (err) {
    const error = new HttpError("Signing up failde, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ student: createStudent.toObject({ getters: true }) });
};

exports.studentSignup = studentSignup;
