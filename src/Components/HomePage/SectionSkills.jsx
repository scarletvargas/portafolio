import CardSkill from "./CardSkill";
import { Code } from "@/Icons/Code";
import { Tools } from "@/Icons/Tools";
import { Versions } from "@/Icons/Versions";
import { Rocket } from "@/Icons/Rocket";

function SectionSkills() {
  return (
    <section id="skills" className="flex flex-col items-center justify-center">
      <div className="w-[320px] md:w-[720px] xl:w-[1130px] flex flex-col items-start justify-center gap-2.5 py-[30px] md:pt-[50px] xl:pt-[70px]">
        <div className="flex flex-col gap-5 items-start justify-center">
          <p className="font-bold text-sm leading-[14px] text-primary dark:text-sky">
            ABOUT ME?
          </p>
          <h3 className="max-w-[350px] md:max-w-sm font-bold text-secondary dark:text-white text-[28px] leading-[38px] md:text-3xl/10 xl:text-[36px] xl:leading-[46px]">
            Frontend Developer Are My Skills
          </h3>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row flex-wrap gap-[30px] w-[320px] md:w-[720px] xl:w-[1130px] ">
        <CardSkill
          title="Responsive User Interfaces"
          description="Ability to transform designs into code, ensuring that interfaces are visually attractive and functional on various devices and screens."
          iconSvg={Code}
          width="md:w-[400px] xl:w-[570px]"
        />
        <CardSkill
          title="Adaptability and Continuous Learning"
          description="Willingness and ability to address challenges, solve problems creatively and confront new technologies."
          iconSvg={Rocket}
          width="md:w-[290px] xl:w-[400px]"
        />
        <CardSkill
          title="Version and Repository Management"
          description="Use version control systems, like Git, and manage repositories to track and collaborate on code effectively."
          iconSvg={Versions}
          width="md:w-[290px] xl:w-[400px]"
        />
        <CardSkill
          title="Frontend Frameworks and Libraries"
          description="Use of frontend frameworks and libraries, such as React, Next.js, Redux, Formik... to facilitate the creation of complex web applications."
          iconSvg={Tools}
          width="md:w-[400px] xl:w-[570px]"
        />
      </div>
    </section>
  );
}

export default SectionSkills;
