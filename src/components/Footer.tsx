// import React from "react";

// import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Import Lucide icons
// import { Link } from "react-router-dom";
// import Container  from "@/components/Container";
// import { MainRoutes } from "@/lib/Helpers";

// interface SocialLinkProps {
//   href: string;
//   icon: React.ReactNode;
//   hoverColor: string;
// }

// const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, hoverColor }) => {
//   return (
//     <a
//       href={href}
//       target="_blank"
//       rel="noopener noreferrer"
//       className={`hover:${hoverColor}`}
//     >
//       {icon}
//     </a>
//   );
// };

// interface FooterLinkProps {
//   to: string;
//   children: React.ReactNode;
// }

// const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
//   return (
//     <li>
//       <Link
//         to={to}
//         className="hover:underline text-gray-300 hover:text-gray-100"
//       >
//         {children}
//       </Link>
//     </li>
//   );
// };
// const Footer = () => {
//   return (
//     <div className="w-full bg-black text-gray-300 hover:text-gray-100 py-8">
//       <Container>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* First Column: Links */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               {MainRoutes.map((route) => (
//                 <FooterLink key={route.href} to={route.href}>
//                   {route.label}
//                 </FooterLink>
//               ))}
//             </ul>
//           </div>

//           {/* Second Column: About Us */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">About Us</h3>
//             <p>
//               We are committed to helping you unlock your full potential with
//               AI-powered tools. Our platform offers a wide range of resources to
//               improve your interview skills and chances of success.
//             </p>
//           </div>

//           {/* Third Column: Services */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Services</h3>
//             <ul>
//               <FooterLink to="/services/interview-prep">
//                 Interview Preparation
//               </FooterLink>
//               <FooterLink to="/services/career-coaching">
//                 Career Coaching
//               </FooterLink>
//               <FooterLink to="/services/resume-building">
//                 Resume Building
//               </FooterLink>
//             </ul>
//           </div>

//           {/* Fourth Column: Address and Social Media */}
//           <div>
//             <h3 className="font-bold text-lg mb-4">Contact Us</h3>
//             <p className="mb-4">Email: shivu.kp.333@gmail.com</p>
//             <div className="flex gap-4">
//               <SocialLink
//                 href="https://www.facebook.com/shivu.pujari.3386/"
//                 icon={<Facebook size={24} />}
//                 hoverColor="text-blue-500"
//               />
//               <SocialLink
//                 href="https://x.com/Shivu_SP33"
//                 icon={<Twitter size={24} />}
//                 hoverColor="text-blue-400"
//               />
//               <SocialLink
//                 href="https://www.instagram.com/shivu_sp_33/"
//                 icon={<Instagram size={24} />}
//                 hoverColor="text-pink-500"
//               />
//               <SocialLink
//                 href="https://www.linkedin.com/in/shivaraj-kp-9920bb255/"
//                 icon={<Linkedin size={24} />}
//                 hoverColor="text-blue-700"
//               />
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   )
// }

// export default Footer

import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "@/components/Container";
import { MainRoutes } from "@/lib/Helpers";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  className: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, className }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-300 transition duration-300 ${className}`}
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link
        to={to}
        className="hover:underline text-gray-300 hover:text-gray-100"
      >
        {children}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <div className="w-full bg-black text-gray-300 hover:text-gray-100 py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First Column: Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {MainRoutes.map((route) => (
                <FooterLink key={route.href} to={route.href}>
                  {route.label}
                </FooterLink>
              ))}
            </ul>
          </div>

          {/* Second Column: About Us */}
          <div>
            <h3 className="font-bold text-lg mb-4">About Us</h3>
            <p>
              We are committed to helping you unlock your full potential with
              AI-powered tools. Our platform offers a wide range of resources to
              improve your interview skills and chances of success.
            </p>
          </div>

          {/* Third Column: Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul>
              <FooterLink to="/">Interview Preparation</FooterLink>
              <FooterLink to="/">AI-Powered Interview Feedback</FooterLink>
              <FooterLink to="/">Automated Video Analysis</FooterLink>
            </ul>
          </div>

          {/* Fourth Column: Address and Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <a
              href="mailto:shivu.kp.333@gmail.com"
              className="flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
            >
              <Mail size={20} /> shivu.kp.333@gmail.com
            </a>
            <div className="flex gap-4 mt-4">
              <SocialLink
                href="https://www.facebook.com/shivu.pujari.3386/"
                icon={<Facebook size={24} />}
                className="hover:text-blue-500"
              />
              <SocialLink
                href="https://x.com/Shivu_SP33"
                icon={<Twitter size={24} />}
                className="hover:text-blue-400"
              />
              <SocialLink
                href="https://www.instagram.com/shivu_sp_33/"
                icon={<Instagram size={24} />}
                className="hover:text-pink-500"
              />
              <SocialLink
                href="https://www.linkedin.com/in/shivaraj-kp-9920bb255/"
                icon={<Linkedin size={24} />}
                className="hover:text-blue-700"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;