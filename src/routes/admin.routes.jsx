import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Dish } from '../pages/Dish'
import { New } from '../pages/New';
import { Edit } from '../pages/Edit';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dish />} />
      <Route path="/new" element={<New />} />
      <Route path="/edit/:id" element={<Edit />} />
    </Routes>
  );
}