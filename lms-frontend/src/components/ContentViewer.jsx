function ContentViewer({ content }) {
    if (!content) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">Select content to view</p>
        </div>
      );
    }
  
    if (content.contentType === 'video') {
      return (
        <div className="h-full flex flex-col">
          <div className="aspect-video bg-black">
            <iframe
              src={content.contentUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">{content.contentTitle}</h2>
            <p className="mt-2 text-gray-600">{content.contentTitle}</p>
          </div>
        </div>
      );
    }
  
    if (content.contentType === 'pdf') {
      return (
        <div className="h-full flex flex-col">
          <iframe
            src={content.contentUrl}
            className="w-full h-full"
            title={content.contentTitle}
          ></iframe>
        </div>
      );
    }
  
    return null;
  }
  
  export default ContentViewer;