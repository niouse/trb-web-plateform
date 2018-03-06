
import React, {Component} from 'react';
import PropTypes from 'prop-types';


  const SvgBeTemplate = (props) => {
      let styles = props.styles
      let text = props.text
      return (
               <g id="be" fill={props.color || "black"} >
                    <path id="path4412" fill={props.color || "black"}  d="M 381.182,127.59671 381.182,127.16628 379.74112,127.16628 120.11411,127.16628 118.67324,127.16628 118.67324,127.59671 C 110.17899,128.18057 103.84173,134.93864 102.83418,143.14096 L 102.83418,144.58472 102.83418,315.66422 C 102.83418,318.98169 103.69746,321.77783 105.13832,324.29649 108.4534,330.13357 113.34689,333.08265 120.11459,333.08265 L 214.86422,333.08265 214.86422,356.98263 196.86529,356.98263 C 192.40175,356.98263 188.94576,360.45401 188.94576,364.90842 188.94576,369.36281 192.40175,372.83372 196.86529,372.83372 L 302.9909,372.83372 C 307.45445,372.83372 311.0552,369.36234 311.0552,364.90842 311.0552,360.45353 307.45493,356.98263 302.9909,356.98263 L 284.99198,356.98263 284.99198,333.08265 379.74112,333.08265 C 386.5117,333.08265 391.44848,330.13357 394.71739,324.29649 396.20106,321.65472 397.16582,318.82828 397.16582,315.66422 L 397.16582,144.58521 397.16582,143.14145 C 396.15778,134.93864 389.3901,128.18057 381.182,127.59671 z M 381.182,144.58521 381.182,315.66471 C 381.182,316.6785 380.75156,317.10847 379.74112,317.10847 L 120.11411,317.10847 C 119.10656,317.10847 118.67324,316.6785 118.67324,315.66471 L 118.67324,144.58521 118.67324,143.14145 381.18153,143.14145 381.18153,144.58521 z M 309.9636,250.17422 C 302.7807,242.99157 292.35955,239.97617 282.47838,242.1409 L 272.78975,232.45227 302.38749,202.85424 C 302.39059,202.85116 315.34804,189.89368 315.34804,189.89368 317.50435,187.73739 318.69182,184.86036 318.69182,181.79359 318.69182,178.72627 317.50407,175.84951 315.34804,173.69321 L 302.38946,160.73434 C 300.23288,158.57804 297.35584,157.39028 294.28908,157.39028 291.22175,157.39028 288.34501,158.57776 286.18814,160.73462 L 243.63012,203.29236 233.94149,193.60372 C 236.10677,183.72341 233.09109,173.30141 225.90819,166.11879 217.85327,158.06386 206.13519,155.31537 195.32701,158.94598 194.57485,159.19886 194.00679,159.82248 193.8252,160.59485 193.64363,161.36751 193.87461,162.17889 194.43591,162.73992 L 210.21205,178.51606 207.28225,189.63633 196.16114,192.56219 180.38529,176.78663 C 179.82397,176.22531 179.01258,175.99434 178.24049,176.17592 177.46813,176.35723 176.84421,176.925 176.59105,177.67716 172.95765,188.48731 175.70558,200.20735 183.76218,208.26395 190.94508,215.44657 201.36708,218.46226 211.24712,216.29726 L 216.07305,221.1229 C 216.52041,221.57027 217.10728,221.79453 217.69385,221.79453 218.28043,221.79453 218.8673,221.57084 219.31466,221.1229 220.20997,220.22759 220.20997,218.77603 219.31466,217.88102 L 213.57883,212.14518 C 213.00068,211.56646 212.15813,211.33997 211.3664,211.55131 202.68505,213.86927 193.34978,211.36776 187.00407,205.02206 181.10602,199.12401 178.57082,190.90491 179.98563,182.87077 L 193.84991,196.73505 C 194.42638,197.31152 195.26582,197.53828 196.05392,197.33116 L 209.74109,193.7303 C 210.54013,193.52008 211.16432,192.89618 211.37455,192.09714 L 214.82272,179.00918 223.54307,170.28881 C 229.23568,176.59551 231.40237,185.45422 229.1947,193.72272 228.98336,194.51334 229.20987,195.35645 229.78858,195.93516 L 240.38739,206.53397 188.66416,258.2583 C 188.60355,258.31892 188.54798,258.38236 188.49549,258.44775 188.4823,258.46431 188.47079,258.48199 188.45789,258.49883 188.41943,258.54991 188.38239,258.60156 188.34844,258.6546 188.33551,258.67481 188.32401,258.69556 188.31194,258.71634 188.2808,258.76883 188.2516,258.82215 188.22549,258.8766 188.21483,258.89905 188.20445,258.92123 188.19434,258.94396 188.16965,258.99952 188.14691,259.05622 188.1267,259.11319 188.12193,259.12723 188.11493,259.1407 188.11016,259.15473 L 175.15127,298.03078 C 174.8768,298.85451 175.09093,299.76273 175.70501,300.37681 176.14201,300.81379 176.72773,301.04843 177.32611,301.04843 177.56859,301.04843 177.81333,301.00998 178.05077,300.93083 L 216.92766,287.97196 C 216.94198,287.96719 216.95544,287.96017 216.96976,287.95511 217.02673,287.93492 217.08258,287.91274 217.13787,287.88776 217.16088,287.87765 217.18305,287.86727 217.20578,287.85634 217.25995,287.82995 217.31301,287.80104 217.3652,287.77017 217.38598,287.75781 217.40674,287.74632 217.42724,287.7334 217.48027,287.69972 217.5322,287.66267 217.58271,287.62423 217.59984,287.61132 217.61752,287.59981 217.63408,287.58633 217.69947,287.53414 217.76317,287.47801 217.82353,287.41765 L 269.54786,235.6936 280.14666,246.2924 C 280.72624,246.87141 281.56933,247.09762 282.3591,246.88629 291.0413,244.56859 300.37602,247.07012 306.72144,253.41554 312.61751,259.3119 315.15327,267.52847 313.74072,275.56066 L 299.87673,261.69638 C 299.29996,261.11963 298.45968,260.89285 297.6713,261.10055 L 283.9844,264.70645 C 283.18565,264.91666 282.56174,265.54085 282.35153,266.33989 L 278.9084,279.42757 270.18468,288.1513 C 264.49038,281.84434 262.32258,272.98477 264.53053,264.71515 264.7413,263.92453 264.51536,263.08144 263.93693,262.50271 L 258.20053,256.7666 C 257.30495,255.8713 255.85367,255.8713 254.95837,256.7666 254.06307,257.66192 254.06307,259.11348 254.95837,260.0085 L 259.78429,264.83443 C 257.61901,274.71476 260.63469,285.13703 267.81731,292.31936 268.00508,292.50713 268.19452,292.69096 268.38622,292.87282 268.43364,292.93038 268.4836,292.98621 268.53748,293.04011 268.62869,293.13132 268.72637,293.21047 268.82797,293.28287 274.39821,298.36617 281.51432,301.06752 288.821,301.06723 292.01658,301.06723 295.24979,300.55026 298.40466,299.48993 299.15683,299.23706 299.7246,298.61343 299.90591,297.84049 300.0872,297.06812 299.85624,296.25645 299.29519,295.6957 L 283.51935,279.91985 286.44522,268.79873 297.56605,265.86893 313.3419,281.64507 C 313.90349,282.20638 314.716,282.43792 315.48726,282.25578 316.25964,282.0742 316.88354,281.50642 317.13641,280.75368 320.76646,269.94692 318.01824,258.22884 309.9636,250.17422 z M 212.76408,174.58487 200.52089,162.34111 C 207.47702,161.11745 214.56956,162.85724 220.17488,167.17407 z M 289.43031,163.97595 C 290.72079,162.68548 292.44628,161.97485 294.28908,161.97485 296.13132,161.97485 297.85711,162.68548 299.14757,163.97595 L 312.10615,176.93482 C 314.78533,179.61399 314.78533,183.97291 312.10615,186.65179 L 300.76838,197.98958 278.09253,175.31373 z M 180.95082,295.1313 184.80764,283.56141 192.52098,291.27476 z M 197.38396,289.65368 186.42844,278.69842 191.28692,264.12296 211.95915,284.79519 z M 216.20271,282.55524 193.52658,259.87911 266.21082,187.19516 275.92808,196.91185 208.10233,264.73788 C 207.20704,265.63318 207.20704,267.08474 208.10233,267.97978 208.54971,268.42714 209.13655,268.65139 209.72315,268.65139 210.30973,268.65139 210.89657,268.4277 211.34395,267.97978 L 279.16941,200.15458 284.0279,205.0128 C 284.47556,205.46016 285.0627,205.68442 285.649,205.68442 286.23557,205.68442 286.82243,205.46073 287.27008,205.0128 288.16538,204.11749 288.16538,202.66592 287.27008,201.77091 L 280.79106,195.29189 C 280.79022,195.29105 269.45243,183.95326 269.45243,183.95326 L 274.84979,178.55591 297.52564,201.23176 z M 293.21134,296.09647 C 286.25522,297.32071 279.16128,295.58287 273.55427,291.26661 L 280.9676,283.85329 z"/>
                </g>
      );
  }
  SvgBeTemplate.propTypes = {
  };

export default SvgBeTemplate