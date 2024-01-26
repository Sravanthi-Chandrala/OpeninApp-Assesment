import React from 'react';
import SideBar from '../classComponents/side-Bar';
import Excel from '../Assets/Images/MS-Excel.png';
import '../Assets/styles/pages/Uploads.css';
import Profile from '../Assets/Images/profile.jpg'

class DashBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showUploadBox: false,
            uploading: false,
            showTable: false, 
        };
    }

    handleUploadClick = () => {
       
        this.setState({ uploading: true });

       
        setTimeout(() => {
            this.setState({ uploading: false, showUploadBox: true, showTable: true });
        }, 2000);
    };

    render() {
        return (
            <React.Fragment>
                <div className='dashboard-div'>
                    <SideBar />
                    <div className='upload-container'>
                        <div className='dashboard-header'>
                            <p className='dashboard-header-name'>Upload CSV</p>
                            <i className="fa-regular fa-bell"></i>
                            <img src={Profile} alt='profile' id='profile-photo'/>
                        </div>

                        {this.state.showUploadBox ? (
                            <div className='upload-box'>
                                <div className='excel-drop-box'>
                                    <img src={Excel} alt='Excel' />
                                    <p>Upload-template.xlsx</p>
                                    <span className='remove-link' onClick={() => this.setState({ showUploadBox: false, showTable: false })}>
                                        Remove
                                    </span>
                                </div>
                                <button type='upload' className='upload-button' disabled={this.state.uploading}>
                                    {this.state.uploading ? (
                                        <i className="fa-solid fa-spinner fa-spin"></i>
                                    ) : (
                                        <React.Fragment>
                                            <i class="fa-solid fa-circle-notch"></i>
                                        </React.Fragment>
                                    )}
                                </button>
                            </div>
                        ) : (
                            <div className='upload-box'>
                                <div className='excel-drop-box'>
                                    <img src={Excel} alt='Excel' />
                                    <p>Drop your excel sheet here or <a href='https://www.google.com/'>browse</a></p>
                                </div>
                                <button type='upload' className='upload-button' onClick={this.handleUploadClick}>
                                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                                    <span>Upload</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {this.state.uploading && (
                    <div className='up-container-box'>
                        <p>Loading...</p>
                    </div>
                )}

                {this.state.showTable && (
                    <div className='up-container-box'>
                        <p className='uploads-content'>Uploads</p>
                        <div className='table-box'>
                              
                        <table className='table-content'>
                                <tr className='table-head'>
                                    <th>Sl No.</th>
                                    <th>Links</th>
                                    <th>Prefix</th>
                                    <th>Add Tags</th>
                                    <th>Selected Tags</th>
                                </tr>
                                <tr className='table-data'>
                                    <td>01</td>
                                    <td><a href='https://www.google.com/'>www.google.com</a></td>
                                    <td>prefixsample</td>
                                    <td>
                                        <select>
                                            <option>Select Tags</option>
                                            <option>Tag 1</option>
                                            <option>Tag 2</option>
                                            <option>Tag 3</option>
                                            <option>Tag 4</option>
                                            <option>Tag 5</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="skills-list">
                                            <span>Tag 1 <i class="fa-solid fa-x"></i></span>
                                            <span>Tag 2 <i class="fa-solid fa-x"></i></span>
                                            <span>Tag 3 <i class="fa-solid fa-x"></i></span>
                                            <span>Tag 4 <i class="fa-solid fa-x"></i></span>
                                          
                                        </div>
                                    </td>
                                </tr>
                                <tr className='table-data'>
                                    <td>02</td>
                                    <td><a href='https://www.google.com/'>www.google.com</a></td>
                                    <td>prefixsample</td>
                                    <td>
                                        <select>
                                            <option>Select Tags</option>
                                            <option>Tag 1</option>
                                            <option>Tag 2</option>
                                            <option>Tag 3</option>
                                            <option>Tag 4</option>
                                            <option>Tag 5</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="skills-list">
                                            <span>Tag 1 <i class="fa-solid fa-x"></i></span>
                                            <span>Tag 2 <i class="fa-solid fa-x"></i></span>
                                        </div>
                                    </td>
                                </tr>
                                <tr className='table-data'>
                                    <td>03</td>
                                    <td><a href='https://www.google.com/'>www.google.com</a></td>
                                    <td>prefixsample</td>
                                    <td>
                                        <select>
                                            <option>Select Tags</option>
                                            <option>Tag 1</option>
                                            <option>Tag 2</option>
                                            <option>Tag 3</option>
                                            <option>Tag 4</option>
                                            <option>Tag 5</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="skills-list">
                                            <span>Tag 1 <i class="fa-solid fa-x"></i></span>
                                            <span>Tag 2 <i class="fa-solid fa-x"></i></span>
                                            <span>Tag 3 <i class="fa-solid fa-x"></i></span>
                                            <span>Tag 4 <i class="fa-solid fa-x"></i></span>
                                        </div>
                                    </td>
                                </tr>
                                 <tr className='table-data'>
                                    <td>04</td>
                                    <td><a href='https://www.google.com/'>www.google.com</a></td>
                                    <td>prefixsample</td>
                                    <td>
                                        <select>
                                            <option>Select Tags</option>
                                            <option>Tag 1</option>
                                            <option>Tag 2</option>
                                            <option>Tag 3</option>
                                            <option>Tag 4</option>
                                            <option>Tag 5</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="skills-list">
                                            <span>Tag 1 <i class="fa-solid fa-x"></i></span>
                                            
                                        </div>
                                    </td>
                                </tr>
                                <tr className='table-data'>
                                    <td>05</td>
                                    <td><a href='https://www.google.com/'>www.google.com</a></td>
                                    <td>prefixsample</td>
                                    <td>
                                        <select>
                                            <option>Select Tags</option>
                                            <option>Tag 1</option>
                                            <option>Tag 2</option>
                                            <option>Tag 3</option>
                                            <option>Tag 4</option>
                                            <option>Tag 5</option>
                                        </select>
                                    </td>
                                    <td>
                                        <div class="skills-list">
                                        <span>Tag 1 <i class="fa-solid fa-x"></i></span>
                                            <span>Tag 2 <i class="fa-solid fa-x"></i></span>
                                            <span>Tag 3 <i class="fa-solid fa-x"></i></span>
                                            
                                        </div>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

export default DashBoard;

