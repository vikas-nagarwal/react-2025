import React from "react";

const Privacy = () => {
  return (
    <div className="container py-5">
      {/* applay this type */}
      {/* <style>{`
        .animation {
          color: red;
          font-size: 20px;
          font-weight: bold;
        }
      `}</style> */}
      <h2 className="mb-4 text-center">Privacy_polocy</h2>
      <p>
        Welcome to <strong>Coderssphere</strong>. By accessing or using our
        services, you agree to follow the terms and conditions listed here.
        Please read them carefully before using our website.
      </p>

      <h4 className="mt-4 animation">1. Acceptance of Terms</h4>
      <p>
        By using this website, you agree to be bound by these terms and all
        applicable laws and regulations. If you do not agree, please stop using
        the site.
      </p>

      <h4 className="mt-4 animation">2. Use of Content</h4>
      <p>
        All content on this website is for informational purposes only. You may
        not copy, distribute, or use it without prior permission.
      </p>

      <h4 className="mt-4 animation">3. Limitation of Liability</h4>
      <p>
        We are not responsible for any direct, indirect, or incidental damages
        resulting from the use of our services or content.
      </p>

      <h4 className="mt-4 animation">4. Changes to Terms</h4>
      <p>
        Coderssphere reserves the right to update or modify these Terms &
        Conditions at any time without prior notice. Continued use of the site
        means you accept the new changes.
      </p>

      <p className="mt-4 ">
        If you have any questions about these Terms & Conditions, feel free to
        contact us.
      </p>
    </div>
  );
};

export default Privacy;
