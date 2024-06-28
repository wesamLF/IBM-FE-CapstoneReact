import React from 'react'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import GiveReviews from '../GiveReviews/GiveReviews';
import "./ReviewForm.css"
const ReviewForm = () => {

    return (
        <div style={{ margin: "100px" }}>
            <h2>Reviews</h2>
            <table style={{ borderCollapse: 'collapse', width: '70%' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid black' }}>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Serial Number</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Doctor Name</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Doctor speciality</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Provide Feedback</th>
                        <th style={{ padding: '8px', textAlign: 'left' }}>Review Given</th>

                    </tr>
                </thead>
                <tbody>

                    <tr style={{ borderBottom: '1px solid black' }}>
                        <td style={{ padding: '8px' }}>1</td>
                        <td style={{ padding: '8px' }}>Dr. John Doe</td>
                        <td style={{ padding: '8px' }}>Dentist</td>
                        <td style={{ padding: '8px' }}>
                            <Popup trigger={<button >Click here</button>} modal>
                                {(close) => (
                                    <div className="modal" style={{ padding: "30px" }}>
                                        <GiveReviews />
                                    </div>
                                )}
                            </Popup>
                        </td>

                    </tr>
                    <tr style={{ borderBottom: '1px solid black' }}>
                        <td style={{ padding: '8px' }}>2</td>
                        <td style={{ padding: '8px' }}>Dr. Tom</td>
                        <td style={{ padding: '8px' }}>Dentist</td>
                        <td style={{ padding: '8px' }}>
                            <Popup trigger={<button>Click here</button>} modal>
                                {(close) => (
                                    <div className="modal" style={{ padding: "30px" }}>
                                        <GiveReviews />
                                    </div>
                                )}
                            </Popup>
                        </td>

                    </tr>
                    <tr style={{ borderBottom: '1px solid black' }}>
                        <td style={{ padding: '8px' }}>3</td>
                        <td style={{ padding: '8px' }}>Dr. Mike smith</td>
                        <td style={{ padding: '8px' }}>Dentist</td>
                        <td style={{ padding: '8px' }}>
                            <Popup trigger={<button >Click here</button>} modal>
                                {(close) => (
                                    <div className="modal" style={{ padding: "30px" }}>
                                        <GiveReviews />
                                    </div>
                                )}
                            </Popup>
                        </td>

                    </tr>
                    <tr style={{ borderBottom: '1px solid black' }}>
                        <td style={{ padding: '8px' }}>4</td>
                        <td style={{ padding: '8px' }}>Dr. Jane smith</td>
                        <td style={{ padding: '8px' }}>Dentist</td>
                        <td style={{ padding: '8px' }}>
                            <Popup trigger={<button className='disable' disabled>Click here</button>} modal>
                                {(close) => (
                                    <div className="modal" style={{ padding: "30px" }}>
                                        <GiveReviews />
                                    </div>
                                )}
                            </Popup>
                        </td>
                        <td style={{ padding: '8px' }}>Thank you Doctor</td>

                    </tr>

                </tbody>
            </table>


        </div>
    )
}

export default ReviewForm