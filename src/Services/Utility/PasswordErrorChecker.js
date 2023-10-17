// handlePasswordChange
const passwordErrorChecker = (e) => {
  const password = e.target.value;
  if (password.length < 1) {
    return null;
  } else if (password.length < 6) {
    return 'Password must be more than 6 characters';
  } else if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least 1 Uppercase characters';
  } else if (!/[@$!%*?&#]/.test(password)) {
    return 'Password must contain at least 1 special characters';
  } else {
    return null;
  }
};

export default passwordErrorChecker;
