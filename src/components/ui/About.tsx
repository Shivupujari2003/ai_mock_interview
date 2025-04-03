// import React from "react";
import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-800 via-blue-500 to-blue-800 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1 
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Our AI-Powered Mock Interview Platform
        </motion.h1>
        <p className="text-lg text-blue-300 mb-8">
          We provide a real-time interview experience with AI-driven voice analysis. Our platform helps you refine your responses, improve confidence, and excel in interviews.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <Card className="bg-blue-800 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3 text-white">Real-Time Video Interaction</h2>
            <p className="text-blue-300">Practice interviews in a live environment without any video recording.</p>
          </CardContent>
        </Card>

        <Card className="bg-blue-800 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3 text-white">AI-Powered Voice Analysis</h2>
            <p className="text-blue-300">Get feedback on your responses based on AI-driven voice analysis and insights.</p>
          </CardContent>
        </Card>

        <Card className="bg-blue-800 shadow-lg">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-3 text-white">Personalized Feedback</h2>
            <p className="text-blue-300">Improve with tailored suggestions to refine your interview skills.</p>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-12">
        <motion.button 
          onClick={() => navigate("/")}
          className="bg-[#132f6d] hover:bg-[#6b99ef] text-white px-6 py-3 rounded-md font-medium transition duration-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Get Started
        </motion.button>
      </div>
    </div>
  );
};

export default About;
