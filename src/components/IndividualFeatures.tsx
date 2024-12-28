import React from 'react';
import { motion } from 'framer-motion';
import { WEB_IMAGE } from '../data/index.js';


      

const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-serif font-bold text-amber-600 mb-4">{title}</h2>
);

const MotionParagraph = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="text-xl text-gray-800 px-4 md:px-20 mb-8"
  >
    {children}
  </motion.div>
);

const MotionImage = ({ src, alt }) => (
  <motion.img
    src={src}
    alt={alt}
    className="w-full max-w-md mx-auto mt-4 my-8"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  />
);

const VastuSection = ({ section }) => (
  <div className="my-4 text-center">
    {section.content.map((item, index) => (
      <React.Fragment key={index}>
        {item.title && <SectionTitle title={item.title} />}
        {item.paragraph && <MotionParagraph>{item.paragraph}</MotionParagraph>}
        {item.image && (
          <MotionImage
            src={WEB_IMAGE[item.image.src]}
            alt={item.image.alt}
          />
        )}
      </React.Fragment>
    ))}
  </div>
);

const IndividualFeatures = ({vastContent}) => (
  <div className="flex flex-col justify-center items-center py-12 bg-gray-100">
    {Object.values(vastContent).map((section, index) => (
      <React.Fragment key={index}>
        <SectionTitle title={section.title} />
        <VastuSection section={section} />
      </React.Fragment>
    ))}
  </div>
);

export default IndividualFeatures;
