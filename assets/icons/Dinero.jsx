import React from "react";

function Money({color}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      style={{ msFilter: "" }}
      fill="#fff"
    >
      <path d="M12 15c-1.84 0-2-.86-2-1H8c0 .92.66 2.55 3 2.92V18h2v-1.08c2-.34 3-1.63 3-2.92 0-1.12-.52-3-4-3-2 0-2-.63-2-1s.7-1 2-1 1.39.64 1.4 1h2A3 3 0 0013 7.12V6h-2v1.09C9 7.42 8 8.71 8 10c0 1.12.52 3 4 3 2 0 2 .68 2 1s-.62 1-2 1z"></path>
      <path d="M5 2H2v2h2v17a1 1 0 001 1h14a1 1 0 001-1V4h2V2H5zm13 18H6V4h12z"></path>
    </svg>
  );
}

export default Money;
