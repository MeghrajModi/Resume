import React from 'react';

// Define the Resume component
const Resume = () => {
  // Data for the resume
  const personalInfo = {
    name: 'Meghraj Modi',
    title: 'Full Stack Developer',
    email: 'meghrajmodi.com',
    phone: '9610404478',
    address: '123 Main St, City, State,Bengluru'
  };

  const experience = [
    {
      title: 'Software Engineer',
      company: 'ABC Company',
      duration: '2018 - Present',
      description: 'Implemented new features and maintained existing applications.'
    },
    {
      title: 'Front-end Developer',
      company: 'XYZ Agency',
      duration: '2016 - 2018',
      description: 'Developed user-friendly interfaces and optimized website performance.'
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Application',
      school: 'Bhupal Nobels University Udaipur (Raj.)',
      duration: '2019- 2022'
    }
  ];

  // Render the resume
  return (
    <div>
      <h1>{personalInfo.name}</h1>
      <h2>{personalInfo.title}</h2>

      <ul>
        <li>Email: {personalInfo.email}</li>
        <li>Phone: {personalInfo.phone}</li>
        <li>Address: {personalInfo.address}</li>
      </ul>

      <h3>Experience</h3>
      <ul>
        {experience.map((item, index) => (
          <li key={index}>
            <h4>{item.title}</h4>
            <p>{item.company} | {item.duration}</p>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>

      <h3>Education</h3>
      <ul>
        {education.map((item, index) => (
          <li key={index}>
            <h4>{item.degree}</h4>
            <p>{item.school} | {item.duration}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Resume;
