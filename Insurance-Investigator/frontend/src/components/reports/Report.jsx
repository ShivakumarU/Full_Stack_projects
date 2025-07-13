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
    border: '1pt solid black'
  },
  outerBorder: {
    // border: '1pt solid black',
    padding: 15,
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
            {`${data.insuredVerified === "yes" ?      
            `${data.insuredType?.charAt(0).toUpperCase() + data.insuredType?.slice(1)} ${data.insuredName}, Occ: ${data.insuredOccupation} is having a vehicle with Reg.no: ${data.ivNumberInInsuredStatement}, using for his ${data.ivUse}. This vehicle met with an accident on ${data.accidentDateInInsuredStatement} at ${data.accidentTimeInInsuredStatement} while ${data.travellingPersonRelationInInsuredStatement} was travelling from ${data.travelFromInsuredStatement} to ${data.travelToInsuredStatement}, at ${data.accidentPlaceInInsuredStatement} ${data.accidentMannerInInsuredStatement}. At the time of accident, ${data.driverGender} is travelling ${
              data.totalPersonsInInsuredStatement === 1
                ? "alone"
                : data.totalPersonsInInsuredStatement === 2
                ? "along with another person"
                : `along with ${data.totalPersonsInInsuredStatement - 1} other persons`
            }. In this accident, IV damaged ${
            data.anyInjuryInInsured?.toLowerCase() === "injured"
              ? `and ${data.injuredNameRelationInInsured} is injured.`
              : data.anyInjuryInInsured?.toLowerCase() === "no one injured"
              ? "but no one injured."
              : ""
            } Regarding this accident, ${
              data.policeCaseInInsured === "yes"
                ? `Police filed F.I.R at ${data.policeStationNameInInsured}.`
                : data.policeCaseInInsured === "no"
                ? "No police case filed."
                : data.policeCaseInInsured === "Panchanama"
                ? `Police issued panchanama only at ${data.policeStationNameInInsured}. `
                : ""
            } At the time of accident, IV driven by ${data.ivDriverNameInInsured} and ${data.driverGender} is ${data.driverDLInInsured}. For the same, ${data.insuredGender} provided ${
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
            }.`
          :`${data.insuredType?.charAt(0).toUpperCase() + data.insuredType?.slice(1)} ${data.insuredName}, Occ: ${data.insuredOccupation} is having a vehicle with Reg.no: ${data.ivNumberInInsuredStatement}. Insured raised the claim against the vehicle damage. For the same, we tried to verify the genuineness of the claim but we are unable to do so due to ${data.insuredNotVerifiedReason}.`}`}
          </Text>
          { data.insuredType === "insured" &&
            <View style={{marginTop:15}} >
              <Text style={{fontWeight:'bold', textDecoration:"underline"}}>
                Driver Version : 
              </Text>
              <Text style={{marginTop:10,lineHeight:1.2, textIndent:40, textAlign:'justify'}}>
                {`${data.driverVerified==="no"? `During the course of investigation, we are unable to meet the driver due to ${data.driverNotVisitReason}`
                :`Driver - ${data.driverNameInDriver}, Occ: ${data.driverOccupation}, is driving insured vehicle with Reg.No: ${data.carNoInDriver} from ${data.travelFromInDriver} to ${data.travelToInDriver} ${data.ivTotalPersonsInDriver === 1
                ? "alone"
                : data.ivTotalPersonsInDriver === 2
                ? "along with another person"
                : `along with ${data.ivTotalPersonsInDriver - 1} other persons and met with accident at ${data.accidentPlaceInDriver} on ${data.accidentDateInDriver} at ${data.accidentTimeInDriver} due to ${data.accidentMannerInDriver}. As a result IV damaged, ${
                data.whoIsInjuredInDriver?.toLowerCase() === "injured"
                  ? `and ${data.injuredNameRelationInDriver} is injured.`
                  : data.whoIsInjuredInDriver?.toLowerCase() === "no one injured"
                  ? "but no one injured."
                  : ""
                } Regarding this accident, ${
              data.policeCaseInDriver === "yes"
                ? `Police filed F.I.R at ${data.policeStationNameInDriver}.`
                : data.policeCaseInDriver === "no"
                ? "No police case filed."
                : data.policeCaseInDriver === "Panchanama"
                ? `Police issued panchanama only at ${data.policeStationNameInDriver}.} `
                : ""
            } As per ${data.driverGenderInDriver==="he" ? "his" : data.driverGenderInDriver==="she"?"her":""} version, at the time of accident IV driven by ${data.carDrivenByInDriver === "himself" ? "himself" :  data.carDrivenByInDriver === "herself" ? "herself" : data.carDrivenByInDriver === "other-person" ? "other person" : " "} (${data.driverNameInDriverStatement}), ${
              data.driverGenderInDriver} is ${data.driverDLInDriver}. For the same ${data.driverGenderInDriver} provided ${data.driverGenderInDriver==="he" ? "his" : data.driverGenderInDriver==="she"?"her":""} statement ${
              data.statementGivenInDriver === "yes"
                ? "in written note"
                : data.statementGivenInDriver === "no"
                ? "orally only"
                : ""
            }.`}`}`}
              </Text>
            </View>
          }
          
          </View>

        </View>
      </Page>
    </Document>
  );
};

export default Report;
