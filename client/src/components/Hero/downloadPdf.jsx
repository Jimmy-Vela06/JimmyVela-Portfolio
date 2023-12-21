import React from 'react';

import resumepdf from '../../assets/jimmy-vela-resume.pdf';

const DownloadPDFButton = () => {
  const handleDownloadPDF = () => {
    const pdfFilePath = resumepdf;

    const a = document.createElement('a');
    a.href = pdfFilePath;
    a.download = 'downloaded_file.pdf';

    a.click();
  };

  return (
    <a className='resumeBtn' onClick={handleDownloadPDF}>
      Download PDF
    </a>
  );
};

export default DownloadPDFButton;
