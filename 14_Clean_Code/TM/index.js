function processUser(user) {
  if (!isValidCandidate(user)) {
    console.warn("User tidak valid:", user);
    return { success: false, reason: "invalid_candidate" };
  }

  try {
    return doSomething(user);
  } catch (error) {
    console.error("Gagal proses user:", error);
    return { success: false, reason: "processing_error" };
  }
}

function isValidCandidate(user) {
  return Boolean(user && user.isActive && user.hasPermission);
}