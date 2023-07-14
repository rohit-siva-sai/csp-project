import { storage } from "@/config/firebase";
import { getDownloadURL, listAll, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { v4 } from "uuid";
import AOS from "aos";

import "aos/dist/aos.css";

const Basara = () => {
  useEffect(() => {
    AOS.init();
  });
  const [fileUpload, setFileUpload] = useState(null);
  const [fileSize, setFileSize] = useState(0);
  const [loading, setLoading] = useState(false);

  const uploadFile = async () => {
    if (!fileUpload) {
      return;
    }
    const fileFolderRef = ref(storage, `basara/${fileUpload.name + v4()}`);
  

    uploadBytes(fileFolderRef, fileUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setFileList((prev) => [...prev, url]);
      });
    });
  };
  const fileref = ref(storage, "basara/");

  const [fileList, setFileList] = useState([]);
  useEffect(() => {
    getItems();
  }, []);
  const getItems = () => {
    setLoading(true);
    listAll(fileref).then((res) => {
      res.items.forEach((item) => {
        // console.log("item", item);

        getDownloadURL(item).then((url) => {
          setFileList((prev) => [...prev, url]);
          // setFileList( [...new Set(fileList)])
        });
        // change()
      });
    });
    setLoading(false);
  };

  return (
    <div>
      <div className="text-white flex justify-center py-12 text-lg  md:text-3xl font-semibold underline underline-offset-8 decoration-4 decoration-rose-600 ">
        Creating Awarness to Basara College Students
      </div>
      {!loading ? (
        <div className="grid grid-cols-1  md:grid-cols-3 px-4 md:px-12 gap-y-12 gap-x-6">
          {fileList.map((item, index) => {
            return (
              <>
                {index < 8 && (
                  <div className="border border-white p-4 rounded-xl">
                    <picture data-aos="fade-in" data-aos-duration="2000">
                      <img
                        src={item}
                        alt=""
                        className="rounded-tl-3xl rounded-br-3xl scale-100 hover:scale-105 h-72  cursor-pointer transition-transform duration-700 "
                      />
                    </picture>
                  </div>
                )}
              </>
            );
          })}
        </div>
      ) : (
        <div className="text-white text-3xl">Loading...</div>
      )}
    </div>
  );
};

export default Basara;
