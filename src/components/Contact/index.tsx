// import { useRef } from "react";
import "../../styles/contact.css";

const Contact = () => {
  //   const alertOptions = {
  //     position: "top-center",
  //     autoClose: 3000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: true,
  //     progress: undefined,
  //     theme: "light",
  //   };

  //   const { REACT_APP_SERV_ID, REACT_APP_TEMP_ID, REACT_APP_USER_KEY } =
  //     process.env;
  //   const form = useRef();
  //   const sendEmail = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const user_name = document.getElementsByName("user_name")[0].value;
  //       const user_email = document.getElementsByName("user_email")[0].value;
  //       const message = document.getElementsByName("message")[0].value;
  //       const mail = {
  //         user_name,
  //         user_email,
  //         message,
  //       };
  //       const result = await emailjs.send(
  //         REACT_APP_SERV_ID,
  //         REACT_APP_TEMP_ID,
  //         mail,
  //         REACT_APP_USER_KEY
  //       );
  //       if (result.status === 200) {
  //         toast.success("Your message has been sent!", alertOptions);
  //         document.querySelector("#contact form").reset();
  //       } else toast.error("Something went wrong :(", alertOptions);
  //     } catch (error) {
  //       toast.error(error, alertOptions);
  //     }
  //   };

  return (
    <section id="contact" className="bg-primary py-10">
      <div className="custom-container flex flex-col lg:flex-row mx-auto ">
        <div className="lg:mr-8">
          <h3 className="text-3xl text-center font-bold">Contact Me!</h3>
          <div className="img-wrapper">
            <img
              src="https://res.cloudinary.com/yasirdev/image/upload/v1680865177/portfolio/Contact-us_imkk4f.png"
              alt="Illustration from freesvgillustration.com"
              style={{ maxWidth: "100%", maxHeight: "400px" }}
            />
          </div>
        </div>

        <form
          //   ref={form} onSubmit={sendEmail}
          className="flex flex-col gap-y-4 grow"
        >
          <input type="text" name="user_name" placeholder="Name" required />
          <input type="email" name="user_email" placeholder="Email" required />
          <textarea
            rows={8}
            name="message"
            placeholder="Your message"
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
