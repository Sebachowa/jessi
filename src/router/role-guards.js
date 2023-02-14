

export const userGuard = (to, from, next) => {

  const token = localStorage.getItem("token");

  if (token) {
    next();
  } 
  else {
    next({ name: "loginView" });
  }
};

export const anonGuard = (to, from, next) => {

  const token = localStorage.getItem("token");

  if (!token) {
    next();
  } 
  else {
    next({ name: "flitsView" });
  }
};
