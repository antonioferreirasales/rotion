import { Outlet } from 'react-router-dom';
import { Routes } from '../Routes';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

export function Default(): JSX.Element {
  return (
    <div className="h-screen w-screen bg-rotion-900 text-rotion-100 flex">
      <Sidebar />
      <div className="flex-1 flex flex-col max-h-screen">
        <Header />
        <Outlet />
      </div>
    </div>
  )
}
