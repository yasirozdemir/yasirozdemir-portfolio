const Contact = () => {
  const inputClassList = "bg-gray-200 px-4 py-2 rounded-md";
  return (
    <section id="contact" className="pb-20">
      <div className="custom-container">
        <h3 className="font-bold text-2xl sm:text-3xl mb-6 text-center">
          Contact Me!
        </h3>
        <form
          action=""
          className="flex flex-col gap-8 sm:w-2/3 mx-auto p-8 rounded-sm shadow-2xl text-lg"
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
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Your Message"
              className={inputClassList}
            />
          </div>
          <button
            type="submit"
            className={inputClassList + " sm:self-end w-40"}
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
