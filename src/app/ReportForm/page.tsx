import React from 'react';
import { Navbar } from '@/components/component/navbar'
import { UserNavbar } from '@/components/component/UserNavbar';
import { getUser } from '../(service)/get-user';
import { GetNavbar } from '../(service)/get-navbar';
import { ReportForm } from "./report-form";

const ReportFormPage = () => {

  
  return (
    <div>
      <GetNavbar />
      <ReportForm />
    </div>
  );
};

export default ReportFormPage;
