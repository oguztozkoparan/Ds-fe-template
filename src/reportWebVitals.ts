import { ReportCallback } from "web-vitals";

const reportWebVitals = (callback?: ReportCallback) => {
  if (callback && callback instanceof Function) {
    import("web-vitals").then(({ onCLS, onFID, onFCP, onLCP, onTTFB }) => {
      onCLS(callback);
      onFID(callback);
      onFCP(callback);
      onLCP(callback);
      onTTFB(callback);
    });
  }
};

export default reportWebVitals;
