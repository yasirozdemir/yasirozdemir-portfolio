import { H3 } from "../Reusables/H3";

const Contact = () => {
  const inputClassList = "bg-gray-200 px-4 py-2 rounded-md";
  return (
    <section id="contact" className="py-20">
      <div className="custom-container">
        <H3 innerText="Contact me!" customClasses="text-center" />
        <form
          action=""
          className="flex flex-col gap-8 sm:w-2/3 mx-auto p-8 rounded-sm shadow-2xl text-md sm:text-lg"
        >
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-bold">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className={inputClassList}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-bold">
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
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
      </div>
    </section>
  );
};

export default Contact;
