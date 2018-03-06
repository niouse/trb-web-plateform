
import React, {Component} from 'react';
import PropTypes from 'prop-types';


const SvgBillMakerTemplate = (props) => {
    let styles = props.styles
    let text = props.text
    return (
                   <g id="g3193" stroke="#000" fill={props.color || "black"}>
                     <path id="path3230" fill={props.color || "black"} d="M 302.17849,228.85702 350.81921,228.85702 350.81921,180.21627 302.17849,180.21627 z M 315.35666,198.30716 C 313.99992,196.95042 313.99992,194.75116 315.35666,193.39444 316.71164,192.03771 318.91437,192.03771 320.26936,193.39444 L 326.49886,199.62392 332.72834,193.39444 C 334.08334,192.03771 336.28606,192.03771 337.64104,193.39444 338.99778,194.75116 338.99778,196.95042 337.64104,198.30716 L 331.41156,204.53664 337.64104,210.76613 C 338.99778,212.12287 338.99778,214.32211 337.64104,215.67884 336.96357,216.35807 336.07412,216.69683 335.1847,216.69683 334.29526,216.69683 333.40584,216.35807 332.72834,215.67884 L 326.49886,209.44936 320.26936,215.67884 C 319.59186,216.35807 318.70244,216.69683 317.813,216.69683 316.92358,216.69683 316.03414,216.35807 315.35666,215.67884 313.99992,214.32211 313.99992,212.12287 315.35666,210.76613 L 321.58614,204.53664 z M 354.29355,228.85702 402.93429,228.85702 402.93429,180.21627 354.29355,180.21627 z M 368.19091,195.85079 389.03692,195.85079 C 390.95475,195.85079 392.51126,197.4073 392.51126,199.32514 392.51126,201.24297 390.95475,202.79947 389.03692,202.79947 L 368.19091,202.79947 C 366.27306,202.79947 364.71656,201.24297 364.71656,199.32514 364.71656,197.4073 366.27306,195.85079 368.19091,195.85079 z M 368.19091,206.2738 389.03692,206.2738 C 390.95475,206.2738 392.51126,207.83031 392.51126,209.74815 392.51126,211.66598 390.95475,213.22248 389.03692,213.22248 L 368.19091,213.22248 C 366.27306,213.22248 364.71656,211.66598 364.71656,209.74815 364.71656,207.83031 366.27306,206.2738 368.19091,206.2738 z M 354.29355,128.10122 354.29355,176.74194 402.93429,176.74194 402.93429,128.10122 z M 389.03692,155.89591 368.19091,155.89591 C 366.27306,155.89591 364.71656,154.33941 364.71656,152.42158 364.71656,150.50374 366.27306,148.94724 368.19091,148.94724 L 389.03692,148.94724 C 390.95475,148.94724 392.51126,150.50374 392.51126,152.42158 392.51126,154.33941 390.95475,155.89591 389.03692,155.89591 z M 302.17849,176.74194 350.81921,176.74194 350.81921,128.10122 302.17849,128.10122 z M 316.07584,148.94724 323.02451,148.94724 323.02451,141.99857 C 323.02451,140.08072 324.58101,138.52422 326.49886,138.52422 328.41667,138.52422 329.97318,140.08072 329.97318,141.99857 L 329.97318,148.94724 336.92187,148.94724 C 338.83969,148.94724 340.3962,150.50374 340.3962,152.42158 340.3962,154.33941 338.83969,155.89591 336.92187,155.89591 L 329.97318,155.89591 329.97318,162.8446 C 329.97318,164.76242 328.41667,166.31893 326.49886,166.31893 324.58101,166.31893 323.02451,164.76242 323.02451,162.8446 L 323.02451,155.89591 316.07584,155.89591 C 314.158,155.89591 312.6015,154.33941 312.6015,152.42158 312.6015,150.50374 314.158,148.94724 316.07584,148.94724 z M 379.44951,319.42149 C 378.89079,317.52965 378.21293,315.88312 377.41678,314.48488 376.62112,313.08526 375.48153,311.72002 373.99577,310.38463 372.51184,309.04992 371.17689,307.97499 369.99321,307.15786 368.81021,306.34001 367.18519,305.42563 365.11901,304.41357 363.05463,303.40173 361.41898,302.6488 360.21496,302.15362 359.00934,301.65911 357.26537,300.98125 354.98415,300.12046 352.96163,299.34626 351.45575,298.75432 350.46496,298.34575 349.47527,297.93672 348.1738,297.35606 346.55984,296.60244 344.94655,295.84997 343.7414,295.18249 342.94506,294.60184 342.14891,294.0212 341.29921,293.31122 340.39522,292.47213 339.49125,291.63304 338.85657,290.73991 338.49049,289.79319 338.12532,288.84626 337.94218,287.81317 337.94218,286.69416 337.94218,283.76833 339.2328,281.37904 341.81497,279.52903 344.39733,277.67901 347.73311,276.75356 351.82182,276.75356 353.62842,276.75356 355.47029,277.00069 357.34111,277.49609 359.21192,277.99149 360.81526,278.54954 362.14954,279.17403 363.48492,279.79855 364.74321,280.48728 365.92711,281.23999 367.11079,281.99338 367.94965,282.56317 368.44506,282.95051 368.93999,283.33804 369.25361,283.59604 369.38136,283.72537 369.94165,284.15565 370.52117,284.30602 371.12375,284.17736 371.76908,284.13439 372.26446,283.78958 372.60951,283.14473 L 377.83938,273.71964 C 378.35559,272.85931 378.24887,272.04146 377.51674,271.26636 377.25806,271.00814 376.93654,270.70721 376.54651,270.36262 376.16031,270.01803 375.32077,269.39419 374.02856,268.48998 372.73771,267.58646 371.37135,266.77949 369.93058,266.06928 368.48824,265.35974 366.6156,264.63846 364.31292,263.90724 362.01159,263.17486 359.63316,262.68036 357.17945,262.42238 L 357.17945,251.06022 C 357.17945,250.4581 356.98613,249.96293 356.59993,249.57538 356.21284,249.18872 355.71766,248.9945 355.11419,248.9945 L 346.39861,248.9945 C 345.83924,248.9945 345.35514,249.19868 344.94633,249.60771 344.53752,250.01674 344.33312,250.50061 344.33312,251.06022 L 344.33312,262.68014 C 337.57611,263.97077 332.08893,266.85432 327.87134,271.33012 323.65418,275.80616 321.54484,281.01274 321.54484,286.95237 321.54484,288.7167 321.72843,290.3951 322.09428,291.98668 322.45966,293.57962 322.91187,295.01065 323.45001,296.28002 323.9877,297.55028 324.75194,298.79796 325.74162,300.02481 326.7313,301.25122 327.66761,302.3058 328.54966,303.18761 329.43215,304.06922 330.58349,304.98404 332.00324,305.93054 333.42386,306.87793 334.63965,307.64239 335.65125,308.22305 336.66309,308.80187 338.00775,309.47115 339.6857,310.22251 341.3641,310.97613 342.68795,311.54568 343.65638,311.93393 344.62481,312.32079 345.94799,312.85939 347.62707,313.54653 349.95078,314.45028 351.67259,315.14986 352.79137,315.64503 353.91106,316.1402 355.33079,316.8287 357.05328,317.71098 358.77418,318.59235 360.03247,319.39955 360.82929,320.13146 361.62541,320.86337 362.34601,321.76712 362.992,322.84274 363.638,323.91832 363.96156,325.05882 363.96156,326.26442 363.96156,329.6644 362.63814,332.28906 359.99064,334.13818 357.34429,335.98932 354.2769,336.91456 350.79144,336.91456 349.20055,336.91456 347.60694,336.74339 346.01514,336.39927 340.42033,335.2789 335.19159,332.58911 330.32844,328.32879 L 330.19934,328.19968 C 329.81178,327.72757 329.29512,327.53356 328.65028,327.62016 327.96154,327.70609 327.46637,327.96453 327.16541,328.3957 L 320.51604,337.10992 C 319.87027,337.97048 319.91391,338.85252 320.64536,339.75629 320.86086,340.01472 321.23732,340.40295 321.77501,340.91848 322.31404,341.43604 323.31479,342.24166 324.77726,343.34123 326.24019,344.4392 327.83267,345.47071 329.55448,346.44026 331.27607,347.40823 333.45982,348.36534 336.10709,349.31252 338.75436,350.2581 341.49727,350.9249 344.33787,351.31198 L 344.33787,362.60901 C 344.33787,363.16931 344.5425,363.65296 344.95107,364.0622 345.3601,364.47169 345.84397,364.6752 346.40336,364.6752 L 355.11893,364.6752 C 355.7224,364.6752 356.21758,364.48187 356.60446,364.09499 356.99132,363.70812 357.18398,363.21295 357.18398,362.60925 L 357.18398,351.3122 C 364.02804,350.19342 369.59051,347.25606 373.87211,342.50034 378.15413,337.7446 380.29583,332.07449 380.29583,325.49046 380.29355,323.33903 380.01432,321.31627 379.44951,319.42149 z M 235.03325,127.82233 112.0484,127.82233 C 103.79219,127.82233 97.065715,134.55141 97.065715,142.80762 L 97.065715,357.1903 C 97.065715,365.45898 103.79167,372.17767 112.0484,372.17767 L 262.69363,372.17767 C 270.95868,372.17767 277.67684,365.45898 277.67684,357.1903 L 277.67684,174.15786 z M 238.56939,150.246 257.26063,170.55992 238.56939,170.55992 z M 265.09365,357.19082 C 265.09365,358.51077 264.01307,359.59447 262.6874,359.59447 L 112.0484,359.59447 C 110.72377,359.59447 109.64942,358.51077 109.64942,357.19082 L 109.64942,142.80762 C 109.64942,141.48455 110.72377,140.41228 112.0484,140.41228 L 225.97893,140.41228 225.97893,176.85437 C 225.97893,180.32407 228.80577,183.13688 232.27702,183.13688 L 265.09313,183.13688 265.09313,357.19082 z M 133.66202,211.4479 120.52997,159.69133 130.06927,159.69133 136.13836,185.54779 C 136.99307,189.15873 137.81556,192.82002 138.52279,196.20092 139.33024,192.73122 140.30125,189.04863 141.26033,185.44031 L 148.07403,159.69391 156.83031,159.69391 163.04531,185.61998 C 163.85119,189.00398 164.65189,192.49652 165.32745,195.87118 166.02273,192.86779 166.79331,189.7865 167.58519,186.6128 L 167.87701,185.46159 174.62166,159.69703 183.96623,159.69703 169.29822,211.45309 160.55702,211.45309 154.12081,184.88107 C 153.32582,181.61546 152.63053,178.62297 152.05676,175.69383 151.38587,178.61102 150.60335,181.59572 149.64583,184.93352 L 142.39492,211.45309 133.6615,211.45309 133.6615,211.4479 z M 191.16939,200.44741 247.48195,200.44741 C 250.085,200.44741 252.1963,202.56027 252.1963,205.16175 252.1963,207.76428 250.085,209.8761 247.48195,209.8761 L 191.16939,209.8761 C 188.56687,209.8761 186.45505,207.76428 186.45505,205.16175 186.45556,202.56079 188.56738,200.44741 191.16939,200.44741 z M 252.19682,236.64129 C 252.19682,239.24382 250.08552,241.35565 247.48247,241.35565 L 130.27645,241.35565 C 127.67394,241.35565 125.56211,239.24382 125.56211,236.64129 125.56211,234.03825 127.67341,231.92694 130.27645,231.92694 L 247.48247,231.92694 C 250.085,231.92694 252.19682,234.03878 252.19682,236.64129 z M 252.19682,264.5343 C 252.19682,267.13682 250.08552,269.24865 247.48247,269.24865 L 130.27645,269.24865 C 127.67394,269.24865 125.56211,267.13682 125.56211,264.5343 125.56211,261.93126 127.67341,259.81995 130.27645,259.81995 L 247.48247,259.81995 C 250.085,259.81995 252.19682,261.93178 252.19682,264.5343 z M 252.19682,292.42732 C 252.19682,295.03037 250.08552,297.14168 247.48247,297.14168 L 130.27645,297.14168 C 127.67394,297.14168 125.56211,295.03037 125.56211,292.42732 125.56211,289.8248 127.67341,287.71298 130.27645,287.71298 L 247.48247,287.71298 C 250.085,287.71298 252.19682,289.8248 252.19682,292.42732 z M 252.19682,320.71342 C 252.19682,323.31646 250.08552,325.42777 247.48247,325.42777 L 130.27645,325.42777 C 127.67394,325.42777 125.56211,323.31646 125.56211,320.71342 125.56211,318.11037 127.67341,315.99907 130.27645,315.99907 L 247.48247,315.99907 C 250.085,315.99907 252.19682,318.11037 252.19682,320.71342 z" />

                  </g>
    );
}
SvgBillMakerTemplate.propTypes = {
};

export default SvgBillMakerTemplate

    