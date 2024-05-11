import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Img, Button, Heading, Text} from "../../components";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const isSubmitDisabled = name.trim() === "" && email.trim() === "";
  console.log("isdis", isSubmitDisabled);

  const validateEmail = (email) => {
    // Regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    if (!validateEmail(email)) {
      setEmailError("Enter a valid email address");
    } else {
      console.log("Form submitted successfully");
    }
  };

  return (
    <>
      <Helmet>
        <title>Register Now - Start Your Success Journey</title>
        <meta
          name="description"
          content="Begin your journey to success with our easy registration form. Start your success journey here and join the community of achievers."
        />
      </Helmet>

      {/* main form container section */}
      <div className="flex w-full flex-col bg-white-A700 pt-[31px] sm:pt-5">
        {/* form header section */}
        <div className="container-xs flex flex-col items-center px-5 md:p-5">
          {/* form header row section */}
          <div className="flex items-start justify-between gap-5 self-stretch">
            <Img
              src="images/img_frame_1261155216.svg"
              alt="imageframe"
              className="h-[47px] w-[10%]"
            />
            <Link to="/">
              <Button
                size="sm"
                variant="outline"
                shape="circle"
                className="w-[64px] !rounded-[32px]"
              >
                <Img src="images/img_close.svg" />
              </Button>
            </Link>
          </div>

          {/* form content section */}
          <div className="mt-[41px] flex w-[44%] flex-col items-center gap-[61px] md:w-full sm:gap-[30px]">
            {/* form title section */}
            <div className="flex flex-col items-center self-stretch">
              <Text
                size="4xl"
                as="p"
                className="!font-coveredbyyourgrace tracking-[-0.72px] !text-green-600"
              >
                Registration Form
              </Text>
              <Heading
                as="h1"
                className="relative mt-[-1px] w-full text-center leading-[120%] tracking-[-1.12px]"
              >
                Start your success Journey here!
              </Heading>
            </div>

            {/* form input section */}

            <div className="flex w-[71%] flex-col gap-[47px] md:w-full">
              <div className="flex flex-col gap-6">
                <input
                  shape="round"
                  type="text"
                  name="NameField"
                  placeholder={`Enter your name`}
                  className="border-black-900_05"
                  style={{
                    borderRadius: "50px",
                    padding: "30px",
                    backgroundColor: "#f3f3f3",
                    fontSize: "20px",
                  }}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  shape="round"
                  type="email"
                  name="EmailField"
                  placeholder={`Enter your email`}
                  className="border-black-900_05"
                  style={{
                    borderRadius: "50px",
                    padding: "30px",
                    backgroundColor: "#f3f3f3",
                    fontSize: "20px",
                  }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <div className="flex items-center gap-[7px]">
                    <Img
                      src="images/img_video_camera.svg"
                      alt="video camera icon"
                      className="h-[30px] w-[30px]"
                    />
                    <Text size="md" as="p" className="!text-red-A700">
                      {emailError}
                    </Text>
                  </div>
                )}
              </div>

              <Button
                shape="round"
                disabled={isSubmitDisabled}
                className={`w-full text-gray-100 font-semibold capitalize  ${
                  isSubmitDisabled ? "bg-gray-400" : "bg-gray-900"
                }`}
                style={{ borderRadius: "50px", padding: "40px" }}
                onClick={handleSubmit}
              >
                <Link
                  to={validateEmail(email) ? "/success" : ""}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Submit
                </Link>
              </Button>
            </div>
          </div>

          {/* form footer image section */}
        </div>
      </div>
    </>
  );
}
