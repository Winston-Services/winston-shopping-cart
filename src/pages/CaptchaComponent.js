import React from "react";
import ReCAPTCHA from "react-google-recaptcha";
import config from "../config";

export default function CaptchaComponent (props) {
  return (
    <ReCAPTCHA
      sitekey={config.RECAPTCA_KEY}
      onChange={props.onChange} />
  );
};
