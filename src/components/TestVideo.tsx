import React from "react";

const TestVideo = ({ embedId }: { embedId: string }) => {
  return (
    <div>
      <iframe
        width={896}
        height={504}
        src={`https://www.youtube-nocookie.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      />
    </div>
  );
};

export default TestVideo;
