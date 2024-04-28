import fs from 'fs';
import UploadFile from './components/UploadFile';

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <UploadFile />
    </main>
  );
}
