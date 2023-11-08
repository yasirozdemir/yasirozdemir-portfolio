import { toast } from "react-toastify";
import { H3 } from "../Reusables/H3";
import emailjs from "@emailjs/browser";
import { alertOptions } from "../../data";

const Contact = () => {
  const inputClassList = "bg-gray-200 px-4 py-2 rounded-md";
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

  return (
    <section id="contact" className="py-20">
      <div className="container">
        <div className="grid grid-rows-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-center">
            <H3 innerText="Contact me!" customClasses="text-center" />
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680865177/portfolio/Contact-us_imkk4f.png"
              alt="Illustration from freesvgillustration.com"
              className="max max-w-full max-h-[400px] -mt-6"
            />
          </div>
          <form
            onSubmit={sendEmail}
            className="flex flex-col gap-8 rounded-sm text-md sm:text-lg"
          >
            <div className="flex flex-col">
              <label htmlFor="user_name" className="mb-2 font-bold">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Your Name"
                className={inputClassList}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="user_email" className="mb-2 font-bold">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Your Email"
                className={inputClassList}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-bold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={8}
                placeholder="Your Message"
                className={inputClassList}
              />
            </div>
            <button
              type="submit"
              className={inputClassList + " sm:self-end min-w-[10rem]"}
            >
              Send
            </button>
          </form>
          {/* <form
            onSubmit={sendEmail}
            className="flex flex-col gap-8 sm:w-2/3 mx-auto p-8 rounded-sm shadow-2xl text-md sm:text-lg z-10"
          >
            <div className="flex flex-col">
              <label htmlFor="user_name" className="mb-2 font-bold">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                id="user_name"
                placeholder="Your Name"
                className={inputClassList}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="user_email" className="mb-2 font-bold">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="user_email"
                placeholder="Your Email"
                className={inputClassList}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-bold">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={8}
                placeholder="Your Message"
                className={inputClassList}
              />
            </div>
            <button
              type="submit"
              className={inputClassList + " sm:self-end min-w-[10rem]"}
            >
              Send
            </button>
          </form> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
