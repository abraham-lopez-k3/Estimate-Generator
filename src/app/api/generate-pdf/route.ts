// app/api/generate-pdf/route.js
import puppeteer from "puppeteer";
import Handlebars from "handlebars";
import path from "path";
import { promises as fs } from "fs";
import { readFile } from "fs/promises";

export async function GET(request: Request) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const templatePath = path.join(
    process.cwd(),
    "src",
    "pdf",
    "estimate-template.hbs",
  );
  const templateContent = await readFile(templatePath, "utf-8");

  const template = Handlebars.compile(templateContent);

  const html = template(request.body);

  // Set content for the PDF
  await page.setContent(html);

  // Generate PDF
  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { top: "1cm", right: "1cm", bottom: "1cm", left: "1cm" },
  });

  await browser.close();

  // Send the PDF as a response
  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=document.pdf",
    },
  });
}
