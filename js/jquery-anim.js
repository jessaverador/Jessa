$(document).ready(function () {
  let entries = [
    { label: "Resilience" },
    { label: "Resilience" },
    { label: "Adaptability" },
    { label: "Learning" },
    { label: "Academic performance" },
    { label: "Engagement" },
    { label: "Setbacks" },
    { label: "Failures" },
    { label: "Creativity" },
    { label: "Innovation" },
    { label: "Risk-taking" },
    { label: "Discoveries" },
    { label: "Ideas" },
    { label: "Competitive advantage" },
    { label: "Success" },
    { label: "Disruption" },
    { label: "Mindset" },
    { label: "Challenges" },
    { label: "Challenges" },
  ];

  let setings = {
    entries: entries,
    width: 750,
    height: 700,
    radius: "78%",
    radiusMin: 75,
    bgDraw: true,
    bgColor: "#1d1d1d",
    opacityOver: 0.4,
    opacityOut: 0.4,
    opacitySpeed: 6,
    fov: 800,
    speed: 1,
    fontFamily: "Courier, Arial, sans-serif",
    fontSize: "30",
    fontColor: "#08fdd8",
    fontWeight: "bold",
    fontStyle: "normal",
    fontScretch: "normal",
    fontToUppercase: true,
  };

  $("#tag").svg3DTagCloud(setings);
});
