const router = require("express").Router();
const {
  Intro,
  About,
  Project,
  Contact,
  Experience,
  Education,
} = require("../models/portfolioModel");

const User = require("../models/userModel");
const rateLimit = require("express-rate-limit");

// helper to whitelist fields
const pick = (obj, fields) =>
  Object.fromEntries(
    (fields || [])
      .filter((f) => Object.prototype.hasOwnProperty.call(obj || {}, f))
      .map((f) => [f, obj[f]])
  );

// Sensitive route limiter (stricter for writes and login)
const sensitiveLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 50,
  standardHeaders: true,
  legacyHeaders: false,
});

//Gets All portfolio Data
router.get("/get-portfolio-data", async (req, res) => {
  try {
    const intros = await Intro.find();
    const abouts = await About.find();
    const projects = await Project.find();
    const contacts = await Contact.find();
    const experiences = await Experience.find();
    const educations = await Education.find();

    res.status(200).send({
      intro: intros[0],
      about: abouts[0],
      projects: projects,
      contact: contacts[0],
      experiences: experiences,
      educations: educations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//Update Intro
router.post("/update-intro", sensitiveLimiter, async (req, res) => {
  try {
    const allowedFields = [
      "welcomeText",
      "firstName",
      "lastName",
      "caption",
      "description",
    ];
    const update = pick(req.body, allowedFields);
    const intro = await Intro.findOneAndUpdate(
      { _id: { $eq: req.body._id } },
      { $set: update },
      { new: true, runValidators: true }
    );
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//Update About
router.post("/update-about", sensitiveLimiter, async (req, res) => {
  try {
    const allowedFields = [
      "lottieURL",
      "description1",
      "description2",
      "skills",
    ];
    const update = pick(req.body, allowedFields);
    const about = await About.findOneAndUpdate(
      { _id: { $eq: req.body._id } },
      { $set: update },
      { new: true, runValidators: true }
    );
    res.status(200).send({
      data: about,
      success: true,
      message: "About Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//Add Experience
router.post("/add-experience", sensitiveLimiter, async (req, res) => {
  try {
    const allowedFields = ["title", "period", "company", "description"];
    const payload = pick(req.body, allowedFields);
    const experience = new Experience(payload);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//Update Experience
router.post("/update-experience", sensitiveLimiter, async (req, res) => {
  try {
    const allowedFields = ["title", "period", "company", "description"];
    const update = pick(req.body, allowedFields);
    const experience = await Experience.findOneAndUpdate(
      { _id: { $eq: req.body._id } },
      { $set: update },
      { new: true, runValidators: true }
    );
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//Delete Experience
router.post("/delete-experience", sensitiveLimiter, async (req, res) => {
  try {
    const experience = await Experience.findOneAndDelete({
      _id: { $eq: req.body._id },
    });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//Add Education
router.post("/add-education", sensitiveLimiter, async (req, res) => {
  try {
    const allowedFields = ["period", "title", "institution", "coursework"];
    const payload = pick(req.body, allowedFields);
    const education = new Education(payload);
    await education.save();
    res.status(200).send({
      data: education,
      success: true,
      message: "Education Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//Update Education
router.post("/update-education", sensitiveLimiter, async (req, res) => {
  try {
    const allowedFields = ["period", "title", "institution", "coursework"];
    const update = pick(req.body, allowedFields);
    const education = await Education.findOneAndUpdate(
      { _id: { $eq: req.body._id } },
      { $set: update },
      { new: true, runValidators: true }
    );
    res.status(200).send({
      data: education,
      success: true,
      message: "Education Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//Delete Education
router.post("/delete-education", sensitiveLimiter, async (req, res) => {
  try {
    const education = await Education.findOneAndDelete({
      _id: { $eq: req.body._id },
    });
    res.status(200).send({
      data: education,
      success: true,
      message: "Education Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//Add Project
router.post("/add-project", sensitiveLimiter, async (req, res) => {
  try {
    const allowedFields = [
      "title",
      "description",
      "image",
      "link",
      "technologies",
    ];
    const payload = pick(req.body, allowedFields);
    const project = new Project(payload);
    await project.save();
    res.status(200).send({
      data: project,
      success: true,
      message: "Project Added Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//Update Project
router.post("/update-project", sensitiveLimiter, async (req, res) => {
  try {
    const allowedFields = [
      "title",
      "description",
      "image",
      "link",
      "technologies",
    ];
    const update = pick(req.body, allowedFields);
    const project = await Project.findOneAndUpdate(
      { _id: { $eq: req.body._id } },
      { $set: update },
      { new: true, runValidators: true }
    );
    res.status(200).send({
      data: project,
      success: true,
      message: "Project Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//Delete Project
router.post("/delete-project", sensitiveLimiter, async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: { $eq: req.body._id },
    });
    res.status(200).send({
      data: project,
      success: true,
      message: "Project Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

router.post("/update-contact", sensitiveLimiter, async (req, res) => {
  try {
    const allowedFields = ["name", "email", "mobile"];
    const update = pick(req.body, allowedFields);
    const contact = await Contact.findOneAndUpdate(
      { _id: { $eq: req.body._id } },
      { $set: update },
      { new: true, runValidators: true }
    );
    res.status(200).send({
      data: contact,
      success: true,
      message: "Contact Updated Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

//Admin Login
router.post("/admin-login", sensitiveLimiter, async (req, res) => {
  try {
    const allowedFields = ["username", "password"];
    const payload = pick(req.body, allowedFields);

    const user = await User.findOne({
      username: { $eq: payload.username },
      password: { $eq: payload.password },
    });

    if (user) {
      res.status(200).send({
        success: true,
        message: "login Successfull",
      });
    } else {
      res.status(200).send({
        success: false,
        message: "Invalid Username or Password",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
});

module.exports = router;
