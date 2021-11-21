import React, { useState } from 'react';

import {
  SignatureBoxOptionsStyle,
  SignatureCheckboxStyle,
  SignatureFlexStyle,
  SignatureOptionStyle,
} from './SignatureStyle';

import arrow from '../../assets/images/arrow.svg';

const SignatureOption = function ({
  isSelected,
  handleClick,
  options,
  type,
  title,
}) {
  const [isFirstChecked, setIsFirstChecked] = useState(false);
  const [isSecondChecked, setIsSecondChecked] = useState(false);
  const [isThirdChecked, setIsThirdChecked] = useState(false);

  return (
    <SignatureOptionStyle
      height={isSelected ? '111px' : '44px'}
    >
      <SignatureFlexStyle onClick={() => handleClick(type)}>
        <strong>{title}</strong>
        {!isSelected ? <img src={arrow} alt="" /> : null}
      </SignatureFlexStyle>

      {isSelected ? (
        <SignatureBoxOptionsStyle>
          <SignatureCheckboxStyle
            onClick={() => setIsFirstChecked(!isFirstChecked)}
          >
            <input type="radio" checked={isFirstChecked} />
            {options[0]}
          </SignatureCheckboxStyle>

          <SignatureCheckboxStyle
            onClick={() => setIsSecondChecked(!isSecondChecked)}
          >
            <input type="radio" checked={isSecondChecked} />
            {options[1]}
          </SignatureCheckboxStyle>

          <SignatureCheckboxStyle
            onClick={() => setIsThirdChecked(!isThirdChecked)}
          >
            <input type="radio" checked={isThirdChecked} />
            {options[2]}
          </SignatureCheckboxStyle>
        </SignatureBoxOptionsStyle>
      ) : null}

    </SignatureOptionStyle>
  );
};

export default SignatureOption;
