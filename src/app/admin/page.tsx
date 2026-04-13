import { AdminPanel } from '@/components/component/adminPanel'
import React from 'react'
import { getUser } from '../(service)/get-user'

const Admin = async () => {
  const user = await getUser();

  return (
    <div>
        <AdminPanel user={user} />
    </div>
  )
}

export default Admin;
