import { useState } from "react";

export default function ImageUploader() {

  const [image, setImage] =
    useState(null);

  const handleImageUpload = (e) => {

    const file = e.target.files[0];

    if (file) {
      setImage(
        URL.createObjectURL(file)
      );
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <h3 className="text-xl font-semibold mb-4">
        Upload Oral Image
      </h3>

      <label
        htmlFor="oral-image"
        className="cursor-pointer block"
      >

        {image ? (

          <img
            src={image}
            alt="Uploaded"
            className="w-full h-80 object-cover rounded-xl border"
          />

        ) : (

          <div className="h-80 border-2 border-dashed border-blue-300 rounded-xl flex flex-col items-center justify-center">

            <p className="text-lg font-medium text-gray-700">
              Upload Image
            </p>

            <p className="text-sm text-gray-500 mt-2">
              Click here to select an oral scan image
            </p>

          </div>

        )}

      </label>

      <input
        id="oral-image"
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageUpload}
      />

      {image && (
        <button
          onClick={handleRemoveImage}
          className="mt-4 w-full bg-red-500 text-white py-3 rounded-xl font-medium hover:bg-red-600 transition"
        >
          Remove Image
        </button>
      )}

    </div>
  );
}