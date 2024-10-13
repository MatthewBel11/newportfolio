import React from 'react';

function Job(props) {
    return (
        <>
            <div className="w-full h-[72px] flex flex-row mt-8 my-2">
                <div className="w-auto h-auto">
                    <img className="w-[71.2px] h-[71.2px] rounded-md mr-5" alt="JobLogo" src={props.Image} />
                </div>

                <div className="h-[72px]">
                    <h2 className="text-lg font-medium text-gray-800">{props.CompanyTitle}</h2>
                    <h2 className="text-base font-medium text-gray-800">{props.JobTitle}</h2>
                    <h3 className="text-sm font-normal text-gray-600 mt-1">{props.JobLocation}</h3>
                </div>
            </div>
            <p className="text-gray-600">{props.JobText}</p>
        </>
    );
}

export default Job;
