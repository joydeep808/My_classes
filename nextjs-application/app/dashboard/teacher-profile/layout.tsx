'use client'
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/24/solid';
import { Button } from '@/app/ui/button';
import { useState } from 'react';
import clsx from 'clsx';
import { number } from 'zod';
import Link from 'next/link';
import TeacherProfileLayout from './[TeacherProfileLayout]';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <TeacherProfileLayout>
      {children}
    </TeacherProfileLayout>
  );
}

