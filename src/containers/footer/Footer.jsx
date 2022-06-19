import React from 'react';
import huawei from '../../assets/huawei.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Everything as a Service / Todo como Servicio</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request Early Access</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={huawei} alt="gpt3_logo" />
        <p>Plaza carso Huawei, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Overons</p>
        <p>Social Media</p>
        <p>Counters</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Plaza Carso Huawei Cloud</p>
        <p>5522951801</p>
        <p>edwin.perez.aguilar@h-partners</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Huawei Cloud. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
