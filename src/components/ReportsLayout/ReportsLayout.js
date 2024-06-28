import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import GiveReviews from '../GiveReviews/GiveReviews';
import "./ReportsLayout.css"
const ReportsLayout = () => {
    const handleDownload = () => {
        const url = '/report.pdf'; // Replace with your PDF file URL or local path
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = 'report.pdf'; // Specify the file name
        anchor.click();
      };
    return (
        <div style={{ margin: "100px" }}>
            <h2>Reviews</h2>
            <table style={{ borderCollapse: 'collapse', width: '70%' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid black' }}>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Serial Number</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Doctor Name</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Doctor speciality</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>View Report</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Download report</th>

                    </tr>
                </thead>
                <tbody>

                    <tr style={{ borderBottom: '1px solid black' }}>
                        <td style={{ padding: '8px' }}>1</td>
                        <td style={{ padding: '8px' }}>Dr. John Doe</td>
                        <td style={{ padding: '8px' }}>Dentist</td>
                        <td style={{ padding: '8px' }}>
                            <Popup trigger={<button>View</button>} modal>
                                {(close) => (
                                    <div className="modal" style={{ padding: "30px" }}>
                                        <GiveReviews />
                                    </div>
                                )}
                            </Popup>
                        </td>
                        <td style={{ padding: '8px' }}><button onClick={handleDownload}>Download</button></td>


                    </tr>
                    <tr style={{ borderBottom: '1px solid black' }}>
                        <td style={{ padding: '8px' }}>2</td>
                        <td style={{ padding: '8px' }}>Dr. Tom</td>
                        <td style={{ padding: '8px' }}>Dentist</td>
                        <td style={{ padding: '8px' }}>
                            <Popup trigger={<button>View</button>} modal>
                                {(close) => (
                                    <div className="modal" style={{ padding: "30px" }}>
                                        <GiveReviews />
                                    </div>
                                )}
                            </Popup>
                        </td>
                        <td style={{ padding: '8px' }}><button onClick={handleDownload}>Download</button></td>

                    </tr>
                   

                </tbody>
            </table>


        </div>
    )
}

export default ReportsLayout