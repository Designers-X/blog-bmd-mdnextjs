import React from 'react';
import ItineraryImages from '../ItineraryPages/ItineraryImage';
import AccordionForm from './Accordion/AccordionForm';

function index({ href }) {
  return (
    <div>
      <ItineraryImages />
      <AccordionForm href={href} />
    </div>
  );
}

export default index;
