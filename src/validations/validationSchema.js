const Joi = require("joi");

// Signup validation schema
const signupSchema = Joi.object({
  fullName: Joi.string().min(3).max(50).required().label("Full Name"),
  gender: Joi.string().valid("Male", "Female", "Other").required().label("Gender"),
  jobStatus: Joi.string().min(2).max(100).required().label("Job Status"),
  email: Joi.string().email({ tlds: { allow: false } }).required().label("Email"),
  password: Joi.string().min(6).max(30).required().label("Password"),
});

// Contact form validation schema
const contactSchema = Joi.object({
  company: Joi.string().min(2).max(100).required().label("Company Name"),
  name: Joi.string().min(2).max(50).required().label("Your Name"),
  industry: Joi.string().allow("").max(100).label("Industry"),

phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .label("Phone Number")
    .messages({
      'string.empty': 'Phone Number is required.',
      'string.pattern.base': 'Phone Number must be exactly 10 digits.',
    }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label("Email"),
  regions: Joi.array().items(Joi.string()).min(1).required().label("Regions of Interest"),
  workModel: Joi.string()
    .valid("Full time remote", "Part time", "On-site")
    .required()
    .label("Work Model"),
  country: Joi.string()
    .valid("Your country", "India", "USA")
    .required()
    .label("Country"),
  teamSize: Joi.number().min(1).max(50).required().label("Team Size"),
  requirements: Joi.string().allow("").max(1000).label("Additional Requirements"),
});


const consultSchema = Joi.object({
  company: Joi.string()
    .min(2)
    .required()
    .label("Company Name")
    .messages({
      'string.empty': 'Company Name is required.',
      'string.min': 'Company Name must be at least 2 characters long.',
    }),

  name: Joi.string()
    .min(2)
    .required()
    .label("Full Name")
    .messages({
      'string.empty': 'Full Name is required.',
      'string.min': 'Full Name must be at least 2 characters long.',
    }),

  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .label("Phone Number")
    .messages({
      'string.empty': 'Phone Number is required.',
      'string.pattern.base': 'Phone Number must be exactly 10 digits.',
    }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .label("Email")
    .messages({
      'string.empty': 'Email is required.',
      'string.email': 'Please enter a valid email address.',
    }),

  requirements: Joi.string()
    .min(5)
    .required()
    .label("Hiring Requirements")
    .messages({
      'string.empty': 'Hiring Requirements are required.',
      'string.min': 'Hiring Requirements must be at least 5 characters.',
    }),
});

const info1Schema = Joi.object({
  companyName: Joi.string().min(2).required().label("Company Name"),
  industry: Joi.string().required().label("Industry"),
  companySize: Joi.string().required().label("Company Size"),
  fullName: Joi.string().min(2).required().label("Your Name"),
  email: Joi.string().email({ tlds: { allow: false } }).required().label("Email"),
});

 const personalSchema = Joi.object({
  firstName: Joi.string().min(2).max(30).required().label("First Name"),
  lastName: Joi.string().allow("").max(30).label("Last Name"),
  email: Joi.string().email({ tlds: { allow: false } }).required().label("Email"),
  phone: Joi.string().pattern(/^[0-9]{10}$/).required().label("Phone").messages({
    "string.pattern.base": `"Phone" must be a valid 10-digit number without country code or spaces`,
    "string.empty": `"Phone" cannot be empty`,
    "any.required": `"Phone" is required`
  }),
  gender: Joi.string().valid("female", "other").required().label("Gender"),
  country: Joi.string().label("Country"),
  state:Joi.string().label("State"),
  city: Joi.string().allow("").label("City"),
  careerBreak: Joi.boolean().label("Career Break"),
  deiIdentities: Joi.array().items(Joi.string()).label("DEI Identities")
});

module.exports = {
  signupSchema,
  contactSchema,
  consultSchema,info1Schema
  ,personalSchema
};
