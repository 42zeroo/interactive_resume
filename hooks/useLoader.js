import { useEffect } from "react";
import disableScroll from "disable-scroll";

const useLoader = () => {
  useEffect(() => {
    let fonts = [];

    fonts.push(
      new FontFace("HelveticaBold", "url(/fonts/Helvetica-Bold.ttf)", {
        style: "normal",
        weight: "normal"
      })
    );
    new FontFace(
      "HelveticaLight",
      "url(/fonts/helvetica-light-587ebe5a59211.ttf)",
      {
        style: "normal",
        weight: "normal"
      }
    );
    new FontFace("Helvetica", "url(/fonts/Helvetica.ttf)", {
      style: "normal",
      weight: "normal"
    });

    for (var i in fonts) {
      document.fonts.add(fonts[i]);
      fonts[i].load();
    }
    document.fonts.ready.then(function (e) {
      if (typeof window !== "undefined") {
        document.getElementById("loader").style.animation =
          "loader-dissapear 2s ease-in-out forwards";

        // setTimeout(() => , 1000);
        setTimeout(() => {
          document.getElementById("loader").style.display = "none";
          disableScroll.off();
        }, 2000);
      }
    });
  }, []);
};

export default useLoader;
