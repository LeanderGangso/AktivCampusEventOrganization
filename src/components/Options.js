import { useState } from 'react'
import { MdMoreVert } from 'react-icons/md'
import { IconContext } from "react-icons";

import OutsideClickWrapper from './OutsideClickWrapper'

const Show = (options) => {
  return (
    <div className='absolute z-40 top-8 right-0 w-40 rounded-md bg-light shadow-md border border-border'>
      {options.map(option => (
        <div className='flex flex-row gap-2 px-4 py-2 border-b border-border hover:cursor-pointer hover:bg-border'>
          <IconContext.Provider value={{ color: option.icon.color, size: "1.5em" }}>
            {option.icon.component}
          </IconContext.Provider>
          <div>{option.name}</div>
        </div>
      ))}
    </div>
  )
}

function Options({ options }) {
  const [isOption, setIsOption] = useState(false)

  return (
    <>
      <OutsideClickWrapper onOutsideClick={() => setIsOption(false)} >
        <MdMoreVert onClick={() => setIsOption(!isOption)} className='w-6 h-6 hover:cursor-pointer' />
        {isOption ? Show(options) : null}
      </OutsideClickWrapper>
    </>
  );
}

export default Options;
