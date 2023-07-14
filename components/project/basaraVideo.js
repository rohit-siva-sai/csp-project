import React from "react";

const BasaraVideo = () => {
  return (
    <div>
      <div className="text-white flex justify-center py-12 text-xl md:text-3xl font-semibold underline underline-offset-8 decoration-4 decoration-rose-600 ">
        Video Content
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 px-4 md:px-12">
        <div className="border border-white p-4 rounded-xl">
          <video
            src="https://firebasestorage.googleapis.com/v0/b/modify-text.appspot.com/o/video%2Fbasara-video1.mp4?alt=media&token=434f3739-0f32-4336-93dc-c12fe287b78b"
            className="rounded-tl-3xl rounded-br-3xl scale-100 hover:scale-105 h-full  cursor-pointer transition-transform duration-700 "
            
            controls
          ></video>
        </div>
      </div>
    </div>
  );
};

export default BasaraVideo;
