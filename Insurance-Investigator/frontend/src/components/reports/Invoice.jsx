import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
} from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 35,
    fontSize: 11,
    fontFamily: 'Helvetica',
  },
  outerBorder: {
    border: '1pt solid black',
    padding: 15,
    height: '100%',
    width: '100%',
  },
  logo: {
    width: '100%',
    height: 70,
    marginBottom: 10,
  },
  innerBox: {
    border: '1pt solid black',
    padding: 10,
    width: '100%',
    marginTop: 15,
  },
  heading: {
    fontSize: 11,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    textDecoration: 'underline',
  },
  rightTextBlock: {
    alignItems: 'flex-end',
    marginBottom: 10,
  },
  leftTextBlock: {
    marginTop: 5,
  },
  section: {
    marginBottom: 2,
  },
  tableRow: {
    flexDirection: 'row',
    border: '1pt solid black',
    paddingVertical: 5,
    paddingHorizontal: 6,
  },
  tableHeader: {
    fontWeight: 'bold',
    borderBottom: '1pt solid black',
  },
  colDesc: {
    width: '70%',
  },
  colAmt: {
    width: '30%',
    textAlign: 'right',
  },
  bankTable: {
    marginTop: 20,
    width: '50%',
    border: '1pt solid black',
  },
  bankHeader: {
    fontWeight: 'bold',
    borderBottom: '1pt solid black',
    padding: 4,
    marginBottom: 4,
    textAlign: 'center',
  },
  bankRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 2,
    borderBottom: '1pt solid black',
    padding: 3,
  },
  signature: {
    marginTop: 40,
    textAlign: 'right',
    fontSize: 12,
  },
});

const logoURL = '/Letter Head logo and name.jpg';

const Invoice = ({ data }) => {
  const { insuranceCompany, refNumber, claimNo, insuredName, invoiceAmount = 0 } = data;

  const bankRows = [
    { label: 'Bank Name :', value: 'HDFC Bank' },
    { label: 'A/C No :', value: '50100135745899' },
    { label: 'IFSC :', value: 'HDFC0000472' },
    { label: 'PAN :', value: 'CFTPM6851H' },
  ];

  const descriptions = [
    { label: 'Professional fee', amount: invoiceAmount.toFixed(2) },
    { label: 'Convenience', amount: '0.00' },
    { label: 'Petition enquiry', amount: '0.00' },
    { label: 'Owner enquiry', amount: '0.00' },
    { label: 'Driver enquiry', amount: '0.00' },
    { label: 'Spot verification', amount: '0.00' },
    { label: 'Salary verification', amount: '0.00' },
    { label: 'TAT incentive', amount: '0.00' },
    { label: 'GST Applicable : No', amount: '0.00' },
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.outerBorder}>
          <Image src={logoURL} style={styles.logo} />

          <View style={styles.innerBox}>
            <Text style={styles.heading}>TAX INVOICE</Text>

            <View style={styles.rightTextBlock}>
              <Text>Date: {new Date().toLocaleDateString()}</Text>
              <Text>Invoice Number: {refNumber}</Text>
              <Text>Claim Number: {claimNo}</Text>
              <Text>Insured Name: {insuredName}</Text>
            </View>

            <View style={styles.leftTextBlock}>
              <Text>To:</Text>
              <Text>{insuranceCompany}</Text>
              <Text>Hyderabad</Text>
            </View>

            <View style={{ marginTop: 10 }}>
              <View style={[styles.tableRow, styles.tableHeader]}>
                <Text style={styles.colDesc}>Description</Text>
                <Text style={styles.colAmt}>Amount (Rs)</Text>
              </View>
              {descriptions.map((item, i) => (
                <View style={styles.tableRow} key={i}>
                  <Text style={styles.colDesc}>{item.label}</Text>
                  <Text style={styles.colAmt}>{item.amount}</Text>
                </View>
              ))}
              <View style={[styles.tableRow, { borderTop: '1pt solid black', fontWeight: 'bold' }]}>
                <Text style={styles.colDesc}>Total Amount</Text>
                <Text style={styles.colAmt}>{invoiceAmount.toFixed(2)}</Text>
              </View>
            </View>

            <View style={styles.bankTable}>
              <Text style={styles.bankHeader}>Bank Details</Text>
              {bankRows.map((row, index) => (
                <View
                  key={index}
                  style={[
                    styles.bankRow,
                    index === bankRows.length - 1 && { borderBottom: 0 },
                  ]}
                >
                  <Text>{row.label}</Text>
                  <Text>{row.value}</Text>
                </View>
              ))}
            </View>

            <Text style={styles.signature}>
              For MAHESH KOLA{'\n'}Authorized signatory's Name{'\n'}Signature & Stamp
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;
