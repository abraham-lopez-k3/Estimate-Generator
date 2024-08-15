// app/components/PDFGenerator.js
"use client";

import { useState } from "react";

export default function PDFGenerator() {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGeneratePDF = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/generate-pdf");
      if (!response.ok) throw new Error("PDF generation failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "generated-document.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("Failed to generate PDF. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <button onClick={handleGeneratePDF} disabled={isGenerating}>
      {isGenerating ? "Generating PDF..." : "Generate PDF"}
    </button>
  );
}
