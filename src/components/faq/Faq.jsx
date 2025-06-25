import { motion } from "framer-motion";
import faqImg from "../../assets/faq.jpg";
import { use } from "react";

const Faq = ({ allFaq }) => {
  const faq = use(allFaq);
  return (
    <div>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center font-primaryFont">
        Frequently Asked <span className="text-[#4B29CF]">Questions</span>
      </h2>
      <p className="text-gray-600 mb-14 text-xs sm:text-sm font-seconderyFont text-center">
        Quick answers to common questions about using our platform.
      </p>

      <motion.div
        className="grid lg:grid-cols-2 gap-x-6  gap-y-12 my-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { duration: 1.5 } },
        }}
      >
        <div className="order-2 lg:order-none">
          {faq.map((item) => (
            <motion.div
              key={item.id}
              className="collapse collapse-arrow bg-base-100 border border-base-300 mb-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: item.id * 0.2 }}
            >
              <input
                type="radio"
                name="my-accordion-2"
                defaultChecked={item.id === 1}
              />
              <div className="collapse-title font-semibold">
                {item.question}
              </div>
              <div className="collapse-content text-sm">{item.answer}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="order-1 lg:order-none"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={faqImg}
            alt="FAQ Image"
            className="w-9/12 sm:w-6/12 md:9/12 lg:w-11/12 xl:w-9/12 mx-auto"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Faq;
