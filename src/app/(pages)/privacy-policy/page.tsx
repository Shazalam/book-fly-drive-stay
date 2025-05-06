import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Privacy } from "./accordianArray";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy-Policy",
  description: "Privacy Policy",
};

const PrivacyPolicy = () => {
  return (
    <>
      <div className="px-2 bg-[url('/cancellation-bg-img.jpg')] bg-no-repeat bg-cover bg-center w-full h-[50vh] relative">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="flex flex-col absolute top-15 left-1/2 transform -translate-x-1/2 w-full text-center  text-white px-3 ">
        <span className="text-3xl ">Privacy & Policy
          </span>
          <span className="text-sm md:text-xl py-5 ">
            {`Book-Fly-Drive-Stay (Book-Fly-Drive-Stay LLC) and its affiliate companies (collectively, hereinafter, “Book-Fly-Drive-Stay,” "we," "us," or "our") honor your trust. With an attempt to maintain transparency regarding what information we collect from you to render you Services, and how we collect, use, and disclose the information, we present you this Privacy Policy. By submitting your Personal Information online or over the phone to our employees or affiliates, you agree to abide by the terms and conditions of this Privacy Policy.`}
          </span>
        </div>
      </div>
      <div className="container mx-auto px-6 md:px-20 py-5">
        {Privacy.map((item, index) => (
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

export default PrivacyPolicy;
