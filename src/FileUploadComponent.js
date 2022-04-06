import React, { useState } from "react";
import axios from 'axios';

const FileUploadComponent = () => {

    const [selectedFile, setSelectedFile] = useState("");

    // On file select
    let onFileChange = event => {
        setSelectedFile(event.target.files[0]);
    };

    // File upload process
    let onFileUpload = () => {
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "myFile",
            selectedFile,
            selectedFile.name
        );

        axios.post("api/upload-image", formData)
            .then((response) => {
                // Success
                console.log("File uploaded!");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    let fileDetails = () => {
        if (selectedFile) {
            return (
                <div>
                    <h2>File Details:</h2>
                    <p>File Name: {selectedFile.name}</p>
                    <p>File Type: {selectedFile.type}</p>
                    <p>File Size: {selectedFile.size}</p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    return (
        <>
            <div>
                <h1>
                    Technostuf.com
                </h1>
                <h3>
                    File Upload using ReactJS
                </h3>
                <div>
                    <input type="file" onChange={onFileChange} />
                    <button onClick={onFileUpload}>
                        Upload File
                    </button>
                </div>
                {fileDetails()}
            </div>
        </>
    );
}

export default FileUploadComponent;