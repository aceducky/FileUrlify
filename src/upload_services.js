import axios from "axios";
import FileIO from "./components/FileIO";
import Sample from "./components/Sample";

const upload_services = {
  "file.io": {
    name: "file.io",
    url: "https://file.io",
    filesDeletedAfterDownload: true,
    maxFileSize: 2147483648,
    supportsMultipleFiles: false,
    privacyPolicy: "https://www.file.io/privacy/",
    tos: "https://www.file.io/tos/",
    supportsSettingExpiry: true,
    defaultExpiryTime: 14,
    maxExpiryTime: 365,
    maxExpiryTimeInfo: "365 days",
    component: FileIO,
    uploadFunction: (formData) => {
      
    },
  },
  sample: {
    name: "sample",
    component: Sample,
    uploadFunction: (files) => {
      console.log("Uploading to sample service", files);
    },
  },
};

export default upload_services;
