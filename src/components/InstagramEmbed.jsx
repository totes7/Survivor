import React, { useEffect } from "react";

const InstagramEmbed = () => {
    useEffect(() => {
        // Check if the script is already loaded
        if (!document.getElementById("instagram-embed-script")) {
          const script = document.createElement("script");
          script.src = "https://www.instagram.com/embed.js";
          script.async = true;
          script.id = "instagram-embed-script";
          document.body.appendChild(script);
        } else {
          // Reinitialize Instagram embeds if script is already present
          window.instgrm?.Embeds.process();
        }
      }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink="https://www.instagram.com/reel/DFaDThPsC9Q/?utm_source=ig_embed&amp;utm_campaign=loading"
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "3px",
        boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: "1px",
        maxWidth: "900px",
        minWidth: "326px",
        padding: 0,
        width: "99.375%",
      }}
    >
      <div style={{ padding: "16px" }}>
        <a
          href="https://www.instagram.com/reel/DFaDThPsC9Q/?utm_source=ig_embed&amp;utm_campaign=loading"
          style={{
            background: "#FFFFFF",
            lineHeight: 0,
            padding: 0,
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
            display: "block",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
            <div
              style={{
                backgroundColor: "#F4F4F4",
                borderRadius: "50%",
                height: "40px",
                marginRight: "14px",
                width: "40px",
              }}
            ></div>
            <div style={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  height: "14px",
                  marginBottom: "6px",
                  width: "100px",
                }}
              ></div>
              <div
                style={{
                  backgroundColor: "#F4F4F4",
                  borderRadius: "4px",
                  height: "14px",
                  width: "60px",
                }}
              ></div>
            </div>
          </div>
          <div style={{ padding: "19% 0" }}></div>
          <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}>
            <svg
              width="50px"
              height="50px"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <g fill="#000000">
                  <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 ..."></path>
                </g>
              </g>
            </svg>
          </div>
          <div style={{ paddingTop: "8px", textAlign: "center" }}>
            <span style={{ color: "#3897f0", fontSize: "14px", fontWeight: "550" }}>
              View this post on Instagram
            </span>
          </div>
        </a>
      </div>
      <script async src="https://www.instagram.com/embed.js"></script>
    </blockquote>
  );
};

export default InstagramEmbed;
