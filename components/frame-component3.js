import Container from "./container";
import FAQItemOpen from "./f-a-q-item-open";
import FAQItem from "./f-a-q-item";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full ${className}`}
    >
      <div className="w-[1596px] flex flex-col items-center justify-start gap-20 max-w-full mq825:gap-10 mq450:gap-5">
        <Container />
        <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-20 max-w-full mq825:gap-10 mq450:gap-5">
          <div className="flex-1 flex flex-col items-start justify-start min-w-[493px] max-w-full mq825:min-w-full">
            <FAQItemOpen />
            <div className="self-stretch h-px relative border-red-200 border-t-[1px] border-solid box-border" />
            <FAQItem
              number="02"
              heading="How much does Adap2Watch cost?"
              propMinWidth="277px"
            />
            <div className="self-stretch h-px relative border-red-200 border-t-[1px] border-solid box-border" />
            <FAQItem
              number="03"
              heading="What content is available on Adap2Watch?"
              propMinWidth="339px"
            />
            <div className="self-stretch h-px relative border-red-200 border-t-[1px] border-solid box-border" />
            <FAQItem
              number="04"
              heading="How can I watch Adap2Watch?"
              propMinWidth="239px"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[493px] max-w-full mq825:min-w-full">
            <FAQItem
              number="05"
              heading="How do I sign up for Adap2Watch?"
              propMinWidth="265px"
            />
            <div className="self-stretch h-px relative border-red-200 border-t-[1px] border-solid box-border" />
            <FAQItem
              number="06"
              heading="What is the Adap2Watch free trial?"
              propMinWidth="274px"
            />
            <div className="self-stretch h-px relative border-red-200 border-t-[1px] border-solid box-border" />
            <FAQItem
              number="07"
              heading="How do I contact Adap2Watch customer support?"
              propMinWidth="356px"
            />
            <div className="self-stretch h-px relative border-red-200 border-t-[1px] border-solid box-border" />
            <FAQItem
              number="08"
              heading="What are the Adap2Watch payment methods?"
              propMinWidth="356px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
