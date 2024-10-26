"use client";
import { useState } from "react";

export default function PDFUploader() {
  const [filteredText, setFilteredText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsLoading(true);

    const readFileAsBase64 = (file: File): Promise<string> => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          const base64 = e.target?.result?.toString().split(",")[1];
          if (base64) resolve(base64);
          else reject("Failed to convert file to base64");
        };
        reader.onerror = () => reject("Error reading file");
        reader.readAsDataURL(file);
      });
    };

    try {
      const base64 = await readFileAsBase64(file);
      console.log("Base64 string:", base64); // Debugging line

      const response = await fetch("/api/process-pdf", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file: base64 }),
      });

      if (!response.ok) {
        throw new Error("Failed to process PDF");
      }

      const data = await response.json();
      console.log("Response data:", data); // Debugging line
      setFilteredText(data.text || "No text found with A or B.");
    } catch (error) {
      console.error("Error processing PDF:", error);
      setFilteredText("Error processing PDF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2">
        <label htmlFor="pdf-upload" className="text-lg font-medium">
          Upload PDF
        </label>
        <input
          id="pdf-upload"
          type="file"
          accept=".pdf"
          onChange={handleFileUpload}
          className="file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0
            file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>

      {isLoading && <div className="text-blue-600">Processing PDF...</div>}

      <textarea
        value={filteredText}
        readOnly
        className="w-full h-64 p-4 border rounded-lg focus:ring-2 focus:ring-blue-500
          focus:border-blue-500 resize-none"
        placeholder="Text containing A and B will appear here..."
      />
    </div>
  );
}