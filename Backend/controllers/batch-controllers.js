const { validationResult } = require("express-validator");

const HttpError = require("../modals/http-error");
const Batch = require("../modals/user-modal");
const Institute = require("../modals/institute-modal");

const addBatch = async (req, res, next) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return next(
      new HttpError("Invaid inputs passed, please check your data.", 422)
    );
  }

  const { name, duration, student, instituteId } = req.body;

  let existingbatch;
  try {
    existingbatch = await Batch.findOne({ name: name });
  } catch (err) {
    const error = new HttpError(
      "User exists already, please login instead.",
      422
    );
    return next(error);
  }

  const createBatch = new Batch({
    name,
    duration,
    student: [],
    instituteId,
  });

  let checkInstitute;
  try {
    checkInstitute = await Institute.findById(instituteId);
  } catch (err) {
    const error = new HttpError(
      "Adding new batch failed please try again later.",
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

  try {
    const sess = await mongoose.startSession();
    sess.startTransaction();
    await addBatch.save({ session: sess });
    checkInstitute.batch.push(createStudent);
    await checkInstitute.save({ session: sess });
    await session.commitTransaction();
  } catch (err) {
    const error = new HttpError("Signing up failde, please try again.", 500);
    return next(error);
  }

  res.status(201).json({ batch: createBatch.toObject({ getters: true }) });
};

exports.addBatch = addBatch;
