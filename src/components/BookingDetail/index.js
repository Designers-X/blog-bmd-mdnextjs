import React from 'react';
import Styles from './Styles.module.scss';
import Data1 from '/json/product..json';

function Booking() {
  const handlePrint = () => {
    const printContent = document.getElementById('DivToPrint');
    const windowUrl = 'about:blank';
    const uniqueName = new Date();
    const windowName = `Print_${uniqueName.getTime()}`;
    const printWindow = window.open(windowUrl, windowName);

    if (printWindow) {
      const printDocument = printWindow.document;
      printDocument.write('<html><head><title>Print</title>');

      const styles = document.querySelectorAll('style, link[rel="stylesheet"]');
      styles.forEach((style) => {
        printDocument.write(style.outerHTML);
      });
      printDocument.write('</head><body>');
      printDocument.write(printContent.innerHTML);
      printDocument.write('</body></html>');
      printDocument.close();
      printWindow.print();
    } else {
      alert('Please allow popups for this website');
    }
  };

  // Array of details

  return (
    <div>
      <section>
        <div className={Styles.container}>
          <div id="DivToPrint" className={Styles.ConfirmedBook}>
            <div className={Styles.ConfirmedBookIn}>
              <div className={Styles.BookIn}>
                <h3>Great! Your Stay Is Confirmed</h3>
                <p>You will soon receive an email confirmation on test@gmail.com</p>
                <h4>Booking ID</h4>
                <p>
                  <span>DBYB4488</span>
                </p>
              </div>
              <div className={Styles.BookOut}>
                <div className={Styles.BookBtn}>
                  <button onClick={handlePrint}>Print</button>
                </div>
                <p>Booking by Test on Wed, 26 Jul 2023</p>
              </div>
            </div>

            <div className={Styles.CapriBoat}>
              <div className={Styles.CapriContent}>
                <h3>Travelling Capri By Boat</h3>
                <h6>Capri By Boat</h6>
                <p>Plot No 120, Ekta Merket ,Sector 42 , Florida</p>
                <p className={Styles.BookEnd}>Trip Direction </p>
              </div>
              <div className={Styles.CapriImg}>
                <div className={Styles.CapriControlImg}>
                  <img src="/package/CapriBoat.png" alt="CapriBoat" />
                </div>
              </div>
            </div>

            <div className={Styles.DetailHistory}>
              {Data1.DetailsArray.map((detail, index) => (
                <div key={index} className={Styles.DetailLine}>
                  <div className={Styles.DetailInfo}>
                    <p>{detail.label}</p>
                    <h6>{detail.value}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div></div>
        </div>
      </section>
    </div>
  );
}
export default Booking;
