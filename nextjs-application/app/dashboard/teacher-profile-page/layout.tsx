'use client'

import TeacherProfileLayout from './TeacherProfileLayout';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TeacherProfileLayout>
      {children}
    </TeacherProfileLayout>
  );
}

