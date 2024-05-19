"use client";
import React, { useState } from "react";
import TestForm from "@/components/testform";

const page = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [botResponse, setBotResponse] = useState(null);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  const handleBotResponse = (response) => {
    setBotResponse(response);
  };

  return isFormSubmitted ? null : <TestForm onSubmit={handleFormSubmit} />;
};

export default page;
