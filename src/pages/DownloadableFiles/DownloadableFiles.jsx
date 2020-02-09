import React , {Component} from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './DownloadFiles.css';

class DownloadableFiles extends Component {
    render() {
        return (
            <div>
                <Navbar />
                    <h1>DownloadableFiles</h1>
                        <div className='files'>
                            <div className='download_one'>
                                <a href='../images/SEI_Intro.docx' download>Click to download</a>
                            </div>
                            <div className='download_two'>
                                <a href='../images/SEI_Intro.docx' download>Click to download</a>
                            </div>
                        </div>
            </div>
        )
    }
};

export default DownloadableFiles;