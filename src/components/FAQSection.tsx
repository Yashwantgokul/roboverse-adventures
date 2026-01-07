import { useState } from "react";

const faqs = [
  {
    question: "Are robots friendly?",
    answer: "Absolutely! Robots are programmed to be helpful and kind. They're like having a super-smart friend who never gets tired of helping you!",
  },
  {
    question: "Can robots feel emotions?",
    answer: "Robots can recognize and respond to emotions, but they don't feel them the way we do. They're designed to understand when you're happy or sad and react in caring ways!",
  },
  {
    question: "Will robots take over the world?",
    answer: "No way! Robots are tools created by humans to help us. They follow rules we give them and are designed to work alongside us, not replace us. We're partners!",
  },
  {
    question: "How do robots learn new things?",
    answer: "Robots learn through programming and something called 'machine learning.' It's like teaching them by showing examples – the more they see, the better they get!",
  },
  {
    question: "Can I have a robot friend one day?",
    answer: "You probably will! Robot companions are becoming more common. In the future, many families might have helpful robot friends at home!",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 text-6xl opacity-20 animate-float">🤔</div>
      <div className="absolute bottom-10 left-10 text-5xl opacity-20 animate-float-slow">💭</div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-neon-orange/20 text-neon-orange font-medium text-sm mb-4">
            ❓ Questions & Answers
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground">
            Curious about robots? Here are answers to questions kids ask most!
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl border border-border/50 overflow-hidden bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none focus:ring-2 focus:ring-primary/20 rounded-2xl"
              >
                <span className="font-display font-semibold text-lg text-foreground">
                  {faq.question}
                </span>
                <span
                  className={`text-2xl transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="px-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
