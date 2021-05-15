const courses = document.querySelectorAll(".course");

courses.forEach((course) => {
  course.addEventListener("click", () => {
    location.href = "../auth/login.html";
  });
});
