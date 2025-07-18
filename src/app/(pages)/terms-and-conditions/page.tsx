import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TermsConditions } from "./termsAndCondotions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms & Conditions",
};

const TermsAndConditions = () => {
  return (
    <>
      <div className="px-2 bg-[url('/cancellation-bg-img.jpg')] bg-no-repeat bg-cover bg-center w-full h-[50vh] relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="flex flex-col absolute top-15 left-1/2 transform -translate-x-1/2 w-full text-center  text-white px-3 ">
          <span className="text-3xl ">Terms & Conditions</span>
          <span className="text-sm md:text-xl py-5">
            {`Welcome to the Book-Fly-Drive-Stay ("Book-Fly-Drive-Stay", "we", "our", "us") website (collectively, the "Site"). This website is governed and managed by Book-Fly-Drive-Stay Inc. based in New Jersey. By accessing or using the Site in any manner, you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to all of these Terms, do not use the Site.`}
          </span>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-20 py-5">
        {TermsConditions.map((item, index) => (
          <Accordion
            key={index}
            type="single"
            collapsible
            className="w-full mb-4 last:mb-0"
          >
            <AccordionItem
              value={`item-${index}`}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100"
            >
              <AccordionTrigger className="flex items-center justify-between w-full p-5 text-left hover:no-underline group">
                <span className="font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                  {item.title}
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-5 pt-0 text-gray-700 transition-all duration-300">
                <div className="prose max-w-none bg-white/70 backdrop-blur-sm p-4 rounded-lg mt-2 border border-blue-100">
                  <div dangerouslySetInnerHTML={{ __html: item.content }} />
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </>
  );
};

export default TermsAndConditions;
