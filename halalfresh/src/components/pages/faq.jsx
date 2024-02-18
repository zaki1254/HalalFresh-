import React, { useState } from 'react';
import './faq.css';

const FAQs = () => {
  const faqsData = [
    {
        question: 'What is Halal Fresh?',
        answer:
          'Halal Fresh is a specialized meal kit delivery service dedicated to providing authentic Somali cuisine recipes. We deliver pre-portioned ingredients and easy-to-follow recipes straight to your doorstep, ensuring a hassle-free cooking experience.',
      },
      {
        question: 'Are all recipes offered by Halal Fresh Halal-certified?',
        answer:
          'Yes, absolutely! At Halal Fresh, we take pride in offering only Halal-certified recipes. Each ingredient in our meal kits is carefully sourced and verified to ensure compliance with Islamic dietary laws.',
      },
      {
        question: 'How often do you update your recipe offerings?',
        answer:
          'We constantly refresh our recipe lineup to bring you a diverse selection of Somali dishes. Our team of culinary experts regularly introduces new and exciting recipes inspired by Somali culture and tradition.',
      },
      {
        question: 'Can I customize my meal plan with Halal Fresh?',
        answer:
          'Certainly! Halal Fresh offers flexibility when it comes to meal planning. You can choose from our weekly menu options and customize your meal plan according to your preferences and dietary requirements.',
      },
      {
        question: 'What sets Halal Fresh apart from other meal kit services?',
        answer:
          'Halal Fresh stands out for its exclusive focus on Somali cuisine. Our recipes are meticulously crafted to capture the rich flavors and aromas of Somali dishes, offering an authentic culinary experience unlike any other.',
      },
      {
        question: 'Are the ingredients in Halal Fresh meal kits locally sourced?',
        answer:
          'We prioritize sourcing high-quality, fresh ingredients from trusted suppliers, including locally sourced produce whenever possible. This ensures that our meal kits are not only delicious but also support local farmers and producers.',
      },
      {
        question: 'How can I subscribe to Halal Fresh?',
        answer:
          'Subscribing to Halal Fresh is easy! Simply visit our website, select your preferred meal plan, and follow the prompts to create an account. Once subscribed, you\'ll receive weekly deliveries of fresh ingredients and recipes right to your doorstep.',
      },
      {
        question: 'What if I have dietary restrictions or allergies?',
        answer:
          'At Halal Fresh, we understand the importance of catering to various dietary needs. We offer a range of options, including vegetarian and gluten-free recipes, to accommodate different preferences and allergies. Simply indicate your dietary restrictions when customizing your meal plan, and we\'ll ensure that your needs are met.',
      },
  ];

  // State to manage which FAQ is currently open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Function to toggle the visibility of FAQ answer
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <p>If you don't find an answer, chat with us!</p>
      {faqsData.map((faq, index) => (
        <div className="faq-box" key={index}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            <h2>{faq.question}</h2>
            {/* Icon for toggle, you can replace this with any icon */}
            <span>{openFAQ === index ? '-' : '+'}</span>
          </div>
          {/* Render answer within the question box if this FAQ is open */}
          <div className={`faq-answer ${openFAQ === index ? 'open' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
