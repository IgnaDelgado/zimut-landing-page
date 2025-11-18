const THREE_CDN = "https://cdn.jsdelivr.net/npm/three@0.161.0/build/three.min.js";

declare global {
  interface Window {
    THREE?: typeof import("three");
  }
}

let loaderPromise: Promise<typeof import("three") | null> | null = null;

export function loadThree() {
  if (typeof window === "undefined") {
    return Promise.resolve(null);
  }

  if (window.THREE) {
    return Promise.resolve(window.THREE);
  }

  if (loaderPromise) {
    return loaderPromise;
  }

  loaderPromise = new Promise((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>("script[data-three]");
    if (existing && window.THREE) {
      resolve(window.THREE);
      return;
    }

    const script = document.createElement("script");
    script.src = THREE_CDN;
    script.async = true;
    script.dataset.three = "true";
    script.onload = () => {
      if (window.THREE) {
        resolve(window.THREE);
      } else {
        reject(new Error("Three.js failed to load"));
      }
    };
    script.onerror = () => reject(new Error("Unable to load Three.js"));
    document.head.appendChild(script);
  });

  return loaderPromise;
}
