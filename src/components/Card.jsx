function Card({ files, setFiles }) {
  const handleDelete = (fileName) => {
    setFiles((prevFiles) => prevFiles.filter((file) => file.name !== fileName));
  };

  const renderPreview = (file) => {
    switch (file.type.split("/")[0]) {
      case "image":
        return (
          <img
            src={URL.createObjectURL(file)}
            alt={file.name}
            className="w-80 max-h-24 object-contain"
          />
        );
      case "video":
        return (
          <video controls className="w-80 max-h-24">
            <source src={URL.createObjectURL(file)} type={file.type} />
            Your browser does not support the video tag.
          </video>
        );
      case "audio":
        return (
          <audio controls className="w-full">
            <source src={URL.createObjectURL(file)} type={file.type} />
            Your browser does not support the audio element.
          </audio>
        );
      default:
        return <span>No preview available</span>;
    }
  };

  return files.length > 0 ? (
    <div className="flex flex-col items-center space-y-4 mt-4 w-[min(600px,99vw)]">
      {files.map((file) => (
        <div
          key={file.name}
          className="flex items-center border border-gray-300 rounded-lg p-4 w-full shadow-lg bg-white"
        >
          <div className="flex-1">{renderPreview(file)}</div>
          <div className="flex flex-col ml-4">
            <div>Name: {file.name}</div>
            <div>Size: {(file.size / 1024).toFixed(2)} KB</div>
          </div>
          <button
            className="ml-4 bg-red-500 text-white rounded px-2 py-1 hover:bg-red-600"
            onClick={() => handleDelete(file.name)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  ) : (
    <p>No files selected</p>
  );
}

export default Card;
