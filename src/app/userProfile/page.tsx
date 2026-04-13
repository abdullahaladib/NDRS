import { UserProfile } from '@/components/component/user-profile'
import React from 'react'
import { cookies } from 'next/headers'
import { getUser } from '../(service)/get-user'

const userprofile = async () => {

  const user = await getUser();
  return (
    <div>
        <UserProfile user={user} />
    </div>
  )
}

export default userprofile