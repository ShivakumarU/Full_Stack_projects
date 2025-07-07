import { useState } from 'react';
import NavBar from '../components/NavBar';
import { PDFViewer } from '@react-pdf/renderer';
import Invoice from '../components/reports/Invoice';

const Home = () => {
  const [formData, setFormData] = useState({
    insuranceCompany: 'Chola MS General Insurance Co Ltd',
    refNumber: 'CHO17MY25',
    claimNo: '3362/2500023251/OD',
    insuredName: 'KUMMARI ANJANEYULU',
    invoiceAmount: 1000,
  });

  return (
    <div>
      <NavBar />
      <div style={{ height: '100vh' }}>
        <PDFViewer width="100%" height="100%">
          <Invoice data={formData} />
        </PDFViewer>
      </div>
    </div>
  );
};

export default Home;
