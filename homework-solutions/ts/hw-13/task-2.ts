function validatePassword(password: string): boolean {
    return password.trim().length > 0 &&
           password.length >= 8 &&
           /[A-Z]/.test(password) &&
           /[a-z]/.test(password) &&
           /\d/.test(password);
}