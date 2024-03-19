export const Star = ({ width = null, height = null, fill = true, color = null, key = 0 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width || 17} height={height || 17} viewBox="0 0 24 24">
      <path
        d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
        fill={fill ? color || '#FFBF42' : '#9D9D9D'}
        // stroke={color || ''}
        key={key}
      />
    </svg>
  );
};

export const StarGroup = ({ width = null, height = null, stroke = null, color = null, star = 0, async = true }) => {
  let array = [];
  star = Math.round(star);
  if (!async) {
    if (star != 5) {
      for (let i = 1; i <= 5 - star; i++) {
        array.push({ width, height, fill: false, stroke, color });
      }
    }
  }
  for (let i = 1; i <= star; i++) {
    array.push({ width, height, fill: true, stroke, color });
  }
  if (async) {
    if (star != 5) {
      for (let i = 1; i <= 5 - star; i++) {
        array.push({ width, height, fill: false, stroke, color });
      }
    }
  }
  return (
    <>
      {array.map((star, index) => (
        <>
          <Star
            width={star.width}
            height={star.height}
            fill={star.fill}
            stroke={star.stroke}
            color={star.color}
            key={index}
          />
        </>
      ))}
    </>
  );
};
export const LocationIcon = () => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="15" viewBox="0 0 11 15" fill="none">
        <path
          d="M4.46195 11.9608C4.5588 12.1282 4.69797 12.2672 4.86549 12.3638C5.03301 12.4604 5.223 12.5113 5.41638 12.5113C5.60977 12.5113 5.79976 12.4604 5.96728 12.3638C6.1348 12.2672 6.27397 12.1282 6.37082 11.9608L9.17655 7.10166C9.56177 6.44298 9.7648 5.69365 9.7648 4.93059C9.7648 4.16753 9.56177 3.41821 9.17655 2.75952C8.79541 2.09955 8.24729 1.55151 7.58725 1.17048C6.92721 0.789459 6.17851 0.588867 5.41638 0.588867C4.65426 0.588867 3.90556 0.789459 3.24552 1.17048C2.58548 1.55151 2.03736 2.09955 1.65622 2.75952C1.27001 3.41787 1.06641 4.16732 1.06641 4.93059C1.06641 5.69386 1.27001 6.44331 1.65622 7.10166L4.46195 11.9608ZM2.22717 3.09033C2.54945 2.53046 3.0136 2.06541 3.57285 1.74205C4.13211 1.41869 4.7667 1.24843 5.41271 1.24843C6.05872 1.24843 6.69331 1.41869 7.25256 1.74205C7.81181 2.06541 8.27596 2.53046 8.59825 3.09033C8.92474 3.64777 9.09684 4.28213 9.09684 4.92814C9.09684 5.57416 8.92474 6.20851 8.59825 6.76595L5.79742 11.63C5.75689 11.6948 5.70053 11.7483 5.63367 11.7853C5.5668 11.8224 5.49161 11.8418 5.41516 11.8418C5.33871 11.8418 5.26352 11.8224 5.19665 11.7853C5.12978 11.7483 5.07343 11.6948 5.03289 11.63L2.22717 6.77085C1.90098 6.21242 1.72909 5.57731 1.72909 4.93059C1.72909 4.28387 1.90098 3.64877 2.22717 3.09033Z"
          fill="#9D9D9D"
        />
        <path
          d="M5.41548 7.57219C5.93911 7.57268 6.45111 7.41782 6.88669 7.12721C7.32228 6.8366 7.66186 6.42331 7.86246 5.93963C8.06307 5.45596 8.11569 4.92364 8.01365 4.41005C7.91161 3.89646 7.65952 3.42469 7.28926 3.05443C6.919 2.68416 6.44722 2.43207 5.93363 2.33003C5.42004 2.22799 4.88773 2.28061 4.40405 2.48122C3.92037 2.68182 3.50708 3.0214 3.21647 3.45699C2.92586 3.89257 2.771 4.40457 2.77149 4.9282C2.77213 5.62923 3.05091 6.30136 3.54661 6.79707C4.04232 7.29277 4.71445 7.57155 5.41548 7.57219ZM5.41548 2.94336C5.80836 2.9419 6.19283 3.05708 6.5202 3.27429C6.84757 3.4915 7.10311 3.80097 7.25447 4.16352C7.40582 4.52608 7.44618 4.92539 7.37043 5.31089C7.29467 5.6964 7.10622 6.05075 6.82893 6.32907C6.55164 6.60739 6.19799 6.79716 5.81277 6.87434C5.42755 6.95152 5.02809 6.91265 4.66498 6.76264C4.30187 6.61263 3.99144 6.35823 3.77302 6.03167C3.5546 5.70511 3.438 5.32107 3.438 4.9282C3.438 4.40306 3.6461 3.89932 4.01674 3.5273C4.38738 3.15528 4.89035 2.9453 5.41548 2.94336Z"
          fill="#9D9D9D"
        />
        <path
          d="M8.64535 10.1894C8.6023 10.1776 8.55732 10.1747 8.51311 10.1808C8.46891 10.1868 8.42639 10.2018 8.38811 10.2247C8.34984 10.2477 8.3166 10.2781 8.29039 10.3142C8.26419 10.3503 8.24557 10.3914 8.23564 10.4349C8.22572 10.4784 8.2247 10.5235 8.23264 10.5674C8.24059 10.6113 8.25733 10.6531 8.28187 10.6904C8.30641 10.7277 8.33824 10.7596 8.37544 10.7842C8.41263 10.8089 8.45443 10.8258 8.49832 10.8338C9.5569 11.0789 10.2259 11.6302 10.1597 12.2134C10.0666 13.0392 8.54243 13.9287 5.4157 13.9434C2.28897 13.9581 0.759909 13.0392 0.674144 12.2134C0.607983 11.6302 1.27695 11.0764 2.33553 10.8338C2.37941 10.8258 2.42121 10.8089 2.45841 10.7842C2.49561 10.7596 2.52743 10.7277 2.55197 10.6904C2.57651 10.6531 2.59326 10.6113 2.60121 10.5674C2.60915 10.5235 2.60813 10.4784 2.5982 10.4349C2.58828 10.3914 2.56966 10.3503 2.54345 10.3142C2.51725 10.2781 2.48401 10.2477 2.44574 10.2247C2.40746 10.2018 2.36494 10.1868 2.32073 10.1808C2.27653 10.1747 2.23155 10.1776 2.1885 10.1894C0.762359 10.5153 -0.0903855 11.3362 0.0076311 12.2869C0.135053 13.3308 1.60285 14.556 5.32748 14.6026H5.50636C9.23099 14.556 10.6988 13.3308 10.8164 12.2869C10.9242 11.3362 10.0715 10.5153 8.64535 10.1894Z"
          fill="#9D9D9D"
        />
      </svg>
    </>
  );
};

export const Plus = ({ color, width = null, height = null }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width || 16}
    height={height || 16}
    fill={color || '#000'}
    viewBox="0 0 16 16"
  >
    {' '}
    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{' '}
  </svg>
);
export const Minus = ({ color, width = null, height = null }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width={width || 16}
    height={height || 16}
    fill={color || '#000'}
  >
    <g>
      <path d="M384,265H128v-17h256V265z" />
    </g>
  </svg>
);
