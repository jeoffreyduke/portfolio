import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Rocket() {
  const rocket = useRef();

  useEffect(() => {
    gsap.to(rocket.current, {
      x: "5000",
      duration: "8",
      ease: "elastic",
      delay: "2",
    });
  });

  return (
    <div>
      <div className="rocket-tr">
        <svg
          width="150"
          height="150"
          viewBox="0 0 856 582"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          ref={rocket}
          className="rocket"
        >
          <g id="rocket">
            <path
              id="Vector"
              d="M408.749 125.801L406.292 125.262L406.83 122.804L405.192 122.445L404.653 124.903L402.196 124.365L401.837 126.003L404.294 126.542L403.756 128.999L405.394 129.358L405.933 126.9L408.39 127.439L408.749 125.801Z"
              fill="#E6E6E6"
            />
            <g id="rocket_2">
              <path
                id="Vector_2"
                d="M27.7089 242.751L27.2271 222.746C27.083 219.707 27.9174 216.703 29.6028 214.194C31.1921 212.026 33.3347 211.036 35.4823 211.479L54.8487 215.473C58.5022 216.225 61.2523 220.807 61.3862 226.365L61.6523 237.413C61.7862 242.972 59.2601 247.686 55.6472 248.622L36.4965 253.587C34.3729 254.138 32.1852 253.258 30.4935 251.173C28.6893 248.751 27.7113 245.793 27.7089 242.751V242.751Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_3"
                d="M27.9025 364.425L27.4206 344.42C27.2765 341.381 28.1109 338.377 29.7963 335.868C31.3856 333.7 33.5283 332.71 35.6759 333.153L55.0422 337.147C58.6957 337.899 61.4459 342.481 61.5798 348.039L61.8459 359.087C61.9797 364.646 59.4536 369.36 55.8407 370.296L36.69 375.261C34.5664 375.812 32.3787 374.931 30.6871 372.847C28.8829 370.425 27.9049 367.467 27.9025 364.425V364.425Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_4"
                d="M192.98 173.78C193.368 172.867 194.05 172.117 194.913 171.653C195.776 171.19 196.768 171.042 197.724 171.232C198.681 171.422 199.545 171.941 200.174 172.701C200.803 173.461 201.159 174.418 201.183 175.413L206.661 402.846C206.675 403.419 206.578 403.99 206.376 404.525C206.174 405.06 205.871 405.55 205.483 405.965C205.096 406.381 204.632 406.714 204.119 406.947C203.605 407.179 203.052 407.307 202.49 407.321L202.49 407.321C201.356 407.348 200.257 406.915 199.436 406.117C198.614 405.318 198.136 404.22 198.107 403.062L198.107 403.062L192.629 175.628C192.612 174.993 192.732 174.362 192.98 173.78Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_5"
                d="M266.478 257.926L264.912 192.915L49.9018 198.339L51.4677 263.35L266.478 257.926Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_6"
                d="M270.336 259.586L237.028 246.992L85.1097 246.553L80.7874 261.767L270.336 259.586Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_7"
                d="M322.761 225.25C322.459 213.088 301.87 203.748 293.824 203.947L279.257 204.315L280.318 248.354L294.885 247.987C302.93 247.78 323.045 237.413 322.761 225.25Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_8"
                d="M175.876 193.494C175.824 191.222 176.657 189.021 178.192 187.375C179.727 185.728 181.84 184.771 184.065 184.712L207.771 184.114C209.998 184.058 212.155 184.907 213.768 186.474C215.381 188.042 216.319 190.2 216.373 192.473C216.428 194.746 215.596 196.948 214.06 198.595C212.524 200.242 210.411 201.199 208.184 201.255L184.478 201.853C182.252 201.907 180.097 201.057 178.484 199.49C176.871 197.923 175.933 195.767 175.876 193.494Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_9"
                d="M264.351 210.253L280.018 209.992L280.107 214.186L264.491 214.447L36.8913 217.575L36.7901 213.38"
                fill="#3F3D56"
              />
              <path
                id="Vector_10"
                d="M227.555 265.265L225.739 189.874C234.362 182.7 271.007 182.154 277.937 197.201L287.721 203.123L289.759 248.561L279.423 253.84C273.17 261.297 236.744 265.043 227.555 265.265Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_11"
                d="M245.214 236.943L244.755 217.878C244.666 214.2 249.35 211.086 255.195 210.938C261.04 210.791 265.869 213.665 265.957 217.344L266.417 236.408C266.505 240.087 261.821 243.201 255.976 243.349C250.131 243.496 245.302 240.622 245.214 236.943Z"
                fill="#39FF14"
              />
              <path
                id="Vector_12"
                d="M139.609 199.714L112.535 160.338L51.2481 153.292L66.1156 199.177L139.609 199.714Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_13"
                d="M268.74 383.419L267.174 318.408L52.1633 323.832L53.7293 388.843L268.74 383.419Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_14"
                d="M269.439 319.971L236.383 333.249L84.5036 336.813L79.8858 321.691L269.439 319.971Z"
                fill="#CCCCCC"
              />
              <path
                id="Vector_15"
                d="M324.992 349.474C324.69 337.312 304.101 327.972 296.055 328.171L281.488 328.538L282.549 372.578L297.115 372.211C305.161 372.004 325.276 361.637 324.992 349.474Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_16"
                d="M258.999 361.871L274.665 361.609L274.755 365.804L259.139 366.065L31.5387 369.193L31.4375 364.998"
                fill="#3F3D56"
              />
              <path
                id="Vector_17"
                d="M229.786 389.489L227.97 314.099C235.757 312.807 272.068 314.615 280.167 321.425L289.951 327.347L291.989 372.785L281.654 378.064C280.543 391.475 244.842 396.061 229.786 389.489Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_18"
                d="M244.173 361.25L243.714 342.185C243.625 338.506 249.044 335.374 255.79 335.204C262.537 335.033 268.1 337.889 268.188 341.568L268.648 360.632C268.736 364.311 263.318 367.443 256.571 367.614C249.824 367.784 244.262 364.929 244.173 361.25Z"
                fill="#39FF14"
              />
              <path
                id="Vector_19"
                d="M154.773 386.293L125.742 424.196L64.1793 428.014L81.3504 382.972L154.773 386.293Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_20"
                d="M580.408 280.364C580.106 268.202 559.517 258.862 551.471 259.061L536.904 259.428L537.965 303.468L552.531 303.101C560.577 302.894 580.692 292.527 580.408 280.364Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_21"
                d="M28.7943 304.953L28.3124 284.948C28.1684 281.909 29.0028 278.905 30.6882 276.396C32.2775 274.228 34.4202 273.238 36.5677 273.681L55.9341 277.675C59.5876 278.427 62.3377 283.009 62.4716 288.567L62.7377 299.615C62.8715 305.174 60.3454 309.888 56.7325 310.824L37.582 315.789C35.4584 316.34 33.2706 315.459 31.579 313.375C29.7748 310.953 28.7967 307.995 28.7943 304.953V304.953Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_22"
                d="M487.582 315.231L486.016 250.22L51.3971 261.184L52.9631 326.195L487.582 315.231Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_23"
                d="M277.295 288.597L292.961 288.336L293.05 292.53L277.435 292.792L49.8348 295.919L49.7337 291.724"
                fill="#3F3D56"
              />
              <path
                id="Vector_24"
                d="M447.771 327.912L445.649 239.825C454.747 238.316 497.173 240.428 506.637 248.386L517.956 250.592L519.421 311.414L508.374 314.564C501.068 323.276 458.507 327.653 447.771 327.912Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_25"
                d="M518.079 313.333L516.567 250.568C516.511 248.251 517.708 246.342 519.241 246.303C519.461 246.298 519.681 246.332 519.891 246.403L549.281 256.238C550.539 256.659 551.459 258.324 551.506 260.264L552.509 301.888C552.555 303.827 551.716 305.536 550.48 306.02L521.599 317.326C520.122 317.904 518.591 316.554 518.179 314.31C518.12 313.988 518.086 313.661 518.079 313.333V313.333Z"
                fill="#E6E6E6"
              />
              <path
                id="Vector_26"
                d="M279.39 256.057C279.629 255.491 279.934 254.956 280.298 254.465C280.786 253.76 281.424 253.179 282.166 252.765C282.907 252.351 283.731 252.116 284.575 252.078L365.479 250.037C368.829 249.953 371.636 253.309 371.737 257.517L373.091 313.706C373.193 317.915 370.55 321.407 367.201 321.492L286.296 323.533C285.451 323.537 284.617 323.344 283.857 322.968C283.096 322.593 282.43 322.044 281.91 321.365C280.717 319.86 280.057 317.988 280.039 316.053L278.686 259.865C278.647 258.558 278.887 257.259 279.39 256.057V256.057Z"
                fill="#3F3D56"
              />
              <path
                id="Vector_27"
                d="M523.346 292.74L522.887 273.675C522.798 269.996 526.878 266.897 531.981 266.769C537.084 266.64 541.309 269.529 541.398 273.208L541.857 292.273C541.945 295.952 537.865 299.05 532.762 299.179C527.659 299.308 523.434 296.419 523.346 292.74Z"
                fill="#39FF14"
              />
              <path
                id="Vector_28"
                d="M180.561 384.768C180.509 382.495 181.342 380.295 182.877 378.648C184.412 377.002 186.524 376.044 188.75 375.985L212.456 375.387C214.681 375.334 216.835 376.184 218.446 377.752C220.057 379.319 220.993 381.475 221.047 383.746C221.102 386.018 220.271 388.218 218.738 389.865C217.204 391.512 215.093 392.47 212.869 392.529L189.163 393.127C186.937 393.18 184.781 392.33 183.169 390.763C181.556 389.196 180.618 387.04 180.561 384.768V384.768Z"
                fill="#3F3D56"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Rocket;