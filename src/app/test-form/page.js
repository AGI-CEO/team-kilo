"use client";
import React, { useState } from "react";
import TestForm from "@/components/testform";
import Quote from "@/components/quote";

const page = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);
  const [botResponse, setBotResponse] = useState(null);

  const handleFormSubmit = () => {
    setFormSubmitted(true);
  };

  const handleBotResponse = (response) => {
    setBotResponse(response);
  };

  return isFormSubmitted ? (
    <Quote botResponse={botResponse} />
  ) : (
    <TestForm onSubmit={handleFormSubmit} onBotResponse={handleBotResponse} />
  );
};

export default page;
