"use strict";
const nodemailer = require("nodemailer");
/**
 * A set of functions called "actions" for `form-submissions`
 */

module.exports = {
  sendFormSubmission: async (ctx, next) => {
    console.log(ctx.request.body);

    try {
      let htmlTable = '<table style="border-collapse: collapse; width: 100%;">';

      // add the table headers
      htmlTable += '<tr style="background-color: #f2f2f2;">';
      htmlTable += '<th style="border: 1px solid #ddd; padding: 8px;">Key</th>';
      htmlTable +=
        '<th style="border: 1px solid #ddd; padding: 8px;">Value</th>';
      htmlTable += "</tr>";

      // add the table rows with the object's keys and values
      for (const [key, value] of Object.entries(ctx.request.body)) {
        htmlTable += "<tr>";
        htmlTable += `<td style="border: 1px solid #ddd; padding: 8px;">${key}</td>`;
        htmlTable += `<td style="border: 1px solid #ddd; padding: 8px;">${value}</td>`;
        htmlTable += "</tr>";
      }

      htmlTable += "</table>";

      // create the email
      const transporter = nodemailer.createTransport({
        host: "smtppro.zoho.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: "New Website Submission",
        html: htmlTable,
      };

      // send the email
      const res = await transporter.sendMail(mailOptions);

      console.log("Message sent: %s", res);

      if (res.messageId) {
        ctx.body = "ok";
      } else {
        ctx.body = null;
      }
      // ctx.body = "ok";
    } catch (err) {
      ctx.body = err;
    }
  },
};
