import ExampleComponent from '@/components/example-component';

export default function Home() {
  const exampleItems = [
    {
      id: 1,
      title: 'Item 1',
      description: 'A row of colorful buildings in a city',
      link: 'https://unsplash.com/photos/a-row-of-colorful-buildings-in-a-city-nDum9PC0wOg',
      img: 'https://images.unsplash.com/photo-1733418750591-6b47d7614c7b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE2fE04alZiTGJUUndzfHxlbnwwfHx8fHw%3D',
    },
    {
      id: 2,
      title: 'Item 2',
      description: 'Two chairs and a table in front of a blue door',
      link: 'https://unsplash.com/photos/two-chairs-and-a-table-in-front-of-a-blue-door-8s1tjptrkSY',
      img: 'https://plus.unsplash.com/premium_photo-1694161844113-ea9dac1c7af2?q=80&w=3271&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      title: 'Item 3',
      description: 'White chair in a bedroom',
      link: 'https://unsplash.com/photos/brown-wooden-framed-white-padded-chair-in-between-green-indoor-leaf-plants-inside-bedroom-psrloDbaZc8',
      img: 'https://images.unsplash.com/photo-1499916078039-922301b0eb9b?q=80&w=2585&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      title: 'Item 4',
      description: 'Magazines hanging on wall',
      link: 'https://unsplash.com/photos/magazines-hanged-on-wall-near-round-beige-wooden-table-heEPoapeiVk',
      img: 'https://images.unsplash.com/photo-1477120206578-46b3ca98a4e2?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      title: 'Item 5',
      description: 'Baked pastry on a bowl',
      link: 'https://unsplash.com/photos/baked-pastry-on-bowl-n49BjsFf5dI',
      img: 'https://images.unsplash.com/photo-1534432182912-63863115e106?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <div className='max-w-7xl flex flex-col mx-auto min-h-svh px-8 py-16 gap-16'>
      <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>Next 15 Starter Repo</h2>
        <p className='text-muted-foreground max-w-prose'>
          This is a starter repo for Next 15. It includes Tailwind CSS, and
          TypeScript. ShadCN UI is initialised, with Sonner included as an
          example component.
        </p>
        <ExampleComponent />
      </div>
      <div className='grid grid-cols-2 gap-6'>
        <div className=''>
          {exampleItems.slice(0, 1).map((item) => (
            <div key={item.id} className='flex flex-col gap-4'>
              <img
                src={item.img}
                alt={item.title}
                width={300}
                height={300}
                className='w-full h-auto object-cover aspect-[4/3] rounded-md'
              />
              <div className='flex flex-col gap-2'>
                <p className='font-semibold'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className='grid grid-cols-2 gap-6'>
          {exampleItems.slice(1).map((item) => (
            <div key={item.id} className='flex flex-col gap-2'>
              <img
                src={item.img}
                alt={item.title}
                width={300}
                height={300}
                className='w-full h-auto object-cover aspect-video rounded-md'
              />
              <div className='flex flex-col gap-1'>
                <p className='font-semibold'>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
