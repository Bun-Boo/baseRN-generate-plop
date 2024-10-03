import React from 'react';
import Svg, {Path} from 'react-native-svg';

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}

function ICComment({width = 21, height = 21, color = '#A32E8C'}: IProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 21 21" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.6694 1.09375H13.7055C14.751 1.09374 15.5825 1.09374 16.2493 1.15714C16.933 1.22215 17.5111 1.35841 18.026 1.67398C18.5559 1.99865 19.0013 2.44411 19.326 2.97392C19.6415 3.48888 19.7778 4.06696 19.8428 4.75068C19.9062 5.41748 19.9062 6.24892 19.9062 7.29446V8.00823C19.9062 8.75248 19.9062 9.34443 19.8735 9.82443C19.84 10.3154 19.77 10.7371 19.6065 11.1319C19.2068 12.0967 18.4403 12.8632 17.4755 13.2628C17.1438 13.4002 16.7901 13.4724 16.3895 13.5116C16.3848 13.6336 16.3789 13.7495 16.3714 13.8598C16.3358 14.3813 16.2617 14.8257 16.0899 15.2406C15.668 16.259 14.8589 17.0681 13.8405 17.4899C13.3183 17.7062 12.7422 17.7696 12.0178 17.7928C11.628 17.8053 11.3789 17.8138 11.1896 17.8369C11.0107 17.8587 10.9436 17.8879 10.9073 17.9094C10.8669 17.9332 10.8112 17.977 10.7141 18.1107C10.6092 18.2551 10.4905 18.4544 10.3024 18.7722L10.0754 19.1557C9.48307 20.1564 8.0169 20.1564 7.42458 19.1557L7.19757 18.7722C7.00947 18.4544 6.89072 18.2551 6.78583 18.1107C6.68874 17.977 6.63306 17.9332 6.59272 17.9094C6.55642 17.8879 6.48927 17.8587 6.31034 17.8369C6.12108 17.8138 5.87193 17.8053 5.48216 17.7928C4.75776 17.7696 4.18173 17.7062 3.65947 17.4899C2.64107 17.0681 1.83196 16.259 1.41013 15.2406C1.23827 14.8257 1.16416 14.3813 1.12858 13.8598C1.09374 13.3492 1.09375 12.7191 1.09375 11.924V11.1662C1.09374 10.0492 1.09374 9.16404 1.16117 8.45487C1.2302 7.72877 1.37453 7.11964 1.70621 6.57837C2.04892 6.01913 2.51912 5.54893 3.07836 5.20622C3.61963 4.87453 4.22876 4.7302 4.95485 4.66117C5.13943 4.64362 5.33592 4.63064 5.54532 4.62104C5.61535 3.99117 5.75495 3.45366 6.04893 2.97392C6.3736 2.44411 6.81905 1.99865 7.34886 1.67398C7.86383 1.35841 8.4419 1.22215 9.12562 1.15714C9.79242 1.09374 10.6239 1.09374 11.6694 1.09375ZM6.87165 4.5948C7.12259 4.59375 7.38713 4.59375 7.66613 4.59375H9.83386C10.9509 4.59374 11.836 4.59374 12.5451 4.66117C13.2712 4.7302 13.8804 4.87453 14.4216 5.20622C14.9809 5.54893 15.4511 6.01913 15.7938 6.57837C16.1255 7.11964 16.2698 7.72877 16.3388 8.45487C16.4063 9.16404 16.4063 10.0492 16.4062 11.1661V11.924C16.4062 12.0144 16.4062 12.1027 16.4062 12.1889C16.6472 12.1576 16.823 12.1125 16.9732 12.0502C17.6164 11.7838 18.1275 11.2728 18.3939 10.6296C18.4801 10.4214 18.5351 10.1593 18.564 9.73509C18.5933 9.30502 18.5937 8.75782 18.5937 7.9844V7.32815C18.5937 6.24134 18.593 5.47232 18.5362 4.87491C18.4803 4.28727 18.3748 3.93378 18.2069 3.6597C17.9904 3.30649 17.6935 3.00952 17.3403 2.79307C17.0662 2.62512 16.7127 2.51962 16.1251 2.46374C15.5276 2.40694 14.7586 2.40625 13.6718 2.40625H11.7031C10.6163 2.40625 9.84726 2.40694 9.24985 2.46374C8.66221 2.51962 8.30872 2.62512 8.03465 2.79307C7.68144 3.00952 7.38447 3.30649 7.16802 3.6597C7.02753 3.88896 6.93201 4.17101 6.87165 4.5948ZM5.07909 5.96777C4.44907 6.02768 4.06452 6.14123 3.76415 6.32531C3.3815 6.55979 3.05979 6.88151 2.82531 7.26415C2.64123 7.56453 2.52768 7.94908 2.46777 8.5791C2.40694 9.21889 2.40625 10.0416 2.40625 11.2V11.9C2.40625 12.7244 2.40661 13.3098 2.43803 13.7704C2.46905 14.2251 2.52815 14.51 2.62272 14.7383C2.91134 15.4351 3.46495 15.9887 4.16175 16.2773C4.45415 16.3985 4.83089 16.4588 5.52412 16.481L5.55133 16.4818C5.90606 16.4932 6.2146 16.503 6.46926 16.5341C6.74075 16.5672 7.00747 16.6298 7.26094 16.7797C7.51036 16.9273 7.69052 17.1229 7.84777 17.3394C7.99325 17.5396 8.14313 17.7929 8.31305 18.08L8.55405 18.4872C8.59378 18.5543 8.66315 18.5938 8.74999 18.5938C8.83682 18.5938 8.90619 18.5543 8.94592 18.4872L9.18694 18.08C9.35684 17.7929 9.50673 17.5396 9.6522 17.3394C9.80945 17.1229 9.98961 16.9273 10.239 16.7797C10.4925 16.6298 10.7592 16.5672 11.0307 16.5341C11.2854 16.503 11.5939 16.4932 11.9486 16.4818L11.9758 16.481C12.6691 16.4588 13.0458 16.3985 13.3383 16.2773C14.0351 15.9887 14.5887 15.4351 14.8773 14.7383C14.9719 14.51 15.0309 14.2251 15.062 13.7704C15.0934 13.3098 15.0937 12.7244 15.0937 11.9V11.2C15.0937 10.0416 15.0931 9.21889 15.0322 8.5791C14.9723 7.94908 14.8588 7.56453 14.6747 7.26415C14.4402 6.88151 14.1185 6.55979 13.7359 6.32531C13.4355 6.14123 13.0509 6.02768 12.4209 5.96777C11.7811 5.90694 10.9584 5.90625 9.8 5.90625H7.7C6.54159 5.90625 5.71887 5.90694 5.07909 5.96777Z"
        fill={color}
      />
      <Path
        d="M6.5625 11.375C6.5625 11.8582 6.17075 12.25 5.6875 12.25C5.20425 12.25 4.8125 11.8582 4.8125 11.375C4.8125 10.8918 5.20425 10.5 5.6875 10.5C6.17075 10.5 6.5625 10.8918 6.5625 11.375Z"
        fill={color}
      />
      <Path
        d="M9.625 11.375C9.625 11.8582 9.23325 12.25 8.75 12.25C8.26675 12.25 7.875 11.8582 7.875 11.375C7.875 10.8918 8.26675 10.5 8.75 10.5C9.23325 10.5 9.625 10.8918 9.625 11.375Z"
        fill={color}
      />
      <Path
        d="M12.6875 11.375C12.6875 11.8582 12.2957 12.25 11.8125 12.25C11.3293 12.25 10.9375 11.8582 10.9375 11.375C10.9375 10.8918 11.3293 10.5 11.8125 10.5C12.2957 10.5 12.6875 10.8918 12.6875 11.375Z"
        fill={color}
      />
    </Svg>
  );
}

export default ICComment;
