import React from 'react';

function Skills(props) {
  return (
    <div className="inline-flex items-center h-[22px] rounded-full bg-gray-200 text-gray-600 mx-2 pr-3">
      <img className="w-4 h-4 mx-1" src={props.Icon} alt='SkillIcon' />
      <p className="whitespace-nowrap">{props.SkillName}</p>
    </div>
  );
}

export default Skills;
