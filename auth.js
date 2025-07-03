// auth.js - Authentication and Authorization

// Simulate registered users (in real use, this comes from a database)
const users = [
  { email: "seeker@example.com", password: "1234", role: "jobseeker" },
  { email: "employer@example.com", password: "1234", role: "employer" },
  { email: "admin@example.com", password: "admin", role: "admin" }
];

function login(email, password, role) {
  const user = users.find(
    u => u.email === email && u.password === password && u.role === role
  );
  if (user) {
    localStorage.setItem("isLoggedIn", true);
    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);
    return true;
  }
  return false;
}

function logout() {
  localStorage.clear();
  window.location.href = "login.html";
}

function checkAuth(requiredRole) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userRole = localStorage.getItem("userRole");
  if (!isLoggedIn || userRole !== requiredRole) {
    alert("Access denied. Redirecting to login.");
    window.location.href = "login.html";
  }
}

function getCurrentUser() {
  return {
    email: localStorage.getItem("userEmail"),
    role: localStorage.getItem("userRole"),
    isLoggedIn: localStorage.getItem("isLoggedIn") === "true"
  };
}
