import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Cloud Container Engine',
    text: 'Cloud Container Engine (CCE) is a fully managed Kubernetes service for you to deploy, manage, and scale containerized applications. CCE supports Kubernetes ecosystem and tooling, allowing you to easily set up a container runtime environment in the cloud.',
  },
  {
    title: 'Elastic Cloud Server',
    text: 'Elastic Cloud Server (ECS) provides secure, scalable, on-demand computing resources, enabling you to flexibly deploy applications and workloads.',
  },
  {
    title: 'Application Operatons Management',
    text: 'Application Operations Management (AOM) is a one-stop cloud operations management platform that helps you with problem management, monitoring, security, and performance. ',
  },
  {
    title: 'ServiceStage',
    text: 'ServiceStage is an application management and O&M platform that lets you develop, build, roll out, monitor, and maintain applications all in one place.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request 200$ coupons in our Cloud</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
