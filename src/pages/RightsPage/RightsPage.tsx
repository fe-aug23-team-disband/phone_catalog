import styles from "./RightsPage.module.scss";

const rights = [
  {
    "title": "Confidentiality and Data Processing",
    "content": "We are committed to ensuring the confidentiality and security of your personal data. Your privacy is of utmost importance to us, and we employ robust measures to protect your information."
  },
  {
    "title": "Terms of Service",
    "content": "By accessing or using our services, you agree to abide by our terms and conditions. These terms outline the rules and guidelines for using our website and services."
  },
  {
    "title": "Ownership Rights and Copyright",
    "content": "All content, trademarks, designs, and intellectual property displayed on this website belong to our store unless stated otherwise. Unauthorized use or reproduction of any content is strictly prohibited."
  },
  {
    "title": "Security Measures",
    "content": "We employ stringent security measures to safeguard your data and provide a secure browsing and shopping environment. Your trust and safety are paramount to us."
  },
  {
    "title": "Contact Us",
    "content": "For any inquiries, concerns, or complaints regarding your rights and their enforcement, please feel free to contact us. Your feedback is valuable in helping us serve you better."
  }
];

export const RightsPage = () => {
  return (
    <div className={styles.rights}>
      <h1 className={styles.rights__title}>
        User Rights
      </h1>
      {rights.slice(1).map(({ title, content }) => (
        <div key={title} className={styles.rights__content}>
          <h2 className={styles.rights__subtitle}>
            {title}
          </h2>
          <p className={styles.rights__description}>
            {content}
          </p>
        </div>
      ))}
    </div>
  );
};
