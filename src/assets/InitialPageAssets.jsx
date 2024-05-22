import InitialPageImage from './InitialPageImage.png'

export const Lines = () => {
  return (
    <svg
      width='390'
      height='530'
      viewBox='0 0 390 530'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M319 5C319 5 389.488 79.4842 398.5 140C422.529 301.357 -9.64129 45.9088 -13.5 209C-15.4319 290.654 8.61198 364.586 85 393.5C163.811 423.331 217.175 262.492 285 312.5C360.495 368.164 211 541 211 541'
        stroke='#1EA81E'
        strokeOpacity='0.75'
        strokeWidth='0.75'
      />
      <path
        d='M319.5 0.5C319.5 0.5 397.094 79.4842 406.106 140C430.136 301.357 -2.03484 45.9088 -5.89356 209C-7.82548 290.654 16.2184 364.586 92.6064 393.5C171.417 423.331 224.782 262.492 292.606 312.5C368.102 368.164 218.606 541 218.606 541'
        stroke='#1A5D1A'
        strokeOpacity='0.75'
        strokeWidth='0.75'
      />
    </svg>
  )
}

export const Image = () => {
  return <img src={InitialPageImage} alt='' />
}
