import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const dirs = [
  'public/images',
  'public/icons',
  'public/resume',
  'src/assets/images',
  'src/assets/icons',
];

for (const d of dirs) {
  if (!fs.existsSync(d)) {
    fs.mkdirSync(d, { recursive: true });
  }
}

// CRC32 table
const crcTable = [];
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    crc = crcTable[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
  }
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const buf = Buffer.alloc(12 + len);
  buf.writeUInt32BE(len, 0);
  buf.write(type, 4, 4, 'ascii');
  data.copy(buf, 8);
  const checksum = crc32(buf.subarray(4, 8 + len));
  buf.writeUInt32BE(checksum, 8 + len);
  return buf;
}

function createDarkPurpleMockupPNG(width, height, accentRGB) {
  const bytesPerPixel = 4;
  const rowSize = 1 + width * bytesPerPixel;
  const rawData = Buffer.alloc(height * rowSize);

  for (let y = 0; y < height; y++) {
    const rowOffset = y * rowSize;
    rawData[rowOffset] = 0;

    for (let x = 0; x < width; x++) {
      const pxOffset = rowOffset + 1 + x * bytesPerPixel;

      // Dark purple background #10152A to #080B18
      let r = 16;
      let g = 21;
      let b = 42;

      // Card container
      if (x > 20 && x < width - 20 && y > 20 && y < height - 20) {
        r = 23;
        g = 29;
        b = 53;

        // Header bar
        if (y < 60) {
          r = 28;
          g = 36;
          b = 66;
        }

        // Inner accent visual
        if (y > 90 && y < height - 50 && x > 40 && x < width - 40) {
          const barZone = (x - 40) % 60;
          if (barZone > 15 && barZone < 45 && y > height - 180) {
            r = accentRGB[0];
            g = accentRGB[1];
            b = accentRGB[2];
          }
        }
      }

      rawData[pxOffset] = r;
      rawData[pxOffset + 1] = g;
      rawData[pxOffset + 2] = b;
      rawData[pxOffset + 3] = 255;
    }
  }

  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8;
  ihdr[9] = 6;
  ihdr[10] = 0;
  ihdr[11] = 0;
  ihdr[12] = 0;
  const ihdrChunk = makeChunk('IHDR', ihdr);
  const compressed = zlib.deflateSync(rawData);
  const idatChunk = makeChunk('IDAT', compressed);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

// Generate project images
const blinkitImg = createDarkPurpleMockupPNG(800, 480, [139, 92, 246]); // Purple
fs.writeFileSync('public/images/blinkit-dashboard.png', blinkitImg);

const covidImg = createDarkPurpleMockupPNG(800, 480, [99, 102, 241]); // Blue
fs.writeFileSync('public/images/covid-dashboard.png', covidImg);

const olympicsImg = createDarkPurpleMockupPNG(800, 480, [168, 85, 247]); // Magenta purple
fs.writeFileSync('public/images/olympics-dashboard.png', olympicsImg);

const profileImg = createDarkPurpleMockupPNG(300, 300, [139, 92, 246]);
fs.writeFileSync('public/images/profile.png', profileImg);

// Generate authentic Resume PDF for Afzal Hameed Faiz
function generateResumePDF() {
  const pdfLines = [
    "%PDF-1.4",
    "1 0 obj",
    "<< /Type /Catalog /Pages 2 0 R >>",
    "endobj",
    "2 0 obj",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "endobj",
    "3 0 obj",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
    "endobj",
    "4 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "endobj",
    "5 0 obj",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
    "endobj",
  ];

  const streamData = `
BT
/F2 18 Tf
50 740 Td
(AFZAL HAMEED FAIZ) Tj
/F1 10 Tf
0 -16 Td
(Data & Reporting | Business Intelligence) Tj
/F1 9 Tf
0 -14 Td
(Phone: +91 7373786702 | Email: afzalfaiz0110@gmail.com | Location: India) Tj

/F2 11 Tf
0 -24 Td
(PROFESSIONAL SUMMARY) Tj
/F1 9 Tf
0 -14 Td
(Associate with hands-on experience in business intelligence, reporting, KPI dashboards, and data quality at Genpact.) Tj
0 -12 Td
(Skilled in Excel, SQL, Power BI, and Tableau, with a proven ability to turn large, multi-source datasets into clear) Tj
0 -12 Td
(insights for management.) Tj

/F2 11 Tf
0 -22 Td
(WORK EXPERIENCE) Tj
/F2 10 Tf
0 -14 Td
(GENPACT | Associate \\(Data & Reporting\\)) Tj
/F1 8.5 Tf
0 -12 Td
(Madurai, India | August 2025 - Present) Tj
0 -12 Td
(- Built and maintained KPI dashboards in Excel for 3 stakeholder teams.) Tj
0 -12 Td
(- Gathered, cleaned, and structured multi-source data; applied statistical analysis for trends and root causes.) Tj
0 -12 Td
(- Collaborated on business requirements and delivered analytical solutions.) Tj
0 -12 Td
(- Presented clear, decision-ready reports to management.) Tj
0 -12 Td
(- Automated recurring reporting workflows.) Tj
0 -12 Td
(- Used SQL \\(JOINs, CTEs, Window Functions\\) to reconcile data across systems.) Tj
0 -12 Td
(- Maintained data accuracy and consistency, signing off on data integrity.) Tj

/F2 10 Tf
0 -16 Td
(DELOITTE AUSTRALIA \\(via Forage\\) | Data Analytics Virtual Intern) Tj
/F1 8.5 Tf
0 -12 Td
(March 2025) Tj
0 -12 Td
(- Completed a Deloitte data analytics job simulation: built a Tableau dashboard, used Excel to classify,) Tj
0 -12 Td
(  and validate datasets, and presented data-driven conclusions in a structured report.) Tj

/F2 11 Tf
0 -22 Td
(TECHNICAL SKILLS) Tj
/F1 9 Tf
0 -14 Td
(BI & Visualization: Power BI, Tableau) Tj
0 -12 Td
(Spreadsheet Analytics: Excel, Pivot Tables, Pivot Charts, XLOOKUP, Advanced Formulas, Data Cleaning) Tj
0 -12 Td
(SQL & Databases: MySQL, SQL Server, Oracle DB, JOINs, CTEs, Window Functions, Aggregations) Tj
0 -12 Td
(Python & Data Analysis: Python, Pandas, NumPy, Matplotlib) Tj

/F2 11 Tf
0 -22 Td
(PROJECTS) Tj
/F2 9.5 Tf
0 -14 Td
(Blinkit Sales Analysis Dashboard \\(Power BI, Excel\\)) Tj
/F1 8.5 Tf
0 -12 Td
(- Cleaned 8,500+ rows in Excel and built a KPI-driven Power BI dashboard tracking sales across multiple dimensions.) Tj
0 -12 Td
(- Ran data quality checks, found anomalies in inventory and outlet data, and turned them into clearer reporting.) Tj

/F2 9.5 Tf
0 -14 Td
(COVID-19 Data Exploration \\(SQL, MySQL\\)) Tj
/F1 8.5 Tf
0 -12 Td
(- Analysed 100,000+ records using CTEs, Window Functions, and Views to uncover regional health and vaccination trends.) Tj
0 -12 Td
(- Validated data integrity and visualised anomalies to support clear, accurate insights.) Tj

/F2 9.5 Tf
0 -14 Td
(Olympics Dataset EDA \\(Python, Pandas, NumPy, Matplotlib\\)) Tj
/F1 8.5 Tf
0 -12 Td
(- Performed exploratory analysis on 70,000+ rows covering athlete performance and medal counts.) Tj
0 -12 Td
(- Cleaned inconsistent sources and built KPIs to surface performance trends.) Tj

/F2 11 Tf
0 -22 Td
(EDUCATION & ACHIEVEMENTS) Tj
/F1 8.5 Tf
0 -14 Td
(- B.E. Computer Science | Aalim Muhammed Salegh College of Engineering \\(CGPA: 7.9, Nov 2021 - Jun 2025\\)) Tj
0 -12 Td
(- Higher Secondary Certificate \\(HSC\\) | Rahmania Matric Hr. Sec. School \\(90%, Jun 2021\\)) Tj
0 -12 Td
(- Secondary School Certificate \\(SSLC\\) | Rahmania Matric Hr. Sec. School \\(90%, Jun 2019\\)) Tj
0 -12 Td
(- HackerRank SQL Silver Badge) Tj
0 -12 Td
(- Built a dynamic Power BI dashboard with real-time KPIs for sales performance tracking) Tj
0 -12 Td
(- Leveraged customer behaviour analysis to develop retention strategies and improve reporting outcomes) Tj
ET
`;

  const streamBuf = Buffer.from(streamData.trim(), 'utf-8');
  pdfLines.push("6 0 obj");
  pdfLines.push(`<< /Length ${streamBuf.length} >>`);
  pdfLines.push("stream");
  const headerBuf = Buffer.from(pdfLines.join("\n") + "\n", 'utf-8');
  const footerStr = `\nendstream\nendobj\nxref\n0 7\n0000000000 65535 f \n0000000009 00000 n \n0000000058 00000 n \n0000000115 00000 n \n0000000244 00000 n \n0000000318 00000 n \n0000000397 00000 n \ntrailer\n<< /Size 7 /Root 1 0 R >>\nstartxref\n${headerBuf.length + streamBuf.length + 20}\n%%EOF\n`;

  return Buffer.concat([headerBuf, streamBuf, Buffer.from(footerStr, 'utf-8')]);
}

const resumePdf = generateResumePDF();
fs.writeFileSync('public/resume/Afzal-Hameed-Faiz-Resume.pdf', resumePdf);

console.log('Regenerated exact dark assets and updated resume PDF!');
