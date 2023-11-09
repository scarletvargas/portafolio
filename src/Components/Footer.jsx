import ButtonPrimary from "./ButtonPrimary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
library.add(faLinkedin);

function Footer() {
  return (
    <footer className="bg-[#040217] text-white flex flex-col items-center w-auto pt-[70px]">
      <div className="flex flex-col items-center justify-center pb-24 gap-7">
        <h3 className="text-center max-w-[300px] md:max-w-[500px] xl:max-w-[600px] font-bold text-[30px] md:text-[50px] leading-[38px] md:leading-[70px]">
          Ready to <span className="text-[#85DEFF]">Build Awesome</span>{" "}
          Project?
        </h3>
        <p className="max-w-[450px] text-center text-gray200 text-base/7">
          Memulai sebuah projek dengan riset dan memvalidasi ideas dengan
          usability-testing agar maksimal.
        </p>
        <ButtonPrimary text="Hire Me Now" />
        {/* <marquee></marquee> */}
      </div>
      <hr className="bg-[#353252] w-[330px] md:w-[700px] xl:w-[1130px] h-[1px] border-0" />
      <div className="flex flex-col xl:flex-row justify-center items-start pt-24 gap-12 w-[330px] md:w-[700px] xl:w-[1130px]">
        <div className="flex flex-col gap-7 xl:w-1/3">
          <h2 className="text-white font-bold text-xl/5">DevScar</h2>
          <p className="text-lg/7 max-w-[300px] md:max-w-[350px] xl:w-[300px]">
            Minimalist Framer template for any freelancer in the world.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-[60px] w-full">
          <div className="flex flex-col gap-5 w-1/2 xl:pl-56">
            <p className="text-lg leading-[18px] font-semibold">Useful Links</p>
            <Link
              className="text-base leading-[18px] text-gray200 hover:text-white"
              href="/portfolios"
            >
              Portfolios
            </Link>
            <Link
              className="text-base leading-[18px] text-gray200 hover:text-white"
              href="/#skills"
            >
              My Skills
            </Link>
            <Link
              className="text-base leading-[18px] text-gray200 hover:text-white"
              href="/contact"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-5 w-1/2">
            <p className="text-lg leading-[18px] font-semibold">Contact Us</p>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/scarletvargas-systems-engineer/"
              className="flex flex-row items-center gap-2.5"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                size="2xs"
                style={{ color: "#ffffff" }}
                className="w-6 h-6"
              />
              <p>Scarlet Vargas</p>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/scarletvargas-systems-engineer/"
              className="flex flex-row items-center gap-2.5"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                size="2xs"
                style={{ color: "#ffffff" }}
                className="w-6 h-6"
              />
              <p className="text-base leading-[18px] text-white">
                Scarlet Vargas
              </p>
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/scarletvargas-systems-engineer/"
              className="flex flex-row items-center gap-2.5"
            >
              <FontAwesomeIcon
                icon="fa-brands fa-linkedin"
                size="2xs"
                style={{ color: "#ffffff" }}
                className="w-6 h-6"
              />
              <p>Scarlet Vargas</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-12">
        <p className="text-gray200 max-w-[300px] sm:max-w-none text-center text-sm/6 font-normal">
          All Rights Reserved by Portoku by BuildWithAngga 2024
        </p>
      </div>
    </footer>
  );
}

export default Footer;
