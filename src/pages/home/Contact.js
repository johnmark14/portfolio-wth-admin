// @ts-nocheck
import SectionTitle from "components/SectionTitle";
import React from "react";

function Contact() {
  const info = {
    name: "John Doe Dev",
    age: "27",
    gender: "Male",
    email: "johngabrentina@gmail.com",
    mobile: "+639569335623",
    country: "Philippines",
  };
  return (
    <div>
      <SectionTitle title={"Say Hello"} />
      <div className="flex justify-between flex-wrap">
        <div className="flex items-center">
          <pre className="text-accent sm:text-sm">
            {JSON.stringify(info, undefined, 2)}
          </pre>
        </div>
        <div className="w-1/3">
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_jtbfg2nb.json"  background="transparent"  speed="1"  loop autoplay></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
