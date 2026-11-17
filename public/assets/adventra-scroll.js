(() => {
  const logo = document.getElementById("adventra-logo");
  if (!logo) return;

  let initialized = false;
  const connect = () => {
    const svgDocument = logo.contentDocument;
    const lettering = svgDocument?.getElementById("rotating-text");
    if (!svgDocument || !lettering || initialized) return;
    initialized = true;

    let angle = 0;
    let speed = 0;
    let lastTime = 0;

    const addScroll = (event) => {
      const scale = event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? window.innerHeight : 1;
      speed = Math.max(-900, Math.min(900, speed + event.deltaY * scale * 1.5));
    };

    // Page scrolls and scrolls over the embedded SVG both drive the lettering.
    window.addEventListener("wheel", addScroll, { passive: true });
    svgDocument.addEventListener("wheel", addScroll, { passive: true });

    const animate = (time) => {
      if (lastTime) {
        const elapsed = Math.min((time - lastTime) / 1000, 0.05);
        angle += speed * elapsed;
        speed *= Math.exp(-4.2 * elapsed);
        if (Math.abs(speed) < 0.03) speed = 0;
        lettering.setAttribute("transform", `rotate(${angle} 400 400)`);
      }
      lastTime = time;
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  };

  logo.addEventListener("load", connect);
  connect();
})();
