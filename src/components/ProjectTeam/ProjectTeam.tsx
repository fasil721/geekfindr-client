import React, { useEffect, useState } from 'react'

import './_ProjectTeam.scss'

import { useTypedSelector } from '../../hooks/useTypedSelector';
import { UserData } from '../../models';

const ProjectTeam = () => {
    const CurrentUser: UserData = JSON.parse(localStorage.getItem("gfr-user") as string);
    const [selectedRadioBtn, setSelectedRadioBtn] = useState('admin')

    let { data: projectDetails }: any = useTypedSelector(
        (state) => state.GetProjectDetails
    )

    let isOwner = true;
    projectDetails?.team?.every((member: any) => {
        isOwner = member?.role === 'owner' && member?.user?.id === CurrentUser?.id
        if (isOwner == true) {
            return false
        }
        return true;
    })
    projectDetails = { ...projectDetails, isOwner: isOwner }

    let isAdmin = true;
    projectDetails?.team?.every((member: any) => {
        isAdmin = member?.role === 'admin' && member?.user?.id === CurrentUser?.id
        if (isAdmin == true) {
            return false
        }
        return true;
    })
    projectDetails = { ...projectDetails, isAdmin: isAdmin }

    let isCollaborator = true;
    projectDetails?.team?.every((member: any) => {
        isCollaborator = member?.role === 'collaborator' && member?.user?.id === CurrentUser?.id
        if (isCollaborator == true) {
            return false
        }
        return true;
    })
    projectDetails = { ...projectDetails, isCollaborator: isCollaborator }

    let isJoinRequest = true;
    projectDetails?.team?.every((member: any) => {
        isJoinRequest = member?.role === 'joinRequest' && member?.user?.id === CurrentUser?.id
        if (isJoinRequest == true) {
            return false
        }
        return true;
    })
    projectDetails = { ...projectDetails, isjoinRequest: isJoinRequest }

    console.log(projectDetails);








    const isRadioSelected = (value: string): boolean => selectedRadioBtn === value;

    const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.currentTarget.value);

        setSelectedRadioBtn(e.currentTarget.value)
        if (e.currentTarget.value === 'project') {

        } else if (e.currentTarget.value === 'post') {

        }
    }




    return (


        <div className='projectteam'>
            <div className="projectteam_header">
                <h3>Teammates</h3>
            </div>
            <hr />
            {
                projectDetails?.team?.map((teammates: any) => (
                    <div className="projectteam_user" key={teammates?.user?.id}>
                        <div className="projectteam_user_left">
                            <img src={teammates?.user?.avatar} alt="profile img" />
                            <div className="projectteam_user_left_body">
                                <h5>{teammates?.user?.username}</h5>
                                <p>{teammates?.role}</p>
                            </div>
                        </div>
                        <div className="projectteam_user_right">
                            {(projectDetails?.isOwner && projectDetails?.isAdmin) &&
                                <div className='projectteam_user_right_radios'>
                                    <input className='projectteam_user_right_input' id='myradio1' value='admin' type="radio"
                                        checked={isRadioSelected('admin')} onChange={handleRadioClick} />
                                    <label htmlFor='myradio1' className='projectteam_user_right_label'>Admin</label>
                                    <input className='projectteam_user_right_input' id='myradio2' type="radio" value='collaborator'
                                        checked={isRadioSelected('collaborator')} onChange={handleRadioClick} />
                                    <label htmlFor='myradio2' className='projectteam_user_right_label'>Collaborator</label>
                                </div>
                            }
                        </div>
                    </div>
                ))
            }
        </div>




    )
}

export default ProjectTeam