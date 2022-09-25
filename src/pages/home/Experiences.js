import SectionTitle from "components/SectionTitle";
import React from "react";
import experiences from "data/exp";
function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title={"Experiences"} />

      <div className="flex py-10 gap-10 justify-between sm:flex-col">
        <div className="flex flex-col gap-5 border-l-4 h-fit sm:border-l-0 sm:border-t-4 border-accent/10 sm:flex-row sm:overflow-x-scroll">
          {experiences.map((exp, idx) => (
            <div
              onClick={() => {
                setSelectedItemIndex(idx);
              }}
              className={`cursor-pointer pl-10 ${
                selectedItemIndex === idx
                  ? "bg-accent/10 border-l-4 sm:border-l-0 sm:border-t-4 border-accent -ml-[4px]"
                  : ""
              } pr-5 py-2`}
            >
              <h1
                className={`text-xl sm:text-center ${
                  selectedItemIndex === idx
                    ? "text-accent border-accent"
                    : "text-white"
                }`}
              >
                {exp.period}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <h1 className="text-secondary text-2xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className="text-accent text-2xl">
            {experiences[selectedItemIndex].company}
          </h1>
          <p className="text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Repellendus magni nulla quis ducimus officiis dignissimos,
            blanditiis suscipit animi vero enim. Ipsa tenetur, cupiditate quae
            facere numquam officia ipsum molestiae quo!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
