import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

function Coding() {
  const steam1 = useRef();
  const steam2 = useRef();
  const head = useRef();

  useEffect(() => {
    gsap.to(steam1.current, {
      y: "-30",
      repeat: "-1",
      duration: "2",
      ease: "power4",
      yoyo: true,
      yoyoEase: true,
    });
    gsap.to(steam2.current, {
      y: "-12",
      repeat: "-1",
      duration: "2",
      ease: "power4",
      yoyo: true,
      yoyoEase: true,
    });
    gsap.to(head.current, {
      y: "-3",
      x: "3",
      repeat: "-1",
      duration: "2",
      ease: "bounce",
      yoyo: true,
      yoyoEase: true,
    });
  });

  return (
    <>
      <svg
        width="600"
        height="600"
        viewBox="0 0 879 483"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="codingSvg"
      >
        <g id="coding" clipPath="url(#clip0_0_1)">
          <path
            id="Vector"
            d="M134.032 412.703C114.521 427.248 108.991 452.838 108.991 452.838C108.991 452.838 135.095 454.847 154.606 440.303C174.117 425.759 179.646 400.168 179.646 400.168C179.646 400.168 153.542 398.159 134.032 412.703Z"
            fill="#F1F1F1"
          />
          <path
            id="Vector_2"
            d="M142.159 419.532C132.782 441.988 109.297 453.56 109.297 453.56C109.297 453.56 101.016 428.724 110.393 406.267C119.77 383.811 143.255 372.239 143.255 372.239C143.255 372.239 151.536 397.076 142.159 419.532Z"
            fill="#F1F1F1"
          />
          <path
            id="steam2"
            d="M703.502 354.614C701.429 340.65 700.882 326.501 701.869 312.419L703.502 289.112C694.502 307.02 696.536 330.59 703.502 354.614V354.614Z"
            fill="#CACACA"
            ref={steam2}
          />
          <path
            id="steam1"
            d="M710.521 358.513C709.523 350.18 709.26 341.776 709.735 333.397L710.521 319.523C706.19 330.183 707.169 344.213 710.521 358.513Z"
            fill="#CACACA"
            ref={steam1}
          />
          <path
            id="Vector_3"
            d="M741.716 375.67V383.468C741.713 384.088 741.465 384.681 741.027 385.119C740.589 385.557 739.996 385.804 739.376 385.808H735.477C735.375 385.807 735.273 385.827 735.179 385.866C735.084 385.905 734.998 385.963 734.925 386.035C734.853 386.108 734.795 386.194 734.756 386.289C734.717 386.383 734.697 386.485 734.698 386.587V450.53C734.694 451.15 734.447 451.743 734.009 452.181C733.571 452.619 732.978 452.866 732.358 452.87H684.791C684.171 452.869 683.576 452.623 683.137 452.184C682.699 451.745 682.452 451.151 682.452 450.53V386.587C682.451 386.381 682.369 386.183 682.223 386.037C682.076 385.891 681.878 385.808 681.672 385.808H676.993C676.373 385.807 675.778 385.56 675.34 385.122C674.901 384.683 674.654 384.088 674.654 383.468V375.67C674.653 375.363 674.714 375.059 674.831 374.775C674.948 374.491 675.121 374.232 675.338 374.015C675.555 373.798 675.813 373.626 676.097 373.508C676.381 373.391 676.686 373.33 676.993 373.331H739.376C739.996 373.333 740.59 373.58 741.029 374.018C741.467 374.456 741.714 375.05 741.716 375.67V375.67Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_4"
            d="M734.768 387.445H682.522V389.784H734.768V387.445Z"
            fill="#E6E6E6"
          />
          <path
            id="Vector_5"
            d="M734.698 421.869C717.215 429.104 699.542 429.183 681.672 421.869V405.388C698.875 399.61 717.495 399.61 734.698 405.388V421.869Z"
            fill="#E6E6E6"
          />
          <path
            id="Vector_6"
            d="M593.835 280.93C591.405 266.311 588.898 251.411 582.104 238.241C577.639 229.615 570.55 221.395 560.994 219.689C559.112 219.521 557.262 219.093 555.498 218.417C552.698 217.068 515.073 195.589 509.092 191.848C503.958 188.637 495.852 182.69 491.765 182.69C487.654 182.6 471.888 186.269 410.352 181.459C410.352 181.459 393.447 188.122 380.366 196.202C380.168 196.071 316.497 230.262 314.105 230.172C309.575 229.982 305.364 232.882 302.767 236.535C300.171 240.187 298.953 244.709 297.678 249.08C311.585 280.05 324.309 311.06 338.217 342.03C338.868 343.196 339.214 344.509 339.223 345.844C338.943 347.231 338.351 348.535 337.492 349.659C330.672 360.615 330.889 374.395 331.634 387.272C332.38 400.149 333.302 413.75 327.547 425.292C325.982 428.461 323.946 431.361 322.457 434.53C318.971 441.707 317.711 464.661 319.747 472.372L574.868 479.68C569.383 464.602 593.835 280.93 593.835 280.93Z"
            fill="#39FF14"
          />
          <path
            id="Path 1421"
            d="M275.625 343.403C275.116 347.085 275.065 350.817 275.473 354.512L279.129 407.024C279.473 411.974 279.811 416.911 280.275 421.848C281.152 431.429 282.463 440.934 284.09 450.426C284.126 451.773 284.696 453.051 285.674 453.979C286.652 454.907 287.958 455.409 289.306 455.375C305.402 458.781 322.032 458.645 338.459 457.717C363.526 456.318 427.657 453.671 431.575 448.581C435.493 443.491 433.21 435.259 428.101 431.143C422.992 427.028 338.362 416.994 338.362 416.994C339.189 410.441 341.684 404.27 344.05 398.048C348.301 387.013 352.271 375.616 352.347 363.795C352.423 351.974 347.97 339.545 338.286 332.773C330.321 327.213 320.065 326.182 310.358 326.411C303.296 326.614 291.093 324.922 284.643 327.683C279.538 329.931 276.579 338.405 275.625 343.403Z"
            fill="#B06C49"
          />
          <path
            id="Path 1430"
            d="M296.942 250.023C295.703 251.321 294.742 252.858 294.118 254.541C283.833 277.72 277.758 302.546 276.177 327.856C276.205 329.09 275.921 330.312 275.35 331.406C274.788 332.135 274.162 332.812 273.48 333.429C272.885 334.134 272.435 334.95 272.155 335.829C271.876 336.708 271.772 337.633 271.85 338.552C271.928 339.472 272.186 340.366 272.61 341.186C273.034 342.005 273.615 342.733 274.32 343.328C274.435 343.425 274.554 343.519 274.676 343.609C276.775 339.658 281.801 338.367 286.268 338.023C307.657 336.331 328.55 346.282 350.002 345.531C348.489 340.301 346.312 335.275 345.077 329.983C339.619 306.481 353.234 280.894 344.887 258.257C343.219 253.727 340.433 249.274 336.044 247.289C334.226 246.556 332.324 246.052 330.382 245.79C324.961 244.811 314.17 240.624 308.929 242.304C306.995 242.928 306.232 244.747 304.628 245.846C302.192 247.402 298.961 247.974 296.942 250.023Z"
            fill="#39FF14"
          />
          <path
            id="Path 1421_2"
            d="M593.988 327.683C587.537 324.922 575.334 326.614 568.272 326.411C558.565 326.182 548.31 327.213 540.344 332.773C530.661 339.545 526.207 351.974 526.283 363.795C526.36 375.616 530.33 387.013 534.58 398.048C536.946 404.27 539.441 410.441 540.268 416.994C540.268 416.994 455.638 427.028 450.529 431.143C445.42 435.259 443.137 443.491 447.055 448.581C450.973 453.671 573.228 458.781 589.324 455.375C590.672 455.409 591.978 454.907 592.956 453.979C593.934 453.051 594.504 451.773 594.541 450.426C596.167 440.934 597.478 431.429 598.355 421.848C598.82 416.911 599.158 411.974 599.501 407.024L603.157 354.512C603.565 350.817 603.514 347.086 603.005 343.403C602.051 338.405 599.092 329.931 593.988 327.683Z"
            fill="#B06C49"
          />
          <path
            id="Path 1430_2"
            d="M574.002 245.846C572.399 244.747 571.636 242.928 569.701 242.304C564.46 240.624 553.669 244.811 548.248 245.79C546.306 246.052 544.404 246.556 542.587 247.289C538.197 249.274 535.411 253.727 533.744 258.257C525.397 280.894 539.012 306.481 533.553 329.983C532.319 335.275 530.142 340.301 528.628 345.531C550.081 346.282 570.974 336.331 592.362 338.023C596.829 338.367 601.855 339.658 603.954 343.609C604.076 343.519 604.195 343.425 604.311 343.328C605.016 342.733 605.597 342.005 606.021 341.186C606.444 340.366 606.703 339.472 606.781 338.552C606.859 337.633 606.755 336.708 606.475 335.829C606.195 334.95 605.745 334.135 605.151 333.429C604.468 332.812 603.842 332.135 603.28 331.406C602.71 330.312 602.425 329.09 602.453 327.856C600.873 302.546 594.798 277.72 584.513 254.541C583.889 252.858 582.928 251.321 581.688 250.023C579.669 247.974 576.438 247.402 574.002 245.846Z"
            fill="#39FF14"
          />
          <path
            id="Vector_7"
            d="M420.924 457.883C431.457 457.883 439.996 449.344 439.996 438.81C439.996 428.277 431.457 419.738 420.924 419.738C410.39 419.738 401.851 428.277 401.851 438.81C401.851 449.344 410.39 457.883 420.924 457.883Z"
            fill="#B06C49"
          />
          <path
            id="Vector_8"
            d="M463.156 457.883C473.69 457.883 482.229 449.344 482.229 438.81C482.229 428.277 473.69 419.738 463.156 419.738C452.623 419.738 444.083 428.277 444.083 438.81C444.083 449.344 452.623 457.883 463.156 457.883Z"
            fill="#B06C49"
          />
          <path
            id="Vector_9"
            d="M580.888 481.788H318.857C315.797 481.785 312.865 480.568 310.701 478.405C308.538 476.242 307.321 473.309 307.317 470.25V311.283C307.321 308.224 308.538 305.291 310.701 303.128C312.865 300.965 315.797 299.748 318.857 299.744H580.888C583.947 299.748 586.88 300.965 589.043 303.128C591.206 305.291 592.423 308.224 592.427 311.283V470.25C592.423 473.309 591.206 476.242 589.043 478.405C586.88 480.568 583.947 481.785 580.888 481.788Z"
            fill="#3F3D56"
          />
          <path
            id="Ellipse 263"
            d="M449.237 398.401C453.453 398.401 456.871 394.983 456.871 390.766C456.871 386.55 453.453 383.132 449.237 383.132C445.02 383.132 441.602 386.55 441.602 390.766C441.602 394.983 445.02 398.401 449.237 398.401Z"
            fill="white"
          />
          <path
            id="Vector_10"
            d="M878.63 449.724H0V476.724H51.97V483H826.68V476.724H878.63V449.724Z"
            fill="#F1F1F1"
          />
          <g id="head" ref={head}>
            <path
              id="Ellipse 276"
              d="M441.853 169.877C480.88 169.877 512.518 138.238 512.518 99.2107C512.518 60.183 480.88 28.5448 441.853 28.5448C402.825 28.5448 371.187 60.183 371.187 99.2107C371.187 138.238 402.825 169.877 441.853 169.877Z"
              fill="#B06C49"
            />
            <path
              id="Path 1461"
              d="M507.855 38.246C497.29 21.0899 480.752 8.44813 461.425 2.75434L452.75 9.08513V0.864782C448.108 0.15437 443.41 -0.119301 438.718 0.0473682L431.233 6.81957V0.610006C420.151 1.98709 409.475 5.64536 399.878 11.3541C390.28 17.0629 381.969 24.6983 375.47 33.7789C359.216 57.2111 356.472 89.8105 372.459 113.431C376.847 99.9436 382.174 87.2889 386.563 73.803C390.013 74.2732 393.508 74.2902 396.962 73.8535L402.301 61.3949L403.793 73.3262C420.343 71.8849 444.889 68.7188 460.578 65.8184L459.052 56.6648L468.18 64.2709C472.986 63.1646 475.84 62.1606 475.605 61.3936C487.273 80.2048 501.553 92.2192 513.22 111.03C517.652 84.5056 522.752 62.4507 507.855 38.246Z"
              fill="#2F2E41"
            />
            <path
              id="Vector_11"
              d="M376.871 125.549C365.516 125.549 356.311 115.597 356.311 103.32V92.205C356.311 79.928 365.516 69.9756 376.871 69.9756V125.549H376.871Z"
              fill="#39FF14"
            />
            <path
              id="Vector_12"
              d="M508.094 69.9756C519.449 69.9756 528.654 79.928 528.654 92.205V103.32C528.654 115.597 519.449 125.549 508.094 125.549V69.9756Z"
              fill="#39FF14"
            />
            <path
              id="Vector_13"
              d="M518.868 93.9516H515.606C515.606 49.2216 481.949 12.8309 440.58 12.8309C399.21 12.8309 365.554 49.2216 365.554 93.9516H362.292C362.292 47.2767 397.412 9.30399 440.58 9.30399C483.748 9.30401 518.868 47.2768 518.868 93.9516Z"
              fill="#39FF14"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_0_1">
            <rect width="878.63" height="483" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
}

export default Coding;
