module.exports = {
  routes: [
    {
      method: "POST",
      path: "/form-submissions",
      handler: "form-submissions.sendFormSubmission",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
