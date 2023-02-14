

export const isUser = (to, from, next) => {

  const token = localStorage.getItem("token");

  if (token) {
    next();
  } 
  else {
    next({ name: "loginView" });
  }
};

export const isAnon = (to, from, next) => {

  const token = localStorage.getItem("token");

  if (!token) {
    next();
  } 
  else {
    next({ name: "flitsView" });
  }
};
