function siteOgImage() {
  return (
    <div
      style={{
        background: "#d1d5db",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "-1px",
          right: "-1px",
          border: "4px solid #000",
          background: "#a1a1aa",
          opacity: "0.9",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2.5rem",
          width: "88%",
          height: "80%",
        }}
      />

      <div
        style={{
          border: "4px solid #000",
          background: "#020617",
          borderRadius: "4px",
          display: "flex",
          justifyContent: "center",
          margin: "2rem",
          width: "88%",
          height: "80%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            margin: "20px",
            width: "90%",
            height: "90%",
            color: "white",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                fontSize: 52,
                fontWeight: "bold",
                maxHeight: "50%",
                overflow: "hidden",
              }}
            >
              Hello there!
            </p>
            <p
              style={{
                fontSize: 24,
                fontWeight: 300,
                maxHeight: "50%",
                overflow: "hidden",
              }}
            >
              An online portfolio & personal site, made using Astro + Tailwind
              CSS.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              width: "100%",
              marginBottom: "8px",
              fontSize: 28,
            }}
          >
            <span style={{ fontSize: 16 }}>
              by{" "}
              <span
                style={{
                  color: "transparent",
                }}
              >
                "
              </span>
              <span style={{ overflow: "hidden", fontWeight: "bold" }}>
                Yehezkiel Gunawan
              </span>
            </span>

            <span style={{ overflow: "hidden", fontWeight: 300, fontSize: 16 }}>
              yehezgun.com
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default siteOgImage;
