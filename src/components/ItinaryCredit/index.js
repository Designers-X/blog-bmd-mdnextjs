import React from 'react';
import ItineraryImages from 'components/ItineraryPages/ItineraryImage';
import AccordionForm from 'components/ItinaryCredit/Accordion/AccordionForm';

function index({ href }) {
  return (
    <div>
      <ItineraryImages />
      <AccordionForm href={href} />
    </div>
  );
}

export default index;
