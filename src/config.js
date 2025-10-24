const API_BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : process.env.REACT_APP_BACKEND_URL;

export const LINKEDIN_REDIRECT_URI =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000/api/linkedin/callback'
    :`${process.env.REACT_APP_BACKEND_URL}/api/linkedin/callback`;

export default API_BASE_URL;
