import './_RightAside.scss'

import { FriendRequest, Messages, Userinfo } from '..'

import { ProfileProps, ProfileRightAsideProps } from '../../models'

import { BiEdit, BiSearch } from 'react-icons/bi'



const RightAside = ({ profile, userProfile }: ProfileRightAsideProps) => {


    const HomeRightAside = () => {
        return (
            <div className='rightaside_wrapper_messages'>
                <div className="rightaside_wrapper_messages_heading">
                    <h4>Messages</h4><BiEdit size={21} />
                </div>
                <div className="rightaside_wrapper_messages_search">
                    <BiSearch />
                    <input type="text" placeholder='Search Messages' />
                </div>
                <Messages />
                <Messages />
                <Messages />
                <FriendRequest />
            </div>
        )
    }

    const ProfileRightAside = ({ userProfile }: ProfileRightAsideProps) => {
        return (
            <>
                <Userinfo userProfile={userProfile} />
            </>
        )
    }

    return (
        <div className={profile ? 'profilerightaside' : 'rightaside'}>
            <div className="rightaside_wrapper">
                {profile ? <ProfileRightAside userProfile={userProfile} /> : <HomeRightAside />}
            </div>
        </div>
    )
}

export default RightAside
