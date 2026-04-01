"use client";
const EthnicInvasionPro = () => {
  const colors = {
    dark: "#5d4b40",
    ochre: "#c19a6b",
    terra: "#a67c52",
  };

  const PatternSide = ({ side = "left" }) => {
    const isLeft = side === "left";

    return (
      <div
        className={`absolute top-1/2 -translate-y-1/2 flex items-center gap-3 ${
          isLeft ? "left-0 animate-slideLeft" : "right-0 animate-slideRight"
        }`}
      >
        {[...Array(8)].map((_, i) => {
          const size = 20 + (i % 3) * 10; // tamaños variables
          const color =
            i % 3 === 0
              ? colors.dark
              : i % 3 === 1
                ? colors.terra
                : colors.ochre;

          return (
            <div
              key={i}
              className="relative flex items-center justify-center"
              style={{
                width: size,
                height: size,
              }}
            >
              {/* Forma base */}
              <div
                className="rotate-45 rounded-sm blur-[0.3px]"
                style={{
                  width: size,
                  height: size,
                  background: color,
                  opacity: 0.9,
                }}
              />

              {/* Glow */}
              <div
                className="absolute rotate-45 blur-md opacity-40"
                style={{
                  width: size,
                  height: size,
                  background: color,
                }}
              />

              {/* Punto central */}
              {i % 2 === 0 && (
                <div
                  className="absolute w-1.5 h-1.5 rotate-45"
                  style={{ background: colors.dark }}
                />
              )}
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="w-full flex items-center justify-center py-12 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10">
      <div className="relative w-full overflow-hidden flex justify-center items-center">
        

        {/* Lado izquierdo */}
        <PatternSide side="left" />

        {/* Lado derecho */}
        <PatternSide side="right" />

        {/* Centro vacío */}
        <div className="w-72 h-24 z-10 flex items-center justify-center">
          {/* Aquí puedes poner botón o texto */}
        </div>

        {/* Animaciones */}
        <style jsx>{`
          @keyframes slideLeft {
            from {
              transform: translateX(-180%) translateY(-50%);
              opacity: 0;
            }
            to {
              transform: translateX(0) translateY(-50%);
              opacity: 1;
            }
          }

          @keyframes slideRight {
            from {
              transform: translateX(180%) translateY(-50%);
              opacity: 0;
            }
            to {
              transform: translateX(0) translateY(-50%);
              opacity: 1;
            }
          }

          .animate-slideLeft {
            animation: slideLeft 1.2s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .animate-slideRight {
            animation: slideRight 1.2s cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}</style>
      </div>
    </div>
  );
};

export default EthnicInvasionPro;
