import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "@styles/ImageUpload.module.css";

const ImageUpload = ({ onFileUploaded }) => {
  const [selectedFileUrl, setSelectedFileUrl] = useState("");
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const fileUrl = URL.createObjectURL(file);
      setSelectedFileUrl(fileUrl);
      onFileUploaded(file);
    },
    [onFileUploaded]
  );
  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className={styles.dropzone} {...getRootProps()}>
      <input {...getInputProps()} accept="image/*" />
      {selectedFileUrl ? (
        <img src={selectedFileUrl} alt="Doggo's Image" />
      ) : (
        <p>+ Add image</p>
      )}
    </div>
  );
};

export default ImageUpload;
