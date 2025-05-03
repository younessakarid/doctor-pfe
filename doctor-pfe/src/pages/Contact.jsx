import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsTelephoneForward } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { RxTimer } from "react-icons/rx";
import { WiStars } from "react-icons/wi";

function Contact() {
  return (
    <div className="w-full">

      {/* Header */}
      <div className="text-center py-16 px-4 bg-[#eff8ff]">
        <h1 className="text-[#1e84b5] text-4xl sm:text-5xl font-bold">
          Contactez-<span className="text-[#0e384c]">nous</span>
        </h1>

        <div className="flex justify-center gap-2 pt-4 text-sm sm:text-base">
          <h6><a href="/" className="text-[#0e384c]">Home</a></h6>
          <span className="text-[#1e84b5] font-semibold opacity-70"> / </span>
          <h6 className="text-[#0e384c]">Contact us</h6>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 px-4 py-12">

        {/* Google Map */}
        <iframe
          className="rounded-3xl filter brightness-90 hover:brightness-110 w-full max-w-[550px] h-64 sm:h-80 md:h-[500px] order-2 md:order-1"
          src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=59%20Avenue%20de%20la%20Bourdonnais%2075007%20%E2%80%93%20PARIS+(Dental%207%20Paris%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          title="Google Map"
        />

        {/* Contact Info */}
        <div className="w-full max-w-[550px] order-1 md:order-2">
          {/* Heading */}
          <div className="mb-6">
            <div className="flex items-center gap-2 pb-2">
              <WiStars className="text-xl text-[#1e84b5]" />
              <p className="text-xl text-[#1e84b5]">CONTACT NOW</p>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0e384c]">
              <span className="text-[#1e84b5]">Obtenez</span> Une Consultation<br className="hidden md:block" />
              Professionnelle Gratuite
            </h1>
          </div>

          {/* Contact Cards */}
          <div className="flex flex-wrap gap-4">
            {[
              {
                icon: <SlLocationPin className="text-2xl text-[#1e84b5]" />,
                title: "Visitez-nous sur",
                lines: ["59 Avenue de la Bourdonnais 75007 – PARIS"],
              },
              {
                icon: <BsTelephoneForward className="text-2xl text-[#1e84b5]" />,
                title: "Contactez-nous",
                lines: ["+33 (0)1 45 63 20 00"],
              },
              {
                icon: <RxTimer className="text-2xl text-[#1e84b5]" />,
                title: "Heures de travail",
                lines: ["lundi au vendredi de 9h00AM à 19h00PM"],
              },
              {
                icon: <MdOutlineMarkEmailUnread className="text-2xl text-[#1e84b5]" />,
                title: "Envoyez un email",
                lines: ["contact@dental7paris.com"],
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex-1 min-w-[260px] rounded-2xl shadow-md p-6 bg-white"
              >
                <div className="flex items-center gap-3 mb-3">
                  {item.icon}
                  <h3 className="text-lg font-semibold text-[#0e384c]">
                    {item.title}
                  </h3>
                </div>
                {item.lines.map((line, idx) => (
                  <p key={idx} className="text-blue-950 text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
