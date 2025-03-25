"use client";
import ContactForm from "../components/contactform";

export default function Form() {
return(
     <div
            className="py-20
            container
            ml-[15px] w-[calc(100%-15px)] mr-0
            xl:ml-[280px] xl:w-[calc(100%-280px)]
            md:ml-[100px] md:w-[calc(100%-100px)]
            sm:mx-5 sm:w-[calc(100%-40px)]
            xs:mx-4 xs:w-[calc(100%-32px)]
            text-black"
          >
            <ContactForm />
          </div>
)
}
