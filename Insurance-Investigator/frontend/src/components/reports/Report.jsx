import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image, 
  Font
} from '@react-pdf/renderer';
import BookmanOldStyle from '../../fonts/BOOKOS.TTF';
import BookmanOldStyleBold from '../../fonts/BOOKOSB.TTF';

Font.register({
  family: 'BookmanOldStyle',
    fonts: [
    { src: BookmanOldStyle }, 
    { src: BookmanOldStyleBold , fontWeight: 'bold' }, 
  ]
});

const logoURL = "http://localhost:5173/Letter Head logo and name.jpg"; 


const styles = StyleSheet.create({
  page: {
    padding: 28,
    fontSize: 12,
    fontFamily: 'BookmanOldStyle',
  },
  outerBorder: {
    border: '1pt solid black',
    padding: 15,
    height: '100%',
  },
  logo: {
    width: '100%',
    height: 70,
    marginBottom: 10,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tableContainer: {
    border: '1pt solid black',
    marginTop: 12.5,
    marginLeft: 1,
    marginRight: 22
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  tableColLabel: {
    width: '25%',
    padding: 8,
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
    borderRight: '1pt solid black',
  },
  tableColValue: {
    width: '75%',
    padding: 8,
  },
  rowDivider: {
    height: 1,
    backgroundColor: '#000',
    width: '100%',
  },
});

const Report = ({ data }) => {
  const tableData = [
    { label: "Claim No", value: data.claimNumber },
    { label: "Policy No", value: data.policyNumber },
    { label: "Policy Period", value: `${data.policyStartDate} to ${data.policyEndDate}` },
    { label: "Insured Name", value: data.insuredName },
    { label: "IV Number", value: data.ivNumber },
    { label: "Date of Loss", value: data.accidentDate },
    { label: "Loss Location", value: data.lossLocation },
    { label: "Remarks", value: data.causeOfLoss },
  ];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.outerBorder}>
          <Image src={logoURL} style={styles.logo} />
          <View style={styles.headerRow}>
            <Text>Ref No : {data.refNumber}</Text>
            <Text>Date : {new Date().toLocaleDateString()}</Text>
          </View>

          <View style={{ marginTop: 15, marginBottom: 1 }}>
            <Text>To,</Text>
            <Text>M/s {data.insuranceCompany}.</Text>
            <Text>Hyderabad, Telangana State.</Text>
          </View>

          <View style={styles.tableContainer}>
            {tableData.map((item, index) => (
              <React.Fragment key={index}>
                <View style={styles.tableRow}>
                  <View style={styles.tableColLabel}>
                    <Text>{index + 1}. {item.label}</Text>
                  </View>
                  <View style={styles.tableColValue}>
                    <Text>{item.value}</Text>
                  </View>
                </View>
                {index < tableData.length - 1 && <View style={styles.rowDivider} />}
              </React.Fragment>
            ))}
          </View>
          <Text style={{fontWeight:'bold', marginTop:15, textDecoration:'underline'}}>
            {data.insuredType && data.insuredType.charAt(0).toUpperCase() + data.insuredType.slice(1)} Version :
          </Text>
          <View>
          <Text style={{ marginTop: 9 , lineHeight:1.2, textIndent:40, textAlign:'justify'}}>
            {`       ${data.insuredType?.charAt(0).toUpperCase() + data.insuredType?.slice(1)} ${data.insuredName}, Occu: ${data.insuredOccupation} is having a vehicle with Reg.no: ${data.ivNumberInInsuredStatement} using for his ${data.ivUse}. This vehicle met with an accident on ${data.accidentDateInInsuredStatement} at ${data.accidentTimeInInsuredStatement} while ${data.travellingPersonRelationInInsuredStatement} was travelling from ${data.travelFromInsuredStatement} to ${data.travelToInsuredStatement}, ${data.driverGender} met with an accident in ${data.accidentPlaceInInsuredStatement} ${data.accidentMannerInInsuredStatement}. At the time of accident, ${data.driverGender} is travelling ${
              data.totalPersonsInInsuredStatement === 1
                ? "alone"
                : data.totalPersonsInInsuredStatement === 2
                ? "along with another person"
                : `along with ${data.totalPersonsInInsuredStatement - 1} other persons`
            }. In this accident, IV damaged ${
              data.anyInjuryInInsured === "injured"
                ? `and ${data.injuredNameRelationInInsured} is injured.`
                : "but no one injured."
            } Regarding this accident, ${
              data.policeCaseInInsured === "yes"
                ? `Police filed F.I.R at ${data.policeStationNameInInsured}.`
                : data.policeCaseInInsured === "no"
                ? "No police case filed."
                : data.policeCaseInInsured === "Panchanama"
                ? `Police issued panchanama only at ${data.policeStationNameInInsured}. `
                : ""
            } At the time of accident, IV driver by ${data.ivDriverNameInInsured} and ${data.driverGender} is ${data.driverDLInsured}. For the same, ${data.insuredGender} provided ${
              data.insuredGender === "he"
                ? "his"
                : data.insuredGender === "she"
                ? "her"
                : "their"
            } statement ${
              data.statementGivenInInsured === "yes"
                ? "in written note"
                : data.statementGivenInInsured === "no"
                ? "orally only"
                : ""
            }.`}
          </Text>


          </View>

        </View>
      </Page>
    </Document>
  );
};

export default Report;
