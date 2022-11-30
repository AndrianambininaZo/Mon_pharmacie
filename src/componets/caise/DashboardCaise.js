import React from 'react';
import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    PDFViewer,
  } from "@react-pdf/renderer";
const DashboardCaise = () => {
    const styles = StyleSheet.create({
        page: {
            
        },
        section: {
          margin: 10,
          padding: 10,
        },
        viewer: {
          width: window.innerWidth, //the pdf viewer will take up all of the width and height
          height: window.innerHeight,
        },
      });
    
    return (
        <div className='caise' >
        
        <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
          <table className='table table-bordered'>
            <thead>
                <tr><th><Text>salama</Text></th></tr>
            </thead>
            <tbody>
                <tr><td><Text>salamaeh</Text></td></tr>
            </tbody>
          </table>
          </View>
          <View style={styles.section}>
            <Text>World</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>         
        </div>
    );
};

export default DashboardCaise;