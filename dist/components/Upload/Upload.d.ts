import React from 'react';
type UploadProps = {
    value?: File | null;
    onChange?: (file: File | null | undefined) => void;
    accept?: string;
    className?: string;
    error?: string;
};
export declare const Upload: React.FC<UploadProps>;
export default Upload;
