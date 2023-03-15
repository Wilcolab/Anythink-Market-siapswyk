import React, { useEffect, useState } from "react";

const CloudinaryUploadWidget = (props) => {
  const [myWidget, setMyWidget] = useState(null);

  useEffect(() => {
      const cloudName = "dxetzygg3";
      const uploadPreset = "s0itjclg";
      const myWidget = window.cloudinary.createUploadWidget(
        {
          cloudName: cloudName,
          uploadPreset: uploadPreset
        },
        (error, result) => {
          if (!error && result && result.event === "success") {
            console.log("Done! Here is the image info: ", result.info);
            props.onUpload(result.info.secure_url);
          }
        }
      );
      setMyWidget(myWidget);
  }, [props.onUpload]);


    return (
      <button className="cloudinary-button" onClick={(ev) => {
        ev.preventDefault();
        myWidget.open();
      }}>
        Upload
      </button>
    );
}

export default CloudinaryUploadWidget;
