// import React, { useState } from 'react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formStatus, setFormStatus] = useState('');

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setFormStatus('');

//     // Simulate a form submission delay
//     setTimeout(() => {
//       console.log('Form Data:', formData); // Log form data to the console

//       setFormStatus('Success! Your message has been sent.');
//       setFormData({ name: '', email: '', message: '' }); // Reset form fields
//       setIsSubmitting(false); // Reset the submitting state after completion
//     }, 2000);
//   };

//   return (
//     <div
//       className="min-h-screen py-16 relative flex items-center justify-center"
//       style={{
//         backgroundImage: 'url("/public/assets/img/ai4.jpg")', // Replace with your image UxRL
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       {/* Blurred Background Overlay */}
//       <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm" />

//       {/* Form Container */}
//       <div className="relative z-10 w-full max-w-lg bg-white p-8 rounded-xl shadow-2xl">
//         <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Contact Us</h2>
//         <p className="text-center text-gray-600 mb-6">
//           We'd love to hear from you! Please fill out the form below, and we'll get back to you soon.
//         </p>

//         <form onSubmit={handleSubmit}>
//           <div className="space-y-4">
//             {/* Name Input */}
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Your Name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//                 required
//               />
//             </div>

//             {/* Email Input */}
//             <div>
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Your Email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 className="w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//                 required
//               />
//             </div>

//             {/* Message Input */}
//             <div>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 placeholder="Your Message"
//                 rows={6}
//                 className="w-full p-3 border border-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
//                 required
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="mt-6 text-center">
//               <button
//                 type="submit"
//                 className={`px-6 py-3 rounded-md shadow-md focus:outline-none focus:ring-2 transition-all ${
//                   isSubmitting
//                     ? 'bg-gray-400 cursor-not-allowed'
//                     : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600'
//                 }`}
//                 disabled={isSubmitting}
//               >
//                 {isSubmitting ? 'Submitting...' : 'Send Message'}
//               </button>
//             </div>
//           </div>
//         </form>

//         {/* Success Message */}
//         {formStatus && (
//           <div className={`mt-4 text-center ${formStatus.includes('Success') ? 'text-green-500' : 'text-red-500'}`}>
//             {formStatus}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Contact;
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus('');

    // Simulate a form submission delay
    setTimeout(() => {
      console.log('Form Data:', formData); // Log form data to the console

      setFormStatus('Success! Your message has been sent.');
      setFormData({ name: '', email: '', message: '' }); // Reset form fields
      setIsSubmitting(false); // Reset the submitting state after completion
    }, 2000);
  };

  return (
    <div
      className="min-h-screen py-16 relative flex items-center justify-center"
      style={{
        backgroundImage: 'url("/assets/img/ai4.jpg")', // Make sure this path is correct
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Blurred Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm" />

      {/* Glassmorphic Form Container */}
      <div className="relative z-10 w-full max-w-lg bg-white/10 p-8 rounded-xl shadow-2xl backdrop-blur-md border border-white/30">
        <h2 className="text-3xl font-semibold mb-6 text-center text-white">Contact Us</h2>
        <p className="text-center text-white/80 mb-6">
          We'd love to hear from you! Please fill out the form below, and we'll get back to you soon.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            {/* Name Input */}
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 text-black"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 text-black"
                required
              />
            </div>

            {/* Message Input */}
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={6}
                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white/80 text-black"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="mt-6 text-center">
              <button
                type="submit"
                className={`px-6 py-3 rounded-md shadow-md focus:outline-none focus:ring-2 transition-all ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600'
                }`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </button>
            </div>
          </div>
        </form>

        {/* Success Message */}
        {formStatus && (
          <div
            className={`mt-4 text-center ${
              formStatus.includes('Success') ? 'text-green-400' : 'text-red-500'
            }`}
          >
            {formStatus}
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
