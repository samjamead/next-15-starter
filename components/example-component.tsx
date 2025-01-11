'use client';

import { toast } from 'sonner';

export default function ExampleComponent() {
  return (
    <div>
      <button
        className='px-3 py-2 bg-blue-500/40 text-sm hover:bg-blue-500/30 transition-colors duration-300 rounded-md'
        onClick={() => toast.success("Toast's up!")}
      >
        Pop the toast
      </button>
    </div>
  );
}
