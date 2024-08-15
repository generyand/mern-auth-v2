import { mailtrapClient, sender } from "./mailtrap.config.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
} from "./emailTemplates.js";

export const sendVerificationEmail = async (email, verificationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify Your Email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationToken}",
        verificationToken
      ),
      category: "Email Verification",
    });
    //   .then(console.log)
    //   .catch(console.error);
    console.log("Response: ", response);
  } catch (error) {
    console.log(`Error: ${error}`);

    throw new Error(error);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      // subject: `Welcome ${name}`,
      template_uuid: "2214bd1a-f648-4073-8b3a-8c4da95ed022",
      template_variables: {
        company_info_name: "PGITS",
        name: name,
      },
    });

    console.log("Welcome Email sent successfuly", response);
  } catch (error) {
    console.error("Error sending welcome email", error);

    throw new Error("Error sending welcome email", error);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset Your Password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    });

    console.log("Password Reset Email sent successfuly", response);
  } catch (error) {
    console.log("Error: ", error);

    throw new Error(error);
  }
};

export const sendResetSuccessEmail = async (email) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });

    console.log("Password Reset Success Email sent successfuly", response);
  } catch (error) {
    console.log("Error in sendResetSuccessEmail, ", error);
    throw new Error(error);
  }
};
