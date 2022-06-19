import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Porque Huawei Cloud?" text="Las diferentes arquitecturas y servicios Cloud que ofrece Huawei son tecnologías líderes en inteligencia artificial en la nube, con la mejor protección de datos dando seguridad y confiabilidad a cada uno de nuestros clientes mediante un ecosistema abierto que fortalece la sinergia entre los dispositivos y la nube." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="ModelArts" />
      <Feature title="Knowledgebase" text="Huawei Cloud Academy" />
      <Feature title="Education" text="ModelArts, IdeaHub" />
    </div>
  </div>
);

export default WhatGPT3;
