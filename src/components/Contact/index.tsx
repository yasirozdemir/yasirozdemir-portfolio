import { toast } from "react-toastify";
import { H3 } from "../Reusables/H3";
import emailjs from "@emailjs/browser";
import { alertOptions, textLinkClassList } from "../../data";

const Contact = () => {
  const { VITE_SERV_ID, VITE_TEMP_ID, VITE_USER_KEY } = import.meta.env;

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const user_name = (
        document.getElementById("user_name") as HTMLInputElement
      ).value;
      const user_email = (
        document.getElementById("user_email") as HTMLInputElement
      ).value;
      const message = (document.getElementById("message") as HTMLInputElement)
        .value;
      const mail = {
        user_name,
        user_email,
        message,
      };
      const result = await emailjs.send(
        VITE_SERV_ID,
        VITE_TEMP_ID,
        mail,
        VITE_USER_KEY
      );
      if (result.status === 200) {
        toast.success("Your message has been sent!", alertOptions);
        (document.querySelector("#contact form") as HTMLFormElement).reset();
      } else toast.error("Something went wrong :(", alertOptions);
    } catch (error) {
      toast.error(error as string, alertOptions);
    }
  };

  const cl =
    "bg-oxford_blue p-2 rounded-md placeholder:text-french_gray placeholder:opacity-60 font-semibold transition-all duration-[600ms]";
  const inputClassList = cl + " text-white hover:bg-[#34455D]";
  const btnClassList =
    cl + " text-french_gray hover:text-oxford_blue hover:bg-white";

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <H3 innerText="Contact me!" customClasses="text-center text-white" />
        <p className="text-md sm:text-lg text-center mb-10">
          You can either use the following contact form or message me on{" "}
          <a
            href="https://wa.me/message/6NCQR7CPFTAQL1"
            target="_blank"
            className={textLinkClassList}
          >
            Whatsapp
          </a>
          {"."}
        </p>
        <div className="grid grid-rows-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680865177/portfolio/Contact-us_imkk4f.png"
              alt="Illustration from freesvgillustration.com"
              className="max-w-full max-h-[400px]"
            />
          </div>
          <form
            onSubmit={sendEmail}
            className="flex flex-col gap-4 rounded-sm text-md sm:text-lg"
          >
            <input
              type="text"
              name="user_name"
              id="user_name"
              placeholder="Your Name"
              required
              className={inputClassList}
            />
            <input
              type="email"
              name="user_email"
              id="user_email"
              placeholder="Your Email"
              required
              className={inputClassList}
            />
            <textarea
              name="message"
              id="message"
              rows={8}
              placeholder="Your Message"
              required
              className={inputClassList}
            />
            <button type="submit" className={btnClassList}>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
