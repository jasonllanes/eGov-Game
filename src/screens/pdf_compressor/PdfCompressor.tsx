import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './PdfCompressor.css';

// Import logos
import eGovLogo from '../../assets/eGovPHLogoB.png';
import eLGULogo from '../../assets/eLGULogo.png';

interface FileData {
    id: string;
    file: File;
    originalSize: number;
    compressedSize: number;
    compressed: boolean;
    compressing: boolean;
}

const PdfCompressor = () => {
    const navigate = useNavigate();
    const [files, setFiles] = useState<FileData[]>([]);
    const [compressionLevel, setCompressionLevel] = useState<number>(50);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const goToHome = () => {
        navigate('/eGov-Game/main-page');
    };

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = event.target.files;
        if (selectedFiles) {
            addFiles(Array.from(selectedFiles));
        }
    };

    const addFiles = (newFiles: File[]) => {
        const validFiles = newFiles.filter(file => file.type === 'application/pdf');

        if (validFiles.length === 0) {
            alert('Please select valid PDF files');
            return;
        }

        const fileData: FileData[] = validFiles.map(file => ({
            id: `${file.name}-${Date.now()}-${Math.random()}`,
            file,
            originalSize: file.size,
            compressedSize: 0,
            compressed: false,
            compressing: false
        }));

        setFiles(prev => [...prev, ...fileData]);
    };

    const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();
    };

    const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
        event.preventDefault();
        event.stopPropagation();

        const droppedFiles = Array.from(event.dataTransfer.files);
        addFiles(droppedFiles);
    };

    const compressPdf = async (fileId: string) => {
        setFiles(prev => prev.map(f =>
            f.id === fileId ? { ...f, compressing: true } : f
        ));

        // Simulate compression process
        await new Promise(resolve => setTimeout(resolve, 2000));

        setFiles(prev => prev.map(f => {
            if (f.id === fileId) {
                const reductionFactor = compressionLevel / 100;
                const newSize = Math.floor(f.originalSize * (1 - reductionFactor * 0.7));
                return {
                    ...f,
                    compressedSize: newSize,
                    compressed: true,
                    compressing: false
                };
            }
            return f;
        }));
    };

    const compressAll = async () => {
        const uncompressedFiles = files.filter(f => !f.compressed && !f.compressing);

        for (const file of uncompressedFiles) {
            await compressPdf(file.id);
        }
    };

    const downloadCompressed = (fileData: FileData) => {
        const blob = new Blob([fileData.file], { type: 'application/pdf' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `compressed_${fileData.file.name}`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    const downloadAll = () => {
        const compressedFiles = files.filter(f => f.compressed);
        compressedFiles.forEach(file => downloadCompressed(file));
    };

    const removeFile = (fileId: string) => {
        setFiles(prev => prev.filter(f => f.id !== fileId));
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
    };

    const resetCompressor = () => {
        setFiles([]);
        setCompressionLevel(50);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const getTotalStats = () => {
        const compressedFiles = files.filter(f => f.compressed);
        const totalOriginal = compressedFiles.reduce((sum, f) => sum + f.originalSize, 0);
        const totalCompressed = compressedFiles.reduce((sum, f) => sum + f.compressedSize, 0);
        const totalSaved = totalOriginal - totalCompressed;
        const percentSaved = totalOriginal > 0 ? Math.round((totalSaved / totalOriginal) * 100) : 0;

        return { totalOriginal, totalCompressed, totalSaved, percentSaved, count: compressedFiles.length };
    };

    return (
        <div className="pdf-compressor-container">
            <button className="home-button" onClick={goToHome}>
                Home
            </button>

            <div className="pdf-header">
                <div className="logos-header">
                    <div className="logo-wrapper">
                        <img src={eGovLogo} alt="eGov Logo" className="header-logo" />
                    </div>
                    <div className="logo-wrapper">
                        <img src={eLGULogo} alt="eLGU Logo" className="header-logo" />
                    </div>
                </div>
                <h1 className="pdf-title">PDF Compressor</h1>
                <p className="pdf-subtitle">Reduce your PDF file size quickly and easily</p>
            </div>

            <div className="compressor-content">
                {files.length === 0 ? (
                    <div
                        className="upload-area"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        onClick={() => fileInputRef.current?.click()}
                    >
                        <div className="upload-icon">📄</div>
                        <h3>Drag & Drop your PDFs here</h3>
                        <p>or click to browse (multiple files supported)</p>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept=".pdf"
                            multiple
                            onChange={handleFileSelect}
                            style={{ display: 'none' }}
                        />
                    </div>
                ) : (
                    <div className="files-container">
                        <div className="compression-controls-global">
                            <label htmlFor="compression-level">
                                Compression Level for All: {compressionLevel}%
                            </label>
                            <input
                                id="compression-level"
                                type="range"
                                min="10"
                                max="90"
                                value={compressionLevel}
                                onChange={(e) => setCompressionLevel(Number(e.target.value))}
                            />
                            <div className="compression-labels">
                                <span>Low</span>
                                <span>Medium</span>
                                <span>High</span>
                            </div>
                        </div>

                        <div className="files-list">
                            {files.map((fileData) => (
                                <div key={fileData.id} className="file-item">
                                    <div className="file-info-row">
                                        <div className="file-icon">📄</div>
                                        <div className="file-details">
                                            <h4>{fileData.file.name}</h4>
                                            <p>Original: {formatFileSize(fileData.originalSize)}</p>
                                            {fileData.compressed && (
                                                <>
                                                    <p className="compressed-size">
                                                        Compressed: {formatFileSize(fileData.compressedSize)}
                                                    </p>
                                                    <p className="savings">
                                                        Saved: {formatFileSize(fileData.originalSize - fileData.compressedSize)}
                                                        ({Math.round(((fileData.originalSize - fileData.compressedSize) / fileData.originalSize) * 100)}%)
                                                    </p>
                                                </>
                                            )}
                                            {fileData.compressing && (
                                                <p className="compressing-text">Compressing...</p>
                                            )}
                                        </div>
                                        <div className="file-actions">
                                            {!fileData.compressed && !fileData.compressing && (
                                                <button
                                                    className="compress-single-btn"
                                                    onClick={() => compressPdf(fileData.id)}
                                                >
                                                    Compress
                                                </button>
                                            )}
                                            {fileData.compressed && (
                                                <button
                                                    className="download-single-btn"
                                                    onClick={() => downloadCompressed(fileData)}
                                                >
                                                    Download
                                                </button>
                                            )}
                                            <button
                                                className="remove-btn"
                                                onClick={() => removeFile(fileData.id)}
                                                disabled={fileData.compressing}
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    </div>
                                    {fileData.compressing && (
                                        <div className="progress-bar">
                                            <div className="progress-fill"></div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {files.some(f => f.compressed) && (
                            <div className="total-stats">
                                <h3>Total Statistics</h3>
                                <p>Files Compressed: {getTotalStats().count} / {files.length}</p>
                                <p>Total Original Size: {formatFileSize(getTotalStats().totalOriginal)}</p>
                                <p>Total Compressed Size: {formatFileSize(getTotalStats().totalCompressed)}</p>
                                <p className="total-savings">
                                    Total Saved: {formatFileSize(getTotalStats().totalSaved)} ({getTotalStats().percentSaved}%)
                                </p>
                            </div>
                        )}

                        <div className="action-buttons-multi">
                            <button
                                className="add-more-btn"
                                onClick={() => fileInputRef.current?.click()}
                            >
                                Add More Files
                            </button>
                            <button
                                className="compress-all-btn"
                                onClick={compressAll}
                                disabled={files.every(f => f.compressed || f.compressing)}
                            >
                                Compress All
                            </button>
                            <button
                                className="download-all-btn"
                                onClick={downloadAll}
                                disabled={!files.some(f => f.compressed)}
                            >
                                Download All
                            </button>
                            <button
                                className="clear-all-btn"
                                onClick={resetCompressor}
                            >
                                Clear All
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className="info-section">
                <h3>How it works:</h3>
                <ol>
                    <li>Upload or drag & drop one or more PDF files</li>
                    <li>Choose your desired compression level</li>
                    <li>Click "Compress All" or compress files individually</li>
                    <li>Download your compressed PDF files</li>
                </ol>
            </div>
        </div>
    );
};

export default PdfCompressor;
