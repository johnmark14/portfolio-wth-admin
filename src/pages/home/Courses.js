import SectionTitle from "components/SectionTitle";
import React from "react";
import { courses } from "data/courses";
function Courses() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  return (
    <div>
      <SectionTitle title={"Courses"} />
      <div className="flex py-10 gap-10 justify-between sm:flex-col">
        <div className="flex flex-col gap-5 border-l-4 h-fit sm:border-l-0 sm:border-t-4 border-accent/10 sm:flex-row sm:overflow-x-scroll">
          {courses.map((course, idx) => (
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
                {course.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex flex-row-reverse justify-start sm:flex-wrap gap-10">
          <div className="w-1/3 sm:w-full">
            <img src={courses[selectedItemIndex].image} alt="" />
          </div>
          <div className="flex flex-col gap-5 w-1/2 sm:w-full">
            <h1 className="text-secondary text-2xl">
              {courses[selectedItemIndex].title}
            </h1>
            <h1 className="text-accent text-2xl">
              {courses[selectedItemIndex].company}
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
    </div>
  );
}

export default Courses;
