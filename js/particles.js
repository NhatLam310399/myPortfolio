
$("#tsparticles")
.particles()
.init(
  {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 60,
    interactivity: {
      detectsOn: "canvas",
      events: {
        onClick: {
          enable: true,
          mode: "push",

        },
        onHover: {
          enable: true,
          mode: "repulse",

        },
        resize: true,
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 1,
          size: 40,
        },
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 100,
          duration: 0.4,
          speed:5,

        },
      },
    },
    particles: {
      color: {
        value: "#fff",
      },
      links: {
        color: "#ffffff",
        distance: 10,
        enable: true,
        opacity: 1,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outMode: "none",
        random: false,
        speed: 5,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          value_area: 1920,
        },
        value: 100,
      },
      opacity: {
        value: 0.8,
      },
      shape: {
        type: "circle",

      },
      size: {
        random: true,
        value: 5,
      },
    },
    detectRetina: true,
  },
  function (container) {
    // container is the particles container where you can play/pause or stop/start.
    // the container is already started, you don't need to start it manually.
  }
);